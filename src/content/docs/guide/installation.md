---
title: "Installation"
description: "Ways to install the ProductFeeling skill across agent harnesses."
sidebar:
  order: 2
---

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

Creates `.productfeeling/` when missing.

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
# then copy .cursor/skills/productfeeling (or .claude / .agents)
```
