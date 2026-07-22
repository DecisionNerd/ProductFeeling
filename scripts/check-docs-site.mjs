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
  'handbook/index.html',
  'handbook/why-it-works/index.html',
  'handbook/concepts/index.html',
  'handbook/concepts/feeling-north-star/index.html',
  'handbook/discovery/index.html',
  'handbook/discovery/need-states/index.html',
  'handbook/strategies/index.html',
  'handbook/strategies/onboarding/index.html',
  'handbook/ttps/micro-interactions/index.html',
  'handbook/ttps/graceful-exit/index.html',
  'handbook/continue-learning/index.html',
  'developers/index.html',
  'developers/product/index.html',
  'developers/design/index.html',
  'developers/requirements/index.html',
  'developers/strategy/index.html',
  'developers/experience/index.html',
  'developers/engineering/architecture/index.html',
  'developers/engineering/testing/index.html',
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
