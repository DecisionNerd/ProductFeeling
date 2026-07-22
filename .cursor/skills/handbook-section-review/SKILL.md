---
name: handbook-section-review
description: >-
  Review and upgrade one Product Feelings Handbook section at a time: research
  the method, add high-quality further reading, rewrite for clarity and ethics,
  and leave an Agent skill TODO stub. Use when the user asks to review, upgrade,
  research, or rewrite a handbook strategy, TTP, or concept; mentions
  SECTION_REVIEW_PROMPT; or works section-by-section on the handbook/ tree.
disable-model-invocation: true
---

# Handbook section review

Upgrade **one** handbook section file using the canonical prompt in [SECTION_REVIEW_PROMPT.md](../../../handbook/SECTION_REVIEW_PROMPT.md). Each section is its own file: `handbook/ttps/<slug>.md`, `handbook/strategies/NN-<slug>.md`, or `handbook/concepts/NN-<slug>.md`.

## Setup

1. Identify **Type** (`Product Strategy` | `TTP` | `Concept` | `Welcome & Setup`) and **Title**.
2. If the user did not paste the section, read its file from the `handbook/` tree (find it by slug under `ttps/`, `strategies/`, or `concepts/`).
3. Read [SECTION_REVIEW_PROMPT.md](../../../handbook/SECTION_REVIEW_PROMPT.md) and follow the **Prompt** body **verbatim** (job steps, output format, skeletons, constraints). Do not soften or skip ethics / Further reading / Agent skill stub rules.
4. Review **only** that section file. Do not rewrite siblings.

## Apply edits

- Default: return Findings + Rewritten section + Diff notes in chat.
- If the user asks to apply / write / commit the rewrite: replace the section file's contents in place. Keep the `# Title` h1 and `##` subsection levels; keep relative `.md` cross-links.
- After applying, do **not** edit generated `src/content/docs/handbook/` — that tree is produced by `npm run docs:prepare`.

## Quick checks before finishing

- [ ] British spelling where the handbook uses it (*optimisation*, *personalisation*, *behaviour*)
- [ ] 3–6 durable Further reading links (no content-farm listicles)
- [ ] `#### Agent skill` present with `TODO` placeholders only — no invented finished commands
- [ ] No dark patterns prescribed; coercion flagged in Findings if the draft edged that way
- [ ] Length stayed handbook-card dense, not a long essay
