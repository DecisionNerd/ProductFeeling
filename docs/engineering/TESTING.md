# Testing

Ship confidence comes from **fast, deterministic packaging and docs checks**, plus **manual/dogfood evaluation** of agent behavior against experience journeys. There is no application server to E2E-test; the skill’s “runtime” is an agent host following `skill/` instructions. Automated tests prove installability, version coherence, and that the docs/handbook site builds with required pages. Feeling-quality outcomes (grounded clarity → confidence, never blocked/overwhelmed) are evaluated qualitatively until dedicated evals exist.

## Strategy

| Layer | What it verifies | Tools |
|---|---|---|
| Script / contract checks | SemVer alignment across package manifests; required docs-site pages present after build | `scripts/check-version.mjs`, `scripts/check-docs-site.mjs` |
| Install smoke | CLI `--version` and project install places skill + `.productfeeling` template files | `scripts/test-cli-install.mjs` |
| Docs site integrity | Prepare → Astro check → build → required page set | `npm run docs:site` |
| Agent behavior (gap) | Command flows, docs-first context, anti-goals in live harnesses | Manual dogfood / future eval harness — **not automated yet** |

No separate unit-test framework (Jest/Vitest/etc.) today. Emphasis is packaging + site gates.

## Behavior coverage

| Experience / Requirement | Scenario (Given/When/Then) | Test |
|---|---|---|
| FR-11 / install | Given a temp project, When CLI installs `--providers=agents`, Then skill files and `.productfeeling` templates exist with matching version | `npm run test:cli-install` → `scripts/test-cli-install.mjs` |
| NFR-4 / versioning | Given package version, When version check runs, Then plugin/marketplace/(lock) versions match SemVer | `npm run version:check` |
| NFR-6 / docs site | Given handbook + docs staged, When `docs:site` runs, Then required guide/handbook/developer pages exist under `site/` | `npm run docs:site` → `scripts/check-docs-site.mjs` |
| EXP-J1 / FR-4 / FR-12 | Given chat-only paste, When feel/audit runs without docs, Then review proceeds | **Gap** — manual |
| EXP-J2 / FR-3 / FR-6 | Given DocSlime `docs/`, When review persists, Then artifact under `.productfeeling/reviews/` | **Gap** — manual |
| EXP-J3 / FR-2 | Given review-only ask, When command finishes, Then no unsolicited edits | **Gap** — manual |
| EXP-J4 / FR-2 / FR-10 | Given change ask, When analysis finishes, Then continues + optional Impeccable handoff | **Gap** — manual |
| FR-8 / NFR-2 | Given handbook depth needed, When agent loads context, Then selective chunks only | **Gap** — manual / future eval |
| FR-9 | Given coercion request, When agent responds, Then refuses and offers agency-preserving alternative | **Gap** — manual |
| context.mjs docs-first | Given this repo’s `docs/`, When `node skill/scripts/context.mjs`, Then prints `PRODUCTFEELING_DOCS_CONTEXT` and strategy/experience paths | **Gap** — no automated script yet (easy add) |

## Traceability contract

| Link | Evidence |
|---|---|
| Product goal → experience | [`../PRODUCT.md`](../PRODUCT.md) grounded clarity; [`../experience/journey-product-development-participant.md`](../experience/journey-product-development-participant.md) |
| Experience → requirement | EXP-J* → FR-2–4, FR-6–10, FR-12 in [`../REQUIREMENTS.md`](../REQUIREMENTS.md) |
| Requirement → BDD scenario | Behavior coverage table above |
| Scenario → test | Automated rows cite scripts; agent rows marked **Gap** |
| Requirement → architecture/ADR | [`ARCHITECTURE.md`](ARCHITECTURE.md); [ADR-0001](adrs/0001-docs-first-feeling-context.md), [ADR-0002](adrs/0002-skill-source-provider-copies.md) |

## Evaluation against product goals

Beyond green CI scripts:

- **Grounded clarity** — dogfood: participant completes a scoped review without setup lecture or dump, and can name the feeling finding.
- **Never blocked / overwhelmed** — dogfood: chat-only works; docs loads stay selective.
- **Companion fit** — brief/handoff usable by Impeccable/DocSlime without re-litigating strategy.
- **Site as learning surface** — handbook and developer docs remain buildable (`docs:site`).

No quantitative product analytics or LLM eval suite yet (see OBSERVABILITY when filled).

## Running the tests

```bash
npm test
```

Equivalent pieces:

```bash
npm run version:check
npm run test:cli-install
npm run docs:site
```

Expectation: all commands exit 0. Node `>=22.12.0`.

## Continuous integration

| Workflow | When | What |
|---|---|---|
| [`.github/workflows/test.yml`](../../.github/workflows/test.yml) | Pull requests and pushes to `main` | `npm ci` + `npm test` (version check, CLI install smoke, docs site) |
| [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml) | Push to `main` and `workflow_dispatch` | `npm run docs:site` then deploy `site/` to GitHub Pages |

Merge/release expectation: **Test** workflow green. Docs deploy is separate and also rebuilds the site on `main`.

## Test data & environments

- **CLI install:** throwaway temp directory (`os.tmpdir()`), removed in `finally`.
- **Docs site:** build output in `site/` (local/CI artifact); `check-docs-site.mjs` asserts a fixed list of HTML paths.
- **No** shared fixtures DB, seeds, or staging app environment — not applicable to this package shape.
