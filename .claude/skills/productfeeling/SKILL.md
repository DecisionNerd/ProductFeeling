---
name: productfeeling
description: >-
  Emotion-aware product design: audit how a product, flow, or surface feels;
  map emotional journeys; calibrate tone, trust, delight, and friction; write
  emotion briefs for Impeccable; hand off to DocSlime. Use when the user wants
  feeling-first product design, emotional UX review, tone/microcopy feel,
  peak-end moments, trust and anxiety reduction, empty/error/success state
  emotion, persona emotional lenses, or `/productfeeling` commands. Complements
  Impeccable (craft) and DocSlime (docs) — does not replace them. Works in chat
  or with a `.productfeeling/` directory.
version: 0.1.0
argument-hint: "[command] [target]"
user-invocable: true
allowed-tools:
  - Bash(node scripts/*)
license: AGPL-3.0-or-later
---

Emotion-aware product design: decide what a product should *feel* like, then stress-test surfaces, flows, and copy against that north star.

**ProductFeeling** is the skill. It sits upstream of **Impeccable** (visual/interaction craft) and beside **DocSlime** (product docs). Feeling brief → craft → ship.

Catalog: [reference/catalog.md](reference/catalog.md)

## Setup

You MUST do these steps before proceeding:

1. Run `node scripts/context.mjs` once per session (or `node <skill-base-dir>/scripts/context.mjs` if the runtime shows the skill path). Keep cwd at the user's project. If the request names a specific surface, flow, or file, append `--target <path>` to the command. If you've already seen its output in this conversation, do not re-run it. The script prints the project's feeling context (`FEELING.md` when present) or reports `NO_FEELING_MD`. **If it reports `NO_FEELING_MD`:** divert into `reference/init.md` only when the user invoked `init`, or when they are starting a new feeling definition with no prior context. For scoped commands against material the user already provided in chat (a screen, flow, copy deck, PRD), **do not block on init** — the user's input is the context. Offer `/productfeeling init` once as an optional follow-up to persist context. A missing FEELING.md must never block a scoped review.
2. If the user invoked a sub-command (`audit`, `map`, `brief`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow.
3. For any review targeting a UI, flow, or codebase artifact, read the actual source material before analyzing. Do not critique from memory or summary alone.
4. Read `reference/principles.md` when performing any evaluative or craft-facing command. It encodes the emotion principles. Skipping it produces vibes-without-structure.

## Core principles (always apply)

- **Feeling is a product requirement.** "It just feels off" is a signal to name, not wave away.
- **One primary feeling.** Secondary tones may support; three+ competing feelings usually means none.
- **State every moment.** Empty, loading, error, success, and recovery are part of the experience, not afterthoughts.
- **Earn delight; buy trust.** Delight is sparse and earned. Trust and anxiety reduction are table stakes.
- **Never manipulate.** Dark patterns, manufactured urgency, and emotional coercion are out of scope — call them out, do not invent them.
- **Hand off cleanly.** Emotion briefs feed Impeccable for craft and DocSlime for durable product narrative.

## Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `init` | Setup | Capture feeling context in FEELING.md | [reference/init.md](reference/init.md) |
| `feel [target]` | Evaluate | General "how does this feel?" review | [reference/feel.md](reference/feel.md) |
| `audit [target]` | Evaluate | Structured emotion audit of a surface or flow | [reference/audit.md](reference/audit.md) |
| `critique [target]` | Evaluate | Scored emotional design critique | [reference/critique.md](reference/critique.md) |
| `review [target]` | Evaluate | Pre-ship emotional readiness gate | [reference/review.md](reference/review.md) |
| `map [target]` | Technique | Emotional journey / valence map | [reference/map.md](reference/map.md) |
| `jobs [target]` | Technique | Emotional jobs-to-be-done | [reference/jobs.md](reference/jobs.md) |
| `tone [target]` | Technique | Voice and microcopy emotional tone | [reference/tone.md](reference/tone.md) |
| `peaks-ends [target]` | Technique | Peak-end rule for key moments | [reference/peaks-ends.md](reference/peaks-ends.md) |
| `friction [target]` | Technique | Emotional friction inventory | [reference/friction.md](reference/friction.md) |
| `delight [target]` | Technique | Where intentional delight belongs | [reference/delight.md](reference/delight.md) |
| `trust [target]` | Technique | Trust signals and anxiety reducers | [reference/trust.md](reference/trust.md) |
| `states [target]` | Technique | Empty / loading / error / success emotion | [reference/states.md](reference/states.md) |
| `persona [target]` | Technique | Emotional lens per persona or segment | [reference/persona.md](reference/persona.md) |
| `intensity [target]` | Technique | Calibrate emotional volume | [reference/intensity.md](reference/intensity.md) |
| `anti-patterns [target]` | Technique | Emotional anti-patterns and dark patterns | [reference/anti-patterns.md](reference/anti-patterns.md) |
| `metaphors [target]` | Technique | Brand emotion metaphors that drive craft | [reference/metaphors.md](reference/metaphors.md) |
| `brief [target]` | Craft | Write an emotion brief for Impeccable | [reference/brief.md](reference/brief.md) |
| `handoff [target]` | Craft | Hand off to Impeccable and/or DocSlime | [reference/handoff.md](reference/handoff.md) |
| `sequence [target]` | Craft | Tool-chain playbooks by surface type | [reference/sequence.md](reference/sequence.md) |
| `tools` | Reference | Browse the technique catalog | [reference/tools.md](reference/tools.md) |

Reference-only: [principles.md](reference/principles.md) · [catalog.md](reference/catalog.md)

Plus management commands: `pin <command>` and `unpin <command>`.

### Routing rules

1. **No argument**: context-aware menu. If `NO_FEELING_MD`, lead with `/productfeeling init` as the top recommendation with one line on why. Otherwise recommend 2–3 highest-value commands based on what the user is working on, then show the full table. Never auto-run a command.
2. **First word matches a command** (table above or `pin` / `unpin`): load its reference and follow it. Everything after the command name is the target.
3. **First word doesn't match, but intent maps clearly** (e.g. "how does this feel" → `feel`, "emotion audit" → `audit`, "journey map" → `map`, "write a brief for Impeccable" → `brief`, "ship checklist" → `review`): load that command's reference and proceed.
4. **No clear match**: general ProductFeeling invocation. Apply setup, principles, and the user's full argument as context. Default to `feel` flow unless a specific technique fits better — ask once if two techniques are equally plausible.

If the first word is `init`, or routing rule 3 maps to a from-scratch feeling capture, `reference/init.md` owns the rest of the flow after setup.

## Pin / Unpin

**Pin** creates a standalone shortcut so `$<command>` invokes `$productfeeling <command>` directly. **Unpin** removes it.

```bash
node scripts/pin.mjs <pin|unpin> <command>
```

Valid `<command>` is any command from the table above. Report the script's result concisely.

## Output conventions

When writing artifacts to `.productfeeling/`:

- Reviews → `.productfeeling/reviews/<slug>-<command>.md`
- Session notes → `.productfeeling/sessions/<date>-<slug>.md`
- Emotion briefs → `.productfeeling/briefs/<slug>-brief.md` (create `briefs/` if needed)
- Use ISO dates in filenames when dating sessions. Slug from the target topic (lowercase, hyphenated).

Always tell the user what was written and where. In chat-only mode (no `.productfeeling/`), deliver the full analysis in the response; offer to persist with `/productfeeling init` if useful.

## Companions

| Skill | Role | Handoff cue |
|-------|------|-------------|
| **Impeccable** | Visual/interaction craft and production UI | After `brief` or `handoff` |
| **DocSlime** | Product/docs scaffolding and fill | After `handoff` when narrative must live in docs |

Do not re-implement Impeccable polish or DocSlime document fill inside this skill. Produce feeling decisions; hand off execution.

## What this is NOT

- Not a general frontend design skill (use Impeccable).
- Not clinical psychology, persuasion engineering, or dark-pattern invention.
- Not a license to prioritize "delight metrics" over clarity, accessibility, or user agency.
