# 😊 ProductFeeling

Emotion-aware product design for AI agents. **23 commands** · companions to [Impeccable](https://github.com/pbakaus/impeccable) and [DocSlime](https://github.com/DecisionNerd/DocSlime).

**Current project version: v0.1.0.**

> **Quick start:** `npx skills add DecisionNerd/ProductFeeling` → reload your harness → `/productfeeling feel <your surface>`. Playbook: `/productfeeling sequence onboarding`.

## What is this?

ProductFeeling helps agents and product teams decide how a product should *feel* — then stress-test surfaces, flows, and copy against that north star.

- Name a primary feeling and anti-goals
- Audit journeys, tone, trust, friction, peaks/ends, and UI states
- Write emotion briefs Impeccable can execute
- Hand off durable narrative to DocSlime / project `docs/`

**Primary feeling (this product):** grounded clarity — name how your product feels and why, on real evidence; confidence to act is the residue. Participants should never feel **blocked** or **overwhelmed**.

Works **chat-only** (paste a flow) or **project-anchored** (`docs/` for lasting context; `.productfeeling/` for reviews and briefs).

## Commands

All commands run through `/productfeeling`:

| Command | What it does |
|---------|--------------|
| `/productfeeling init` | Capture feeling context into project docs (or legacy FEELING.md) |
| `/productfeeling feel` | General how-does-this-feel review |
| `/productfeeling audit` | Structured emotion audit |
| `/productfeeling critique` | Scored emotional design critique |
| `/productfeeling review` | Pre-ship emotional readiness gate |
| `/productfeeling map` | Emotional journey / valence map |
| `/productfeeling jobs` | Emotional jobs-to-be-done |
| `/productfeeling tone` | Voice and microcopy feel |
| `/productfeeling peaks-ends` | Peak-end moment design |
| `/productfeeling friction` | Feeling-relevant friction inventory |
| `/productfeeling delight` | Where delight belongs |
| `/productfeeling trust` | Trust signals and anxiety reducers |
| `/productfeeling states` | Empty / loading / error / success |
| `/productfeeling persona` | Emotional lens per segment |
| `/productfeeling intensity` | Calibrate emotional volume |
| `/productfeeling anti-patterns` | Emotional dark patterns |
| `/productfeeling metaphors` | Craft metaphors for Impeccable |
| `/productfeeling brief` | Write an emotion brief |
| `/productfeeling handoff` | Route to Impeccable / DocSlime |
| `/productfeeling sequence` | Tool-chain playbooks |
| `/productfeeling next` | Do the next best-practice piece and keep going |
| `/productfeeling random` | Roll a random technique |
| `/productfeeling library` | List everything you could do here |

### Examples

```
/productfeeling feel our onboarding
/productfeeling audit the checkout flow
/productfeeling map signup → first value
/productfeeling brief dashboard empty state
/productfeeling review before we ship billing
/productfeeling sequence checkout
```

Pin shortcuts: `/productfeeling pin audit` creates `/audit`.

## Installation

### Option 1: skills CLI (recommended)

```bash
npx skills add DecisionNerd/ProductFeeling
```

Uses the [open agent skills CLI](https://github.com/vercel-labs/skills) — detects Cursor, Claude Code, Codex, and more. Update later with `npx skills update`. Add `-g` for user-level or `-y` for non-interactive.

### Option 2: Project CLI

```bash
npx --yes github:DecisionNerd/ProductFeeling install
```

Detects harness folders and installs the skill. Use `--providers=cursor,claude,agents` and `--scope=project|global`. Also scaffolds `.productfeeling/` for reviews.

### Option 3: Claude Code plugin

```
/plugin marketplace add DecisionNerd/ProductFeeling
```

### Option 4: ChatGPT Custom GPT

Paste [`chatgpt/INSTRUCTIONS.md`](chatgpt/INSTRUCTIONS.md) into Instructions; optionally upload `skill/reference/catalog.md` as knowledge. See [chatgpt/README.md](chatgpt/README.md).

### Option 5: Copy from repo

```bash
npm run build
cp -r .cursor/skills/productfeeling your-project/.cursor/skills/   # or .claude / .agents
```

## Project context

| Location | Role |
|----------|------|
| **`docs/`** (DocSlime) | Preferred feeling/product source of truth — especially `strategy/` and `experience/` |
| **`.productfeeling/`** | Reviews, briefs, sessions — not a second product narrative |
| **Legacy `FEELING.md`** | Optional; never required for a scoped chat review |

## Companions

| Skill | Role |
|-------|------|
| **Impeccable** | Frontend craft and visual/interaction execution |
| **DocSlime** | Documentation scaffolding and fill |

ProductFeeling decides *how it should feel*. Impeccable makes it *look and behave*. DocSlime keeps the *why* in docs.

## Docs & handbook

- **User guide + handbook:** [decisionnerd.github.io/ProductFeeling](https://decisionnerd.github.io/ProductFeeling/)
- **Contributor docs:** [`docs/`](docs/) (product, strategy, experience, requirements, engineering)

```bash
npm install
npm run docs:dev
```

## License

AGPL-3.0-or-later. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
