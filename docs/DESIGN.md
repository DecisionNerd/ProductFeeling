# Design

## Architecture mirrors

Packaging follows RedTeam / Impeccable:

- Source of truth: `skill/`
- Build copies into provider skill dirs
- Optional `.productfeeling/` for project persistence
- CLI + skills.sh install paths

## Interaction

- One skill, many commands via arguments
- Chat-only and project-anchored both first-class
- Missing FEELING.md never blocks scoped reviews
- Ethical stance is hard-coded in principles

## Docs site

Starlight user guide under `src/content/docs/guide/`. Developer docs authored in `docs/` and staged by `scripts/prepare-docs-site.mjs`.

## Accessibility

Emotion guidance must never override clarity, contrast, or reduced-motion requirements. Intensity and delight yield to accessibility.
