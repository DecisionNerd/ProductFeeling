---
title: "User Guide"
description: "Install and use ProductFeeling in Cursor, Claude Code, Codex, and ChatGPT."
sidebar:
  order: 0
---

**ProductFeeling** helps product development participants — technical and non-technical — decide how a product should *feel*, then review surfaces and flows against that north star.

It sits upstream of **[Impeccable](https://github.com/pbakaus/impeccable)** (frontend craft) and beside **[DocSlime](https://www.docslime.dev)** (durable `docs/`). This product aims for **grounded clarity** — name how something feels and why, on real evidence — with confidence as the residue. It should never leave people **blocked** or **overwhelmed**.

## Companions

ProductFeeling decides *how a product should feel*; it hands execution to two sibling skills for AI coding agents.

| Skill | What it is | Hand off when |
|-------|-----------|---------------|
| [Impeccable](https://github.com/pbakaus/impeccable) ([impeccable.style](https://impeccable.style)) | Design guidance for AI coding agents — frontend craft, live browser iteration, and deterministic detector rules | You have a feeling `brief` and need the UI built or polished |
| [DocSlime](https://www.docslime.dev/) ([`DecisionNerd/DocSlime`](https://github.com/DecisionNerd/DocSlime)) | A CLI plus skill pack for creating, filling, reviewing, and publishing an opinionated `docs/` tree | The feeling/product narrative should live durably in `docs/` |
| [RedTeam](https://curatelabs.github.io/RedTeam/) ([`CurateLabs/RedTeam`](https://github.com/CurateLabs/RedTeam)) | Applied critical thinking — premortems, assumptions checks, devil's advocacy, decision reviews (not security testing) | A feeling decision, north star, or strategy needs adversarial stress-testing before you commit |

## In this guide

| Page | What you'll learn |
|------|-------------------|
| [Quick start](/ProductFeeling/guide/quick-start/) | Install and run your first review |
| [Installation](/ProductFeeling/guide/installation/) | skills CLI, project CLI, plugins, ChatGPT |
| [Commands](/ProductFeeling/guide/commands/) | All 23 `/productfeeling` commands |
| [Project context](/ProductFeeling/guide/productfeeling-directory/) | `docs/` vs `.productfeeling/` |
| [Chat-only mode](/ProductFeeling/guide/chat-only/) | Useful reviews with zero project setup |

## What it is not

Not a general UI polish skill (use Impeccable). Not clinical psychology. Not a toolkit for dark patterns or ethics theater.
