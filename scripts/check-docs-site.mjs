#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(ROOT, 'site');

const required = [
  'index.html',
  'guide/index.html',
  'guide/quick-start/index.html',
  'guide/installation/index.html',
  'guide/commands/index.html',
  'developers/index.html',
  'developers/product/index.html',
];

if (!fs.existsSync(dist)) {
  throw new Error('site/ missing — run astro build first');
}

for (const rel of required) {
  const p = path.join(dist, rel);
  if (!fs.existsSync(p)) {
    throw new Error(`Docs site missing expected page: ${rel}`);
  }
}

console.log('Docs site check passed.');
