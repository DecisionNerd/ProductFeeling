# ADR-0001: Docs-first feeling context

- **Status:** Accepted
- **Date:** 2026-07-21
- **Deciders:** ProductFeeling maintainers

## Context

Feeling context must be shared across commands without blocking scoped reviews. A conspicuous `FEELING.md` competed with DocSlime/`docs/` as a second source of truth and fought the “never feel blocked or overwhelmed” anti-goals. Requirements FR-3–FR-7 and experience journeys call for docs-first persistence.

## Options considered

1. **Require FEELING.md** — simple, ProductFeeling-branded; duplicates DocSlime and blocks perception of setup tax.
2. **Docs-first (`docs/` strategy/experience/PRODUCT)** — weave feeling into durable product docs; `.productfeeling/` for reviews only; legacy FEELING.md optional.
3. **Chat-only forever** — no persistence; fails project-anchored continuity.

## Decision

Adopt **option 2**: prefer project `docs/` as feeling/product SoT; keep `.productfeeling/` for skill-local artifacts; treat FEELING.md as optional legacy.

## Consequences

- **Positive:** Aligns with DocSlime; strategy/experience become primary workspaces; lower setup deadlock.
- **Negative:** Migration cost for `init` / `context.mjs` / guides; dual-read until legacy fades.
- **Follow-up:** Complete init migration; ADR if FEELING.md support is later removed.
