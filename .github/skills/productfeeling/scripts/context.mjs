/**
 * Context loader for ProductFeeling skill.
 *
 * Prefer project docs (DocSlime-shaped or otherwise) as feeling/product SoT.
 * Legacy FEELING.md is still reported when present, but never required.
 *
 * Resolution:
 * 1. docs/ tree (PRODUCT, DESIGN, REQUIREMENTS, strategy/, experience/)
 * 2. Legacy FEELING.md (root, .productfeeling/, .agents/context/, docs/)
 * 3. $PRODUCTFEELING_CONTEXT_DIR override for FEELING.md only
 */
import fs from 'node:fs';
import path from 'node:path';

const FEELING_NAMES = ['FEELING.md', 'Feeling.md', 'feeling.md'];
const FEELING_FALLBACK_DIRS = ['.productfeeling', '.agents/context', 'docs'];

const DOCS_ROOT_FILES = ['PRODUCT.md', 'DESIGN.md', 'REQUIREMENTS.md'];
const DOCS_SUBDIRS = ['strategy', 'experience'];

function firstExisting(dir, names) {
  for (const name of names) {
    const p = path.join(dir, name);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  return null;
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch {
    return null;
  }
}

function listMarkdown(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => path.join(dir, f));
}

function resolveDocsTree(cwd) {
  const docsDir = path.join(path.resolve(cwd), 'docs');
  if (!fs.existsSync(docsDir) || !fs.statSync(docsDir).isDirectory()) {
    return null;
  }

  const files = [];
  for (const name of DOCS_ROOT_FILES) {
    const p = path.join(docsDir, name);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) files.push(p);
  }
  for (const sub of DOCS_SUBDIRS) {
    files.push(...listMarkdown(path.join(docsDir, sub)));
  }

  if (files.length === 0) return null;
  return { docsDir, files };
}

function resolveFeelingPath(cwd = process.cwd()) {
  const absCwd = path.resolve(cwd);

  let feelingPath = firstExisting(absCwd, FEELING_NAMES);
  if (feelingPath) return { feelingPath, feelingDir: absCwd };

  for (const dir of FEELING_FALLBACK_DIRS) {
    const base = path.join(absCwd, dir);
    if (!fs.existsSync(base)) continue;
    feelingPath = firstExisting(base, FEELING_NAMES);
    if (feelingPath) return { feelingPath, feelingDir: path.dirname(feelingPath) };
  }

  const envDir = process.env.PRODUCTFEELING_CONTEXT_DIR;
  if (envDir) {
    const resolved = path.isAbsolute(envDir) ? envDir : path.join(absCwd, envDir);
    feelingPath = firstExisting(resolved, FEELING_NAMES);
    if (feelingPath) return { feelingPath, feelingDir: path.dirname(feelingPath) };
  }

  return { feelingPath: null, feelingDir: absCwd };
}

function hasProductFeelingDir(cwd) {
  return fs.existsSync(path.join(path.resolve(cwd), '.productfeeling'));
}

function parseArgs(argv) {
  const args = { target: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--target' && argv[i + 1]) {
      args.target = argv[++i];
    }
  }
  return args;
}

function rel(cwd, filePath) {
  return path.relative(path.resolve(cwd), filePath);
}

function printPriorReviews(cwd) {
  const reviewsDir = path.join(cwd, '.productfeeling', 'reviews');
  if (!fs.existsSync(reviewsDir)) return;
  const reviews = fs.readdirSync(reviewsDir).filter((f) => f.endsWith('.md'));
  if (reviews.length === 0) return;
  console.log('<!-- PRODUCTFEELING_PRIOR_REVIEWS:');
  for (const r of reviews.slice(-5)) {
    console.log(`  - .productfeeling/reviews/${r}`);
  }
  console.log('-->');
  console.log('');
}

function main() {
  const cwd = process.cwd();
  const { target } = parseArgs(process.argv);
  const docs = resolveDocsTree(cwd);
  const { feelingPath, feelingDir } = resolveFeelingPath(cwd);
  const feeling = feelingPath ? safeRead(feelingPath) : null;
  const pfDir = hasProductFeelingDir(cwd);

  if (!docs && !feeling) {
    console.log('NO_PROJECT_DOCS: No docs/ tree and no FEELING.md found.');
    console.log('');
    console.log('Searched: docs/ (PRODUCT, DESIGN, REQUIREMENTS, strategy/, experience/),');
    console.log('          FEELING.md in project root, .productfeeling/, .agents/context/, docs/');
    console.log('');
    console.log('Prefer durable docs (DocSlime) for feeling context. Run `/productfeeling init`');
    console.log('to capture a north star into docs/ when appropriate.');
    console.log('For a one-off review of material you provide in chat, proceed without init.');
    if (target) console.log(`\nTarget hint: ${target}`);
    process.exit(0);
  }

  if (docs) {
    console.log('<!-- PRODUCTFEELING_DOCS_CONTEXT -->');
    console.log('');
    console.log('Project docs are the feeling/product source of truth.');
    console.log('Load selectively — do not ingest every file by default.');
    console.log('');
    console.log('Priority for ProductFeeling product work:');
    console.log('  1. docs/strategy/  (positioning, users, competitive, roadmap)');
    console.log('  2. docs/experience/  (journeys, opportunities, behavior)');
    console.log('  3. docs/PRODUCT.md, docs/DESIGN.md');
    console.log('  4. docs/REQUIREMENTS.md when evaluating contract fit');
    console.log('');
    console.log('Available:');
    for (const filePath of docs.files) {
      console.log(`  - ${rel(cwd, filePath)}`);
    }
    console.log('');
    console.log('Reviews persist under .productfeeling/reviews/ — do not bloat docs/ with routine reviews.');
    console.log('Write to docs/ only for durable first-visit essentials (ADRs, meaningful experience/strategy updates) when requested.');
    console.log('');
  }

  if (feeling) {
    const label = docs ? 'LEGACY_FEELING_MD' : 'PRODUCTFEELING_CONTEXT';
    console.log(`<!-- ${label}: ${rel(cwd, feelingPath)} -->`);
    console.log('');
    if (docs) {
      console.log('Legacy FEELING.md found. Prefer docs/ when they conflict; fold lasting truth into docs via handoff.');
      console.log('');
    }
    console.log(feeling);
    console.log('');
  }

  if (pfDir) printPriorReviews(cwd);

  if (target) {
    console.log(`<!-- PRODUCTFEELING_TARGET: ${target} -->`);
    console.log('');
  }

  const contextDir = docs ? docs.docsDir : feelingDir;
  console.log(`<!-- PRODUCTFEELING_CONTEXT_DIR: ${contextDir} -->`);
}

main();
