# Agent instructions

This repository is **ProductFeeling** — emotion-aware product design skills for AI agents.

## Architecture

- `skill/` — source skill (SKILL.md + reference/ + scripts/)
- `scripts/build.mjs` — copies skill to provider directories
- `.productfeeling/` — project emotion context and review artifacts (analogous to `.impeccable/` and `.redteam/`)
- `plugin/` — Claude Code plugin bundle
- `chatgpt/` — Custom GPT instructions
- `cli/` — GitHub-backed `npx` installer
- `src/content/docs/` — Starlight user guide
- `docs/` — developer docs (staged into the site by `docs:prepare`)

## Build

```bash
npm run build        # copy to .cursor, .claude, .agents, plugin, dist
npm run build:dist   # dist/ only
```

## Key files

| File | Purpose |
|------|---------|
| `skill/SKILL.md` | Main skill router (`/productfeeling`) |
| `skill/reference/*.md` | Per-command flows |
| `skill/reference/catalog.md` | Technique catalog |
| `skill/scripts/context.mjs` | Loads FEELING.md |
| `.productfeeling/config.json` | Project config |

## Conventions

- Emotion context lives in `FEELING.md` (root or `.productfeeling/`)
- Reviews persist to `.productfeeling/reviews/<slug>-<command>.md`
- Commands are invoked as `/productfeeling <command> [target]`
- Complements **Impeccable** (craft/execution) and **DocSlime** (docs) — does not replace them

## Do not

- Turn this into a general UI polish skill (that is Impeccable)
- Prescribe manipulative dark patterns or emotional coercion
- Block scoped reviews when FEELING.md is missing
