#!/usr/bin/env node
/**
 * Build: copy skill/ source into provider-specific directories.
 * Skills-only — a plain copy; the source skill is directly installable
 * (e.g. via `npx skills add DecisionNerd/ProductFeeling`).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SKILL_SRC = path.join(ROOT, 'skill');

const PROVIDERS = {
  cursor: '.cursor/skills/productfeeling',
  claude: '.claude/skills/productfeeling',
  agents: '.agents/skills/productfeeling',
  github: '.github/skills/productfeeling',
  gemini: '.gemini/skills/productfeeling',
  plugin: 'plugin/skills/productfeeling',
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function buildProvider(name, relDest) {
  const dest = path.join(ROOT, relDest);
  rmDir(dest);
  copyDir(SKILL_SRC, dest);
  console.log(`✓ ${name} → ${relDest}`);
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  // macOS can intermittently throw ENOTEMPTY on a single recursive rm
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 50 });
      return;
    } catch (error) {
      if (attempt === 2 || error?.code !== 'ENOTEMPTY') throw error;
    }
  }
}

function buildDist() {
  const distRoot = path.join(ROOT, 'dist');
  rmDir(distRoot);

  for (const [name, relDest] of Object.entries(PROVIDERS)) {
    const dest = path.join(distRoot, name, relDest);
    copyDir(SKILL_SRC, dest);
    console.log(`✓ dist/${name}`);
  }

  const chatgptKnowledge = path.join(distRoot, 'chatgpt', 'knowledge');
  fs.mkdirSync(chatgptKnowledge, { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'chatgpt', 'INSTRUCTIONS.md'),
    path.join(distRoot, 'chatgpt', 'INSTRUCTIONS.md'),
  );
  fs.copyFileSync(
    path.join(SKILL_SRC, 'reference', 'catalog.md'),
    path.join(chatgptKnowledge, 'catalog.md'),
  );
  fs.copyFileSync(
    path.join(SKILL_SRC, 'reference', 'principles.md'),
    path.join(chatgptKnowledge, 'principles.md'),
  );
  console.log('✓ dist/chatgpt');
}

function main() {
  const target = process.argv[2] || 'all';

  if (target === 'dist') {
    buildDist();
    return;
  }

  if (target === 'all' || target === 'providers') {
    for (const [name, relDest] of Object.entries(PROVIDERS)) {
      buildProvider(name, relDest);
    }
  }

  if (target === 'all' || target === 'dist') {
    buildDist();
  }

  console.log('\nDone.');
}

main();
