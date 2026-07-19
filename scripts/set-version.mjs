#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nextVersion = process.argv[2];
const semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

if (!nextVersion || !semverPattern.test(nextVersion)) {
  throw new Error('Usage: npm run version:set -- <x.y.z SemVer>');
}

function updateJson(relativePath, update) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) return;
  const value = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  update(value);
  fs.writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`);
}

updateJson('package.json', (value) => { value.version = nextVersion; });
updateJson('package-lock.json', (value) => {
  value.version = nextVersion;
  if (value.packages?.['']) value.packages[''].version = nextVersion;
});
updateJson('.claude-plugin/plugin.json', (value) => { value.version = nextVersion; });
updateJson('.claude-plugin/marketplace.json', (value) => { value.plugins[0].version = nextVersion; });

const skillPath = path.join(ROOT, 'skill/SKILL.md');
const skill = fs.readFileSync(skillPath, 'utf8');
fs.writeFileSync(skillPath, skill.replace(/^version:\s*[^\s]+$/m, `version: ${nextVersion}`));

const readmePath = path.join(ROOT, 'README.md');
const readme = fs.readFileSync(readmePath, 'utf8');
fs.writeFileSync(
  readmePath,
  readme.replace(/Current project version: v[\w.-]+/, `Current project version: v${nextVersion}`),
);

execFileSync(process.execPath, [path.join(ROOT, 'scripts/build.mjs'), 'providers'], {
  cwd: ROOT,
  stdio: 'inherit',
});
execFileSync(process.execPath, [path.join(ROOT, 'scripts/check-version.mjs')], {
  cwd: ROOT,
  stdio: 'inherit',
});

console.log(`ProductFeeling version set to v${nextVersion}. Update CHANGELOG.md before release.`);
