# Roadmap

Near-term strategic bets (product direction, not a release calendar). Sequencing may change; durable decisions go to ADRs when architecture is involved.

## Now

1. **Docs-first feeling context** — Prefer `docs/` (PRODUCT, DESIGN, `strategy/`, `experience/`) over a required `FEELING.md`. `.productfeeling/` holds reviews and skill-local state only.
2. **Strategy as a working surface** — ProductFeeling’s own product work happens heavily in `docs/strategy/` and related DocSlime paths; the skill must load and update that context deliberately.
3. **Selective handbook** — Ship handbook with the skill; load chunks by command need; never default to full-book ingestion.
4. **Install parity with Impeccable** — Same host matrix; stay a seamless companion.

## Next

1. Migrate `init` / `context.mjs` fully off FEELING.md-as-required (legacy read OK).
2. Clarify what `init` scaffolds: DocSlime/`docs/` feeling threads vs `.productfeeling/` only vs both.
3. Fill `docs/experience/` so journeys and opportunities back the strategy bets.
4. Keep ethics as seamless best practice (findings, not a heavy gate).

## Later / open

- Pricing / distribution model beyond open installable skill — undecided.
- Formal competitive category naming — see [competitive-landscape.md](./competitive-landscape.md).
