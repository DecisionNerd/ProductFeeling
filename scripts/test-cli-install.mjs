#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const project = fs.mkdtempSync(path.join(os.tmpdir(), 'productfeeling-cli-install-'));

try {
  const versionOutput = execFileSync(process.execPath, [path.join(ROOT, 'cli/bin/cli.js'), '--version'], {
    encoding: 'utf8',
  }).trim();
  if (versionOutput !== `productfeeling ${packageJson.version}`) {
    throw new Error(`CLI version mismatch: expected productfeeling ${packageJson.version}, got ${versionOutput}`);
  }

  execFileSync(
    process.execPath,
    [path.join(ROOT, 'cli/bin/cli.js'), 'install', '--providers=agents', '--scope=project'],
    { cwd: project, stdio: 'pipe' },
  );

  const expected = [
    '.agents/skills/productfeeling/SKILL.md',
    '.agents/skills/productfeeling/reference/catalog.md',
    '.agents/skills/productfeeling/scripts/context.mjs',
    '.productfeeling/config.json',
    '.productfeeling/FEELING.template.md',
  ];

  for (const relativePath of expected) {
    if (!fs.existsSync(path.join(project, relativePath))) {
      throw new Error(`Installer did not create ${relativePath}`);
    }
  }

  const installedSkill = fs.readFileSync(path.join(project, '.agents/skills/productfeeling/SKILL.md'), 'utf8');
  if (!installedSkill.includes(`version: ${packageJson.version}`)) {
    throw new Error(`Installed skill does not report version ${packageJson.version}`);
  }

  console.log('CLI installer smoke test passed.');
} finally {
  fs.rmSync(project, { recursive: true, force: true });
}
