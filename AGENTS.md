# Agent instructions

This repository is **ProductFeeling** — emotion-aware product design skills for AI agents.

## Architecture

- `skill/` — source skill (SKILL.md + reference/ + scripts/)
- `scripts/build.mjs` — copies skill to provider directories
- `.productfeeling/` — skill-local persistence (reviews, sessions, briefs) — not a second product SoT
- `plugin/` — Claude Code plugin bundle
- `chatgpt/` — Custom GPT instructions
- `cli/` — GitHub-backed `npx` installer
- `src/content/docs/` — Starlight user guide
- `docs/` — durable product/strategy/experience/engineering docs (DocSlime); staged into the site by `docs:prepare`
- `handbook/` — canonical handbook markdown (selective load; not full-book by default)

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
| `skill/scripts/context.mjs` | Discovers `docs/` + optional legacy FEELING.md |
| `docs/strategy/` | Primary strategic workspace for this product |
| `.productfeeling/config.json` | Project config |

## Conventions

- Feeling/product context lives in `docs/` (especially `strategy/` and `experience/`); legacy `FEELING.md` is optional
- Reviews persist to `.productfeeling/reviews/<slug>-<command>.md`
- Commands are invoked as `/productfeeling <command> [target]`
- Complements **Impeccable** (craft/execution) and **DocSlime** (docs) — does not replace them

## Do not

- Turn this into a general UI polish skill (that is Impeccable)
- Prescribe manipulative dark patterns or emotional coercion
- Block scoped reviews when docs or FEELING.md are missing
- Duplicate product/strategy truth into `.productfeeling/` when `docs/` exists
