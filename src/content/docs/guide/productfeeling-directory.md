---
title: "Project context"
description: "Where feeling lives: docs/ first, .productfeeling/ for reviews."
sidebar:
  order: 4
---

## Prefer `docs/`

When the project has DocSlime (or any durable `docs/` tree), that is the **feeling and product source of truth**:

| Path | Use for |
|------|---------|
| `docs/PRODUCT.md`, `DESIGN.md` | Compact product and design rules |
| `docs/strategy/` | Positioning, users, competitive, roadmap |
| `docs/experience/` | Journeys, north star, discovery |
| `docs/REQUIREMENTS.md` | Testable contract |

For **ProductFeeling’s own** product work, prioritize `docs/strategy/` then `docs/experience/`. Load selectively — don’t ingest the whole tree.

## `.productfeeling/` is skill-local

| Path | Purpose |
|------|---------|
| `config.json` | Skill defaults |
| `reviews/` | Audit / feel / review artifacts |
| `sessions/` | Dated session notes |
| `briefs/` | Emotion briefs for Impeccable |
| `FEELING.template.md` | Legacy init template |
| `FEELING.md` | Optional legacy north star only |

Do **not** duplicate product/strategy narrative here when `docs/` already exists. Do **not** dump routine reviews into `docs/`.

## Context discovery

`scripts/context.mjs` looks for:

1. `docs/` — PRODUCT, DESIGN, REQUIREMENTS, `strategy/`, `experience/`
2. Optional legacy `FEELING.md` (root, `.productfeeling/`, `.agents/context/`, `docs/`)

Missing docs or FEELING.md **never** blocks a scoped review of material you provide in chat.
