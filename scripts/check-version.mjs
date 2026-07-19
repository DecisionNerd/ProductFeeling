#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
const readJson = (relativePath) => JSON.parse(read(relativePath));
const semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

const packageJson = readJson('package.json');
const version = packageJson.version;

if (!semverPattern.test(version)) {
  throw new Error(`package.json version is not valid SemVer: ${version}`);
}

const packageLockPath = path.join(ROOT, 'package-lock.json');
const jsonVersions = new Map([
  ['.claude-plugin/plugin.json', readJson('.claude-plugin/plugin.json').version],
  ['.claude-plugin/marketplace.json', readJson('.claude-plugin/marketplace.json').plugins?.[0]?.version],
]);

if (fs.existsSync(packageLockPath)) {
  const packageLock = readJson('package-lock.json');
  jsonVersions.set('package-lock.json', packageLock.version);
  jsonVersions.set('package-lock.json packages[""]', packageLock.packages?.['']?.version);
}

for (const [source, actual] of jsonVersions) {
  if (actual !== version) throw new Error(`${source} reports ${actual}; expected ${version}`);
}

const skillFiles = [
  'skill/SKILL.md',
  '.cursor/skills/productfeeling/SKILL.md',
  '.claude/skills/productfeeling/SKILL.md',
  '.agents/skills/productfeeling/SKILL.md',
  '.github/skills/productfeeling/SKILL.md',
  '.gemini/skills/productfeeling/SKILL.md',
  'plugin/skills/productfeeling/SKILL.md',
];

for (const relativePath of skillFiles) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${relativePath} missing — run npm run build first`);
  }
  const match = read(relativePath).match(/^version:\s*([^\s]+)$/m);
  if (!match) throw new Error(`${relativePath} has no version field`);
  if (match[1] !== version) throw new Error(`${relativePath} reports ${match[1]}; expected ${version}`);
}

if (!read('README.md').includes(`Current project version: v${version}`)) {
  throw new Error(`README.md does not identify the current project version as v${version}`);
}

console.log(`Version check passed: v${version} across package, plugin manifests, and skill bundles.`);
