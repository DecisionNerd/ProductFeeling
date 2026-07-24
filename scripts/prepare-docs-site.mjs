#!/usr/bin/env node
/**
 * Stage canonical repository docs as Starlight content.
 *
 * - docs/ (developer docs) → src/content/docs/developers/
 * - handbook/handbook.md   → src/content/docs/handbook/ (split into strategies + TTPs)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const HANDBOOK_DIR = path.join(ROOT, 'handbook');
const OUT_DEVELOPERS = path.join(ROOT, 'src', 'content', 'docs', 'developers');
const OUT_HANDBOOK = path.join(ROOT, 'src', 'content', 'docs', 'handbook');
/** Staging must live *outside* `src/content/docs/` — Astro's docsLoader treats sibling dirs as content. */
const STAGING_ROOT = path.join(ROOT, '.docs-staging');
const BASE_PATH = '/ProductFeeling/';

function atomicReplaceDir(finalPath, stagingPath) {
  const previous = path.join(STAGING_ROOT, `${path.basename(finalPath)}.previous-${process.pid}`);
  fs.rmSync(previous, { recursive: true, force: true });
  if (fs.existsSync(finalPath)) {
    fs.renameSync(finalPath, previous);
  }
  fs.renameSync(stagingPath, finalPath);
  fs.rmSync(previous, { recursive: true, force: true });
}

// ---------------------------------------------------------------------------
// Developer docs (docs/ tree → developers/)
// ---------------------------------------------------------------------------

function frontmatter({ title, description, order }) {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
  ];
  if (order !== undefined) {
    lines.push('sidebar:', `  order: ${order}`);
  }
  lines.push('---', '', '');
  return lines.join('\n');
}

/** Site URL for a docs/-relative path like `strategy/positioning.md` or `README.md`. */
function developerUrl(relPath) {
  const parts = relPath.split('/');
  const file = parts.pop();
  const dir = parts.join('/');
  let slug = file.replace(/\.md$/, '');
  if (slug === 'README') slug = 'index';
  else slug = slug.toLowerCase();
  const prefix = dir ? `${BASE_PATH}developers/${dir}/` : `${BASE_PATH}developers/`;
  return slug === 'index' ? prefix : `${prefix}${slug}/`;
}

function rewriteDeveloperLinks(body, sourceRelDir) {
  return body.replace(/\]\(([^)#]+\.md)(#[^)]*)?\)/g, (match, rel, anchor = '') => {
    if (/^[a-z]+:\/\//.test(rel)) return match;
    const resolved = path.posix.normalize(path.posix.join(sourceRelDir || '.', rel));
    if (resolved.startsWith('..')) return match;
    return `](${developerUrl(resolved)}${anchor})`;
  });
}

function walkMarkdown(dir, baseRel = '') {
  const entries = [];
  if (!fs.existsSync(dir)) return entries;
  for (const name of fs.readdirSync(dir).sort()) {
    const abs = path.join(dir, name);
    const rel = baseRel ? `${baseRel}/${name}` : name;
    if (fs.statSync(abs).isDirectory()) {
      entries.push(...walkMarkdown(abs, rel));
    } else if (name.endsWith('.md')) {
      entries.push(rel.replace(/\\/g, '/'));
    }
  }
  return entries;
}

function developerOutRel(sourceRel) {
  const parts = sourceRel.split('/');
  const file = parts.pop();
  const dir = parts.join('/');
  let slug = file.replace(/\.md$/, '');
  if (slug === 'README') slug = 'index';
  else slug = slug.toLowerCase();
  return dir ? `${dir}/${slug}.md` : `${slug}.md`;
}

const DEVELOPER_ROOT_ORDER = {
  'README.md': 0,
  'PRODUCT.md': 1,
  'DESIGN.md': 2,
  'REQUIREMENTS.md': 3,
};

function prepareDevelopers() {
  // Stage then swap — same race as handbook if we rmSync while Astro is watching.
  fs.mkdirSync(STAGING_ROOT, { recursive: true });
  const stagingRoot = path.join(STAGING_ROOT, `developers-${process.pid}`);
  fs.rmSync(stagingRoot, { recursive: true, force: true });
  fs.mkdirSync(stagingRoot, { recursive: true });

  const files = walkMarkdown(DOCS);
  const dirOrders = new Map();

  for (const sourceRel of files) {
    const raw = fs.readFileSync(path.join(DOCS, sourceRel), 'utf8');
    const h1 = raw.match(/^#\s+(.+)$/m);
    const body = raw.replace(/^#\s+.+\n+/, '');
    const dir = path.posix.dirname(sourceRel) === '.' ? '' : path.posix.dirname(sourceRel);
    const base = path.posix.basename(sourceRel);
    const isIndex = base === 'README.md' || base === 'index.md';

    let order;
    if (!dir && DEVELOPER_ROOT_ORDER[base] !== undefined) {
      order = DEVELOPER_ROOT_ORDER[base];
    } else if (isIndex) {
      order = 0;
    } else {
      const key = dir || '.';
      const next = (dirOrders.get(key) || 0) + 1;
      dirOrders.set(key, next);
      order = next;
    }

    const outRel = developerOutRel(sourceRel);
    const meta = {
      title: h1 ? h1[1].trim() : path.posix.basename(outRel, '.md'),
      description: firstParagraph(body).replace(/\*\*?|__/g, '').replace(/\s+/g, ' ').trim().slice(0, 160),
      order,
    };
    const rewritten = rewriteDeveloperLinks(body, dir).trim();
    const outPath = path.join(stagingRoot, outRel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, frontmatter(meta) + rewritten + '\n');
    console.log(`✓ developers/${outRel}`);
  }

  atomicReplaceDir(OUT_DEVELOPERS, stagingRoot);
}

// ---------------------------------------------------------------------------
// Handbook
// ---------------------------------------------------------------------------
//
// Source of truth is the handbook/ folder tree:
//
//   handbook/index.md              → handbook/index.md
//   handbook/why-it-works.md       → handbook/why-it-works.md
//   handbook/concepts/*.md         → handbook/concepts/*.md
//   handbook/strategies/NN-*.md    → handbook/strategies/*.md (NN- prefix stripped)
//   handbook/ttps/*.md             → handbook/ttps/*.md
//   handbook/continue-learning.md  → handbook/continue-learning.md
//
// Each source file is standalone markdown with a single h1 title. Relative
// `.md` links between handbook files are rewritten to site URLs.

/** Strip an optional NN- ordering prefix from a filename slug. */
function pageSlug(filename) {
  return filename.replace(/\.md$/, '').replace(/^\d+-/, '');
}

/** Site URL for a handbook-root-relative source path like `strategies/01-onboarding.md`. */
function handbookUrl(relPath) {
  const parts = relPath.split('/');
  const file = parts.pop();
  const dir = parts.join('/');
  const slug = pageSlug(file);
  const prefix = dir ? `${BASE_PATH}handbook/${dir}/` : `${BASE_PATH}handbook/`;
  return slug === 'index' ? prefix : `${prefix}${slug}/`;
}

/** First non-empty, non-heading line — used as the page description. */
function firstParagraph(body) {
  for (const line of body.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) return trimmed;
  }
  return '';
}

/** Rewrite relative `.md` links (with optional #anchor) to site URLs. */
function rewriteHandbookLinks(body, sourceRelDir) {
  return body.replace(/\]\(([^)#]+\.md)(#[^)]*)?\)/g, (match, rel, anchor = '') => {
    if (/^[a-z]+:\/\//.test(rel)) return match;
    const resolved = path.posix.normalize(path.posix.join(sourceRelDir, rel));
    if (resolved.startsWith('..')) return match;
    return `](${handbookUrl(resolved)}${anchor})`;
  });
}

function handbookPage(sourceRel, { order, title, description } = {}, outRoot = OUT_HANDBOOK) {
  const raw = fs.readFileSync(path.join(HANDBOOK_DIR, sourceRel), 'utf8');
  const h1 = raw.match(/^#\s+(.+)$/m);
  const body = raw.replace(/^#\s+.+\n+/, '');
  const dir = path.posix.dirname(sourceRel) === '.' ? '' : path.posix.dirname(sourceRel);
  const outRel = dir
    ? `${dir}/${pageSlug(path.posix.basename(sourceRel))}.md`
    : `${pageSlug(path.posix.basename(sourceRel))}.md`;
  const meta = {
    title: title ?? (h1 ? h1[1].trim() : pageSlug(sourceRel)),
    // Plain one-liner for Starlight; strip markdown emphasis from the first paragraph.
    description: (
      description ?? firstParagraph(body)
    )
      .replace(/\*\*?|__/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 160),
    order,
  };
  const rewritten = rewriteHandbookLinks(body, dir).trim();
  const outPath = path.join(outRoot, outRel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, frontmatter(meta) + rewritten + '\n');
  console.log(`✓ handbook/${outRel}`);
}

/** Markdown files in a handbook subdirectory, index first, then sorted by filename. */
function sectionFiles(subdir) {
  return fs
    .readdirSync(path.join(HANDBOOK_DIR, subdir))
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => `${subdir}/${f}`);
}

function prepareHandbook() {
  if (!fs.existsSync(path.join(HANDBOOK_DIR, 'index.md'))) {
    console.log('⚠ handbook/index.md not found — skipping handbook staging');
    return;
  }

  // Stage outside content/, then swap atomically. Staging *inside* content/docs made
  // Astro load `handbook.staging-*` as pages; wiping OUT_HANDBOOK mid-dev also raced
  // the sidebar (slug "handbook/continue-learning" does not exist).
  fs.mkdirSync(STAGING_ROOT, { recursive: true });
  const stagingRoot = path.join(STAGING_ROOT, `handbook-${process.pid}`);
  fs.rmSync(stagingRoot, { recursive: true, force: true });
  fs.mkdirSync(stagingRoot, { recursive: true });

  handbookPage(
    'index.md',
    {
      order: 0,
      title: 'The Product Feelings Handbook',
      description: 'A modular guide to designing how your product feels — concepts, product strategies, and TTPs.',
    },
    stagingRoot,
  );
  handbookPage('why-it-works.md', { order: 1 }, stagingRoot);

  for (const subdir of ['concepts', 'discovery', 'strategies', 'ttps']) {
    let order = 0;
    for (const rel of sectionFiles(subdir)) {
      const isIndex = path.posix.basename(rel) === 'index.md';
      handbookPage(rel, { order: isIndex ? 0 : ++order }, stagingRoot);
    }
  }

  handbookPage('continue-learning.md', { order: 100 }, stagingRoot);

  atomicReplaceDir(OUT_HANDBOOK, stagingRoot);
}

prepareDevelopers();
prepareHandbook();
console.log('Docs site content prepared.');
