# ADR-0002: Skill source copied to provider directories

- **Status:** Accepted
- **Date:** 2026-07-21
- **Deciders:** ProductFeeling maintainers

## Context

ProductFeeling must install like companion skills (Impeccable / RedTeam pattern): one editable source, many agent-host layouts. FR-11 requires install parity with Impeccable’s host matrix.

## Options considered

1. **Single published path only** — e.g. only `.agents/`; weaker host coverage.
2. **`skill/` source + build copy** into `.cursor/`, `.claude/`, `.agents/`, `.github/`, `.gemini/`, `plugin/`, plus `dist/` — mirrors companion packaging.
3. **Generate host formats from a non-markdown IR** — more machinery than needed for instruction-led skills.

## Decision

Adopt **option 2**: edit `skill/` only; `scripts/build.mjs` copies to provider directories and `dist/`; CLI installs from built/package trees.

## Consequences

- **Positive:** Familiar contributor model; broad host reach; `npx skills add` compatible.
- **Negative:** Generated trees can be edited by mistake; build must stay green.
- **Follow-up:** Keep PROVIDERS list aligned with Impeccable when either repo changes hosts.
