#!/usr/bin/env node
/**
 * Stage canonical repository developer docs as Starlight content.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const OUT = path.join(ROOT, 'src', 'content', 'docs', 'developers');
const BASE_PATH = '/ProductFeeling/';

const manifest = [
  {
    source: 'README.md',
    output: 'index.md',
    title: 'Developer documentation',
    description: 'Contributor docs for ProductFeeling.',
    order: 0,
  },
  {
    source: 'PRODUCT.md',
    output: 'product.md',
    title: 'Product',
    description: 'What ProductFeeling is, who it serves, and why.',
    order: 1,
  },
  {
    source: 'DESIGN.md',
    output: 'design.md',
    title: 'Design',
    description: 'Packaging, interaction, and accessibility guidance.',
    order: 2,
  },
];

function rewriteLinks(body) {
  return body
    .replace(/\]\(([^)]+\.md)\)/g, (match, rel) => {
      const key = rel.replace(/^\.\//, '');
      const map = {
        'README.md': `${BASE_PATH}developers/`,
        'PRODUCT.md': `${BASE_PATH}developers/product/`,
        'DESIGN.md': `${BASE_PATH}developers/design/`,
      };
      return map[key] ? `](${map[key]})` : match;
    });
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const entry of manifest) {
  const sourcePath = path.join(DOCS, entry.source);
  const body = fs.readFileSync(sourcePath, 'utf8');
  const withoutTitle = body.replace(/^#\s+.+\n+/, '');
  const frontmatter = `---
title: "${entry.title}"
description: "${entry.description}"
sidebar:
  order: ${entry.order}
---

`;
  const outPath = path.join(OUT, entry.output);
  fs.writeFileSync(outPath, frontmatter + rewriteLinks(withoutTitle));
  console.log(`✓ developers/${entry.output}`);
}

console.log('Docs site content prepared.');
