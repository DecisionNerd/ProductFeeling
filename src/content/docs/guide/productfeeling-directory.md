---
title: ".productfeeling/ directory"
description: "Persistent feeling context, reviews, and briefs."
sidebar:
  order: 4
---

Project-anchored mode uses a `.productfeeling/` directory (created by the installer or `/productfeeling init`).

| Path | Purpose |
|------|---------|
| `FEELING.md` | Emotional north star (may also live at repo root) |
| `config.json` | Skill defaults |
| `FEELING.template.md` | Init template |
| `reviews/` | Audit / feel / review artifacts |
| `sessions/` | Dated session notes |
| `briefs/` | Emotion briefs for Impeccable |

Context resolution order: root `FEELING.md` → `.productfeeling/FEELING.md` → `.agents/context/` → `docs/`.
