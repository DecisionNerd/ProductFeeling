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
  or with project `docs/` (DocSlime) and optional `.productfeeling/` persistence.
version: 0.1.0
argument-hint: "[command] [target]"
user-invocable: true
allowed-tools:
  - Bash(node scripts/*)
license: AGPL-3.0-or-later
---

Emotion-aware product design: decide what a product should *feel* like, then stress-test surfaces, flows, and copy against that north star.

**ProductFeeling** is the skill. It sits upstream of **[Impeccable](https://github.com/pbakaus/impeccable)** (visual/interaction craft) and beside **[DocSlime](https://www.docslime.dev/)** (product docs). Feeling brief → craft → ship.

Catalog: [reference/catalog.md](reference/catalog.md)

## Setup

You MUST do these steps before proceeding:

1. Run `node scripts/context.mjs` once per session (or `node <skill-base-dir>/scripts/context.mjs` if the runtime shows the skill path). Keep cwd at the user's project. If the request names a specific surface, flow, or file, append `--target <path>` to the command. If you've already seen its output in this conversation, do not re-run it. The script prefers a project **`docs/`** tree (PRODUCT, DESIGN, REQUIREMENTS, `strategy/`, `experience/`) as the feeling/product source of truth. Legacy `FEELING.md` is optional. **If it reports `NO_PROJECT_DOCS`:** divert into `reference/init.md` only when the user invoked `init`, or when they are starting a new feeling definition with no prior context. For scoped commands against material the user already provided in chat (a screen, flow, copy deck, PRD), **do not block on init** — the user's input is the context. Offer `/productfeeling init` once as an optional follow-up to persist context into docs. Missing docs or FEELING.md must never block a scoped review.
2. When `docs/` exists, **load selectively**. For ProductFeeling’s own product work (this repo and similar DocSlime trees), prioritize `docs/strategy/` then `docs/experience/`, then PRODUCT/DESIGN — read only the files needed for the current ask. Do not ingest the whole docs tree or the whole handbook by default.
3. If the user invoked a sub-command (`audit`, `map`, `brief`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow.
4. For any review targeting a UI, flow, or codebase artifact, read the actual source material before analyzing. Do not critique from memory or summary alone.
5. Read `reference/principles.md` when performing any evaluative or craft-facing command. It encodes the emotion principles. Skipping it produces vibes-without-structure.

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
| `init` | Setup | Capture feeling context into project docs (DocSlime) | [reference/init.md](reference/init.md) |
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
| `next [target]` | Meta | Do the next best-practice improvement and keep going, no re-asking | [reference/next.md](reference/next.md) |
| `random [target]` | Meta | Roll a random technique to break tunnel vision | [reference/random.md](reference/random.md) |
| `library` | Meta | Full "everything I could do here" index (commands + handbook + companions) | [reference/library.md](reference/library.md) |

Reference-only: [principles.md](reference/principles.md) · [catalog.md](reference/catalog.md)

Plus management commands: `pin <command>` and `unpin <command>`.

### Routing rules

1. **No argument**: an opinionated, non-executing nudge — *not* the full index (that's `library`) and *not* auto-execution (that's `next`).
   - If `NO_PROJECT_DOCS` and no usable in-chat context: lead with `/productfeeling init` as the single best next move, with one line on why.
   - Otherwise: name **the single best next move** for what the user is working on — use the same judgment `next` uses to pick it, but **stop and describe it**, then wait for a go-ahead instead of running it. Give a one-line why.
   - Then offer a short, inviting slate of alternatives: *check your work with `audit`* (mechanical completeness) or *`critique`* (push for greatness), or *try `random` if you're feeling lucky*.
   - Close with a pointer to `library` for the full "everything I could do" index. Never auto-run a command.
2. **First word matches a command** (table above or `pin` / `unpin`): load its reference and follow it. Everything after the command name is the target.
3. **First word doesn't match, but intent maps clearly** (e.g. "how does this feel" → `feel`, "emotion audit" → `audit`, "make it great / be critical" → `critique`, "surprise me" → `random`, "what can you do / list everything" → `library`, "just keep improving it" → `next`, "journey map" → `map`, "write a brief for Impeccable" → `brief`, "ship checklist" → `review`): load that command's reference and proceed.
4. **No clear match**: general ProductFeeling invocation. Apply setup, principles, and the user's full argument as context. Default to `feel` flow unless a specific technique fits better — ask once if two techniques are equally plausible.

**`next` is the one command that keeps acting without re-asking** — it carries standing consent to do the next best-practice piece and continue (within the guardrails in its reference). All other commands still stop at findings unless the user asked for changes.

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

Always tell the user what was written and where. In chat-only mode (no `.productfeeling/` and no `docs/`), deliver the full analysis in the response; offer to persist with `/productfeeling init` (into docs when appropriate) if useful.

**Docs writes:** Prefer durable updates in `docs/strategy/`, `docs/experience/`, PRODUCT/DESIGN, or ADRs when the user asked for lasting product/strategy changes. Do not duplicate product truth into `.productfeeling/`. Do not dump routine reviews into `docs/`.

## Companions

| Skill | What it is | Handoff cue |
|-------|-----------|-------------|
| **[Impeccable](https://github.com/pbakaus/impeccable)** ([impeccable.style](https://impeccable.style)) | Design guidance for AI coding agents — frontend craft, live browser iteration, deterministic detector rules | After `brief` or `handoff` |
| **[DocSlime](https://www.docslime.dev/)** ([`DecisionNerd/DocSlime`](https://github.com/DecisionNerd/DocSlime)) | CLI + skill pack to create, fill, review, and publish an opinionated `docs/` tree | After `handoff` when narrative must live in docs |
| **[RedTeam](https://curatelabs.github.io/RedTeam/)** ([`CurateLabs/RedTeam`](https://github.com/CurateLabs/RedTeam)) | Applied critical thinking — premortems, assumptions checks, devil's advocacy, decision reviews (not security testing) | When a feeling decision or north star needs adversarial stress-testing before commitment |

Do not re-implement Impeccable polish, DocSlime document fill, or RedTeam critical-thinking facilitation inside this skill. Produce feeling decisions; hand off execution.

## What this is NOT

- Not a general frontend design skill (use Impeccable).
- Not clinical psychology, persuasion engineering, or dark-pattern invention.
- Not a license to prioritize "delight metrics" over clarity, accessibility, or user agency.
