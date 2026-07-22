# Handbook

Canonical source for **The Product Feelings Handbook**. One file per page:

- `index.md` — title, What's Inside, Welcome & Setup
- `why-it-works.md` — the science and history of emotionally aware product design
- `concepts/` — deep dives into the ideas the handbook builds on (14 concepts, `NN-` prefixes set reading order)
- `discovery/` — Customer Discovery: ideal customer and user profiles, need states, current workflows, and how customers talk, search, and buy
- `strategies/` — 12 Product Strategies (`NN-` prefixes set canonical order) plus `index.md` overview
- `ttps/` — 37 Tools, Techniques, and Practices (alphabetical) plus `index.md` catalogue
- `continue-learning.md` — sources and themes beyond this handbook

Cross-link between pages with relative `.md` links (e.g. `../ttps/fail-safe.md`); they work on GitHub and are rewritten to site URLs at build time. Mermaid fenced blocks render on GitHub and on the docs site via `astro-mermaid`.

`npm run docs:prepare` stages this tree into Starlight pages under `src/content/docs/handbook/` (stripping `NN-` filename prefixes from URLs). Edit the handbook here, never in `src/content/docs/handbook/` — that tree is generated and gitignored.

## Section reviews

Use the `handbook-section-review` skill (or [SECTION_REVIEW_PROMPT.md](SECTION_REVIEW_PROMPT.md)) to research, resource, and rewrite **one** strategy or TTP file at a time. Agent skill stubs stay as `TODO` until wired into `skill/reference/`.
