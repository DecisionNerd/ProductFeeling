# Observability

ProductFeeling has **no hosted runtime** and no first-party product analytics. “Production” means: the skill loads in consumer agent hosts, the docs site stays up on GitHub Pages, and packaging/CI stays green. User-outcome learning is **qualitative** (dogfood, feedback, experience artifacts) until an explicit telemetry design is chosen. Do not invent events the package does not emit.

## Observable outcomes

| Outcome / requirement | Signal | Source | Expected range | Owner |
|---|---|---|---|---|
| Packaging / FR-11 | `npm test` green (version, CLI install, docs site) | GitHub Actions **Test** | Pass on PR/`main` | Maintainers |
| Docs availability / NFR-6 | Pages deploy success; required pages present | **Deploy** workflow + `check-docs-site.mjs` | Deploy success after `main` push | Maintainers |
| Grounded clarity (PRODUCT / experience) | Participant completes a scoped review without setup deadlock or dump, and can name the feeling finding | Dogfood / qualitative feedback | Subjective; tracked in `docs/experience/` notes when recorded | Maintainers |
| Never blocked / overwhelmed | Chat-only reviews proceed; selective docs/handbook load | Dogfood / session notes | No forced init for scoped chat reviews | Maintainers |
| Companion handoff | Brief usable by Impeccable; durable writes land in `docs/` when requested | Dogfood / review artifacts in `.productfeeling/reviews/` | Handoff checklist completed when used | Maintainers |

## Service health

| Service / journey | Indicator | Objective | Window |
|---|---|---|---|
| CI Test workflow | Job success | ~100% on merged `main`; PRs must pass before merge | Per run |
| Docs site (GitHub Pages) | Deploy job success | Successful deploy after each `main` push that changes site inputs | Per deploy |
| Consumer skill install | Manual install/update smoke | Skill appears and `/productfeeling library` (or equivalent) responds | Per release / as needed |

No latency/availability SLOs for a ProductFeeling API — none exists. Agent host uptime is outside this package’s control.

## Telemetry design

**Current:** none emitted by the skill to a ProductFeeling backend.

| Kind | Status |
|---|---|
| **Events** | Not collected. Future candidates (only if privacy-safe and opted-in): install success, command invoked (name only), `NO_PROJECT_DOCS` vs docs-context — **not implemented**. |
| **Logs** | CI logs in GitHub Actions; local script stdout. No centralized log drain. |
| **Metrics** | CI pass/fail; Pages deploy status. No product metrics pipeline. |
| **Traces** | N/A (no distributed service). |

If telemetry is added later, record an ADR and update this section; default to **no PII**, no prompt/content capture, and no shadow copy of consumer `docs/`.

## Dashboards and alerts

| Signal | Trigger | Severity | Owner | Response |
|---|---|---|---|---|
| Test workflow failure | PR or `main` run red | High on `main` | Maintainers | Fix or revert; do not release |
| Docs deploy failure | Deploy workflow red | High | Maintainers | Inspect Astro/`docs:site` logs; fix; re-run |
| Consumer “skill missing” reports | Qualitative support/feedback | Medium | Maintainers | Verify install paths / provider matrix vs Impeccable |

No PagerDuty/Datadog (etc.) today — GitHub workflow email/UI is the alert surface.

## Privacy and safety

- Skill runs **in the consumer’s agent host** with their tool permissions; ProductFeeling does not operate a data plane.
- Do not add telemetry that uploads conversation content, FEELING/docs bodies, or review text without an explicit, documented consent model.
- `.productfeeling/reviews/` stays **local to the consumer project** unless they choose to commit it.
- Observability must not become a second store of product strategy/experience truth.

## Production learning loop

1. **CI / Pages** failures → fix packaging or docs; update TESTING/PUBLISHING if process changes.
2. **Dogfood** of ProductFeeling on this repo (`docs/strategy`, `docs/experience`) → update experience artifacts and, when durable, REQUIREMENTS.
3. **Qualitative feedback** from participants → opportunity or study file under `docs/experience/`; promote to requirements only when repeated and testable.
4. **Release notes** (`CHANGELOG.md`) capture user-visible behavior changes for the next learning cycle.

Cadence: opportunistic with releases and dogfood sessions — no fixed metrics review meeting yet.
