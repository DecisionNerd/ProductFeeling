# ProductFeeling

Emotion-aware product design skills for AI agents. **ProductFeeling** skill · **21 commands** · companions to [Impeccable](https://github.com/pbakaus/impeccable) and [DocSlime](https://github.com/DecisionNerd/DocSlime).

**Current project version: v0.1.0.**

> **Quick start:** Run `npx skills add DecisionNerd/ProductFeeling`, reload your harness, then `/productfeeling feel <your surface>` in chat. For a full playbook: `/productfeeling sequence onboarding`.

## What is this?

ProductFeeling teaches AI agents to:

- Name a product's emotional north star and anti-goals
- Audit flows, copy, and UI states for emotional fit
- Map journeys, peaks/ends, trust, friction, and delight policy
- Produce emotion briefs Impeccable can execute
- Hand off durable narrative to DocSlime

Works in **pure chat** (paste a flow, get a feel review) or with a **`.productfeeling/`** directory for persistent context and artifacts.

## Commands

All commands run through `/productfeeling`:

| Command | What it does |
|---------|--------------|
| `/productfeeling init` | Capture feeling context in FEELING.md |
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
| `/productfeeling tools` | Browse the technique catalog |

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

Uses the [open agent skills CLI](https://github.com/vercel-labs/skills) — detects your agents (Cursor, Claude Code, Codex, and more), installs the skill, and supports `npx skills update` later. Add `-g` for a user-level install or `-y` for non-interactive use.

### Option 2: Project CLI

```bash
npx --yes github:DecisionNerd/ProductFeeling install
```

Detects harness folders (`.cursor`, `.claude`, `.agents`) and installs the skill. Use `--providers=cursor,claude,agents` and `--scope=project|global` to customize. Also creates the `.productfeeling/` scaffold.

### Option 3: Claude Code plugin

```
/plugin marketplace add DecisionNerd/ProductFeeling
```

Then install from the plugin list.

### Option 4: ChatGPT Custom GPT

1. Create a Custom GPT
2. Paste `chatgpt/INSTRUCTIONS.md` into Instructions
3. Optionally upload `skill/reference/catalog.md` as knowledge

See [chatgpt/README.md](chatgpt/README.md).

### Option 5: Copy from repo

```bash
# Cursor
cp -r .cursor/skills/productfeeling your-project/.cursor/skills/

# Claude Code
cp -r .claude/skills/productfeeling your-project/.claude/skills/

# Codex / Agents
cp -r .agents/skills/productfeeling your-project/.agents/skills/
```

Run `npm run build` first if installing from source.

## Companions

| Skill | Role |
|-------|------|
| **Impeccable** | Frontend craft and visual/interaction execution |
| **DocSlime** | Documentation scaffolding and fill |

ProductFeeling decides *how it should feel*. Impeccable makes it *look and behave*. DocSlime keeps the *why* in docs.

## Docs site

```bash
npm install
npm run docs:dev
```

## License

AGPL-3.0-or-later. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
