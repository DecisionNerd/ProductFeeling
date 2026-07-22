---
title: "Installation"
description: "Install ProductFeeling across agent harnesses — same spirit as Impeccable’s host matrix."
sidebar:
  order: 2
---

Host coverage aims for **parity with Impeccable** (Cursor, Claude Code, Codex/agents, and related skill paths).

## skills CLI (recommended)

```bash
npx skills add DecisionNerd/ProductFeeling
```

- `-g` — user-level install
- `-y` — skip confirmations

Update later with `npx skills update`.

## Project CLI

```bash
npx --yes github:DecisionNerd/ProductFeeling install
```

Options: `--providers=cursor,claude,agents,github,gemini` · `--scope=project|global`

Creates `.productfeeling/` when missing (reviews/briefs scaffold). Feeling narrative still prefers your project `docs/` when you have DocSlime or similar.

## Claude Code plugin

```
/plugin marketplace add DecisionNerd/ProductFeeling
```

## ChatGPT

See [chatgpt/README.md](https://github.com/DecisionNerd/ProductFeeling/blob/main/chatgpt/README.md).

## From source

```bash
npm install
npm run build
# then copy .cursor/skills/productfeeling (or .claude / .agents / .gemini)
```
