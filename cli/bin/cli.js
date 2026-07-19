#!/usr/bin/env node
/**
 * ProductFeeling installer — copies skill into detected harness directories.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(__dirname, '../..');
const GITHUB_PACKAGE = 'github:DecisionNerd/ProductFeeling';
const PACKAGE = JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, 'package.json'), 'utf8'));
const VERSION = PACKAGE.version;

function parseArgs(argv) {
  const opts = { providers: null, scope: 'project', help: false, version: false };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--version' || arg === '-v') opts.version = true;
    else if (arg.startsWith('--providers=')) opts.providers = arg.split('=')[1].split(',');
    else if (arg.startsWith('--scope=')) opts.scope = arg.split('=')[1];
    else if (arg === 'install') opts.command = 'install';
    else if (arg === 'update') opts.command = 'update';
  }
  return opts;
}

function detectProviders(cwd) {
  const detected = [];
  if (fs.existsSync(path.join(cwd, '.cursor'))) detected.push('cursor');
  if (fs.existsSync(path.join(cwd, '.claude'))) detected.push('claude');
  if (fs.existsSync(path.join(cwd, '.agents'))) detected.push('agents');
  if (fs.existsSync(path.join(cwd, '.github'))) detected.push('github');
  if (fs.existsSync(path.join(cwd, '.gemini'))) detected.push('gemini');
  if (detected.length === 0) detected.push('cursor', 'claude', 'agents');
  return detected;
}

function getDest(provider, scope) {
  const home = process.env.HOME || process.env.USERPROFILE || '';
  const map = {
    cursor: scope === 'global' ? path.join(home, '.cursor/skills/productfeeling') : '.cursor/skills/productfeeling',
    claude: scope === 'global' ? path.join(home, '.claude/skills/productfeeling') : '.claude/skills/productfeeling',
    agents: scope === 'global' ? path.join(home, '.agents/skills/productfeeling') : '.agents/skills/productfeeling',
    github: '.github/skills/productfeeling',
    gemini: scope === 'global' ? path.join(home, '.gemini/skills/productfeeling') : '.gemini/skills/productfeeling',
  };
  return map[provider];
}

function install(cwd, providers, scope) {
  execSync(`node "${path.join(PACKAGE_ROOT, 'scripts/build.mjs')}" providers`, {
    cwd: PACKAGE_ROOT,
    stdio: 'inherit',
  });

  for (const provider of providers) {
    const src = path.join(PACKAGE_ROOT, getDest(provider, 'project'));
    const dest = path.isAbsolute(getDest(provider, scope))
      ? getDest(provider, scope)
      : path.join(cwd, getDest(provider, scope));

    if (!fs.existsSync(src)) {
      console.warn(`⚠ Source not found for ${provider}: ${src}`);
      continue;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log(`✓ Installed productfeeling → ${dest}`);
  }

  const pfDir = path.join(cwd, '.productfeeling');
  if (!fs.existsSync(pfDir)) {
    const templateConfig = path.join(PACKAGE_ROOT, '.productfeeling/config.json');
    const templateFeeling = path.join(PACKAGE_ROOT, '.productfeeling/FEELING.template.md');
    fs.mkdirSync(path.join(pfDir, 'reviews'), { recursive: true });
    fs.mkdirSync(path.join(pfDir, 'sessions'), { recursive: true });
    fs.mkdirSync(path.join(pfDir, 'briefs'), { recursive: true });
    if (fs.existsSync(templateConfig)) fs.copyFileSync(templateConfig, path.join(pfDir, 'config.json'));
    if (fs.existsSync(templateFeeling)) fs.copyFileSync(templateFeeling, path.join(pfDir, 'FEELING.template.md'));
    console.log('✓ Created .productfeeling/ scaffold');
  }

  console.log('\nReload your AI harness, then run `/productfeeling init` or `/productfeeling feel <your surface>`.');
}

function printHelp() {
  console.log(`
productfeeling — Emotion-aware product design skills for AI agents
Version ${VERSION}

Usage:
  npx --yes ${GITHUB_PACKAGE} install [--providers=cursor,claude,agents] [--scope=project|global]
  npx --yes ${GITHUB_PACKAGE} update   (alias for install)

Options:
  --providers   Comma-separated: cursor, claude, agents, github, gemini
  --scope       project (default) or global
  --version     Print version

Skills CLI (recommended):
  npx skills add DecisionNerd/ProductFeeling

Claude Code plugin:
  /plugin marketplace add DecisionNerd/ProductFeeling

ChatGPT:
  See chatgpt/INSTRUCTIONS.md for Custom GPT setup
`);
}

const opts = parseArgs(process.argv);
if (opts.version) {
  console.log(`productfeeling ${VERSION}`);
  process.exit(0);
}
if (opts.help || !opts.command) {
  printHelp();
  process.exit(0);
}

const cwd = process.cwd();
const providers = opts.providers || detectProviders(cwd);
install(cwd, providers, opts.scope);
