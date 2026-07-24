# Section review prompt

Canonical instructions for upgrading one handbook section at a time.

**Preferred:** invoke the project skill `handbook-section-review` (`.cursor/skills/handbook-section-review/`) and name the section. The skill follows this file.

**Manual:** copy everything below the line into a new chat. Fill in the placeholders. Paste the full section file (e.g. `handbook/ttps/<slug>.md` or `handbook/strategies/NN-<slug>.md`). Review **one section at a time**.

---

## Prompt

You are reviewing and upgrading a single section of **The Product Feelings Handbook** (one file under `handbook/` in the ProductFeeling repo — each strategy, TTP, and concept is its own markdown file).

ProductFeeling is an emotion-aware product design skill for AI agents. It sits upstream of **Impeccable** (craft/execution) and beside **DocSlime** (docs). The handbook is the educational anchor: product strategies and TTPs (tools, techniques, and practices) that teach how products should *feel*.

### Section under review

- **Type:** `[Product Strategy | TTP | Concept | Welcome & Setup]`
- **Title:** `[e.g. Onboarding | Micro Interactions]`
- **Source path:** `[e.g. handbook/ttps/micro-interactions.md | handbook/strategies/01-onboarding.md | handbook/concepts/04-peak-end-rule.md]`

Paste the full current section file below:

```markdown
[PASTE SECTION HERE]
```

### Your job

For this section only:

1. **Research the method**
   - Identify the underlying product, UX, behavioural-science, or growth concepts (e.g. peak-end rule, JTBD, habit loops, progressive disclosure).
   - Note where the draft is strong, thin, outdated, or wrong.
   - Prefer established, citable ideas over blog-hype or unverified “growth hacks.”
   - Flag ethical risks (coercion, dark patterns, manufactured urgency, addiction loops). ProductFeeling must not prescribe manipulative patterns.

2. **Add high-quality additional resources**
   - Add a `## Further reading` (or `## Resources`) subsection with **3–6** links.
   - Prefer primary or durable sources: books, peer-reviewed or widely cited papers, official docs, canonical essays (e.g. Nielsen Norman, Interaction Design Foundation, well-known practitioner books), or high-signal company design blogs with lasting value.
   - Avoid thin listicles, SEO content farms, and paywalled-only stubs when a free durable source exists.
   - Format each item as: `[Title](URL) — one-line why it belongs here.`
   - If a claim in the section depends on a specific source, cite it inline lightly or in Further reading.

3. **Rewrite for quality**
   - Preserve the section’s role in the handbook (strategy vs TTP) and its cross-links to other TTPs/strategies/concepts/discovery pages via relative `.md` links where useful.
   - For TTPs: include a `## Related concepts` block (1–3 links into `handbook/concepts/`) before Further reading; prefer linking a concept over re-explaining Peak–End, Friction, Agency, Trust, JTBD, Habit, Surfaces, Investment/Continuity, or Social Transmission in Why it works.
   - For strategies: keep a **Prerequisite** line pointing at Customer Discovery and the most relevant concept pages; link every Core/Supporting TTP as `[Name](../ttps/slug.md)`.
   - Improve clarity, rhythm, and scannability. Prefer concrete verbs and product moments over vague inspiration.
   - Keep British spelling consistent with the handbook (e.g. *optimisation*, *personalisation*, *behaviour*) unless the section already uses a fixed term.
   - Tighten Do / Don’t so they are actionable and non-overlapping.
   - Keep Founder Tip short and sharp (one idea).
   - Make It Yours prompts should be specific enough to answer about *this* product, not generic brainstorm filler.
   - For strategies: keep Insights & Metrics accurate; fix formulas if wrong; keep Behind the Data questions diagnostic.
   - For TTPs: keep the structure below unless a clear improvement requires a small addition (e.g. Further reading).

4. **Agent skill (required — map to existing commands)**
   - Add or rewrite a final subsection `## Agent skill` using the skeleton below.
   - Map to **existing** `/productfeeling` commands only (`init`, `feel`, `audit`, `critique`, `review`, `map`, `jobs`, `tone`, `peaks-ends`, `friction`, `delight`, `trust`, `states`, `persona`, `intensity`, `anti-patterns`, `metaphors`, `brief`, `handoff`, `sequence`, `next`, `random`, `library`). Do **not** invent new commands.
   - For **strategies**, the Primary command / sequence chain is source of truth for `skill/reference/sequence.md` — after changing a strategy’s Agent skill chain, update that playbook in `sequence.md` to match.
   - **Reference path** must point at an existing file under `skill/reference/` (primary command; strategies usually `sequence.md`).
   - Companions: Impeccable (craft), DocSlime (durable docs), RedTeam (decision stress-test) — name which apply and when.

### Output format

Return:

1. **Findings** (short): research notes, gaps, ethical flags, what you changed and why.
2. **Rewritten section** — complete markdown ready to replace the section file's contents. Use the appropriate skeleton:

**If TTP** (Tools, Techniques, and Practices entry), use:

```markdown
# [Title]

[One-line tagline.]

## What it is

[1–2 substantive paragraphs — not a single dictionary-style sentence. Define the pattern precisely, distinguish it from a TTP it is commonly confused with, and ground it in a concrete product moment.]

## Why it works

[1–2 substantive paragraphs — the mechanism (cite the underlying concept rather than re-deriving it), a failure mode this prevents, and what happens when it is skipped or overdone.]

## When to use it

- ...

## Do

- ...

## Don't

- ...

## Founder Tip

...

## Make It Yours

...

## Related concepts

- [Concept Title](../concepts/NN-slug.md)

## Further reading

- [Title](URL) — ...

## Agent skill

- **Primary command:** `/productfeeling <command>` — short why
- **Related commands:** related `/productfeeling …` commands
- **When the agent should load this TTP:** 3–6 short trigger phrases in quotes
- **Companion handoff:** Impeccable / DocSlime / RedTeam / none — concrete cue
- **Feeling north star this TTP serves:** short phrase from the TTP's intent
- **Anti-goals:** what this must never encourage
- **Reference path:** `skill/reference/<command>.md`
```

**If Product Strategy**, use:

```markdown
# [Title]

[One-line definition.]

**Prerequisite:** [Customer Discovery](../discovery/index.md). Related concepts: …

## What it is

[2–4 substantive paragraphs — what this strategy actually means, the underlying product thinking, how it differs from adjacent strategies, what failure looks like. Not a bullet list. A reader who skipped every TTP link should still understand the strategy.]

## Why it works

[2–3 substantive paragraphs — the mechanism, evidence, or reasoning that makes this strategy effective; tie explicitly into 1–3 handbook concepts rather than re-explaining them.]

## Core Tools, Techniques, and Practices (TTPs)

- [TTP Name](../ttps/slug.md): [short blurb matching the TTP’s tagline]
- ...

## Supporting Tools, Techniques, and Practices (TTPs)

- ...

## Insights & Metrics

...

## Behind the Data

...

## Further reading

- Prefer handbook concept links where the strategy rests on shared science, then 2–4 external sources.
- [Title](URL) — ...

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` with a playbook chain of existing commands — or another primary command when more accurate
- **Core TTPs to load:** names from this strategy's Core TTPs section
- **Supporting TTPs:** names from Supporting TTPs
- **When the agent should use this strategy:** 3–6 short trigger phrases in quotes
- **Companion handoff:** Impeccable / DocSlime / RedTeam — concrete cues
- **Feeling north star this strategy serves:** short phrase grounded in the strategy
- **Anti-goals:** what this must never encourage
- **Reference path:** `skill/reference/sequence.md` (or the primary command's reference)
```

**If Discovery** (Customer Discovery page), use the hybrid skeleton. Worksheets (Do / Don't / Make It Yours / metrics) are secondary; **teaching prose is mandatory**. Do not collapse the page into a skill card of bullets.

```markdown
# [Title]

[One-line tagline — then teach.]

## What it is

[Substantial paragraphs — definitions, distinctions, diagrams if they clarify. Not a bullet list alone.]

## Why it works

[Substantial paragraphs — mechanisms, failure modes, links into concepts/TTPs.]

## Going deeper

[Numbered teaching points with explanation — how to practice this in discovery.]

## For builders and agents

[How this shows up in product, telemetry, docs, and agent workflows.]

## When to use it

- ...

## Do

- ...

## Don't

- ...

## Founder Tip

...

## Make It Yours

...

## Insights & Metrics

...

## Behind the Data

...

## Related concepts

- Prefer concepts plus strategies/TTPs that *consume* this discovery output.

## Further reading

- [Title](URL) — ...

## Agent skill

- **Primary command:** `/productfeeling <command>` — short why (existing commands only; no external discovery skill)
- **Related commands:** related `/productfeeling …` commands
- **When the agent should load this page:** 3–6 short trigger phrases in quotes
- **Companion handoff:** DocSlime for durable `docs/` writes (name paths); Impeccable only after synthesis/north star; RedTeam optional for assumption challenge — never an external discovery skill
- **Feeling north star this practice serves:** short phrase
- **Anti-goals:** what this must never encourage
- **Reference path:** `skill/reference/<command>.md`
- **Durable DocSlime targets:** `docs/strategy/…` and/or `docs/experience/…` (and PRODUCT/DESIGN when appropriate)
```

3. **Diff notes** (bullet list): TTP blurbs you aligned, metrics fixed, resources added, anything left for a human editor.

### Constraints

- Do not rewrite other sections.
- Do not invent case studies or statistics you cannot support; if uncertain, soften language (“often”, “typically”) or omit the number.
- For **strategies/TTPs**: worksheets (Do/Don't/Make It Yours/metrics) stay; add real prose in "What it is"/"Why it works" so the page reads as a handbook chapter, not a skill's user manual. A strategy page must be understandable — and worth reading — without following any TTP link. Denser and clearer, not a full essay.
- For **Discovery**: restore and keep knowledge-imparting prose (What it is / Why it works / Going deeper / For builders and agents). Worksheets must not replace teaching. Length may exceed a TTP card when the topic needs it.
- Do not prescribe dark patterns. If the draft edges that way, rewrite toward agency-preserving alternatives and note it in Findings.
- Voice: practical, founder-friendly, emotionally precise. Not corporate fluff. Not academic jargon without payoff.
