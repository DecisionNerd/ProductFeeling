# Requirements

This contract covers **ProductFeeling as an end-to-end experience** for people in the product development lifecycle: learning (including the handbook), applying feeling guidance, reviewing surfaces/flows, and handing off to craft and docs tools. The **agent skill is the core surface**; the handbook is part of the same product experience and ships with the skill. Installable packaging, project persistence (`.productfeeling/`), and optional DocSlime/`docs/` collaboration are in scope. Visual polish execution remains Impeccable’s job; durable product documentation remains DocSlime’s—ProductFeeling must not replace either.

## Functional requirements

| ID | Requirement | Derived from | Acceptance behavior |
|---|---|---|---|
| FR-1 | The system shall expose a single ProductFeeling skill invoked as `/productfeeling` (or host-equivalent) with argument-routed commands. | PRODUCT.md | Given a supported host with the skill installed, When the user invokes the skill with a known command name, Then the agent loads that command’s reference flow and proceeds. |
| FR-2 | The system shall treat user intent as the gate for mutating work: review/design requests stop at findings unless the user asked for changes; change requests continue through implementation without stopping solely for a formal handoff. | Interview | Given the user asked only for review or design advice, When the command completes, Then the agent does not apply unsolicited product/code edits. Given the user asked for changes from the start, When review finishes, Then the agent continues toward the requested changes (offering Impeccable/DocSlime where useful). |
| FR-3 | The system shall load project feeling context from the consumer project’s durable docs (`docs/` when present—DocSlime-shaped or otherwise), woven through product/design/experience material—not from a required conspicuous `FEELING.md`. | Interview | Given `docs/` (or equivalent product docs) exist, When a command needs feeling context, Then the agent reads those sources and does not require `FEELING.md`. |
| FR-4 | The system shall encourage a repo `docs/` folder and recommend DocSlime formation when durable product/experience docs are missing or thin, without blocking scoped work the user already asked for. | Interview; DESIGN.md | Given no useful `docs/` tree, When the user runs a scoped review with enough in-chat or codebase context, Then the review proceeds and the agent recommends DocSlime/`docs/` setup as a follow-up—not a hard gate. |
| FR-5 | The system shall use `.productfeeling/` for ProductFeeling-local persistence and must not create competing sources of product/experience truth there when `docs/` (or other project docs) already exist. | Interview | Given project docs exist, When the skill persists state, Then it does not duplicate ICP/journey/product narrative into `.productfeeling/` as a second source of truth. |
| FR-6 | The system shall write review artifacts under `.productfeeling/reviews/` and shall not bloat `docs/` with routine reviews. | Interview | Given a review command completes, When an artifact is persisted, Then it is written under `.productfeeling/reviews/` unless the user explicitly requested a durable docs update. |
| FR-7 | The system shall write into `docs/` only durable, first-visit essentials the user/agent need on day one (e.g. ADRs, meaningful `experience/` updates)—and only when that write is requested or clearly part of an agreed handoff. | Interview | Given a review finding, When the user has not asked to update docs, Then `docs/` is left unchanged. Given an explicit durable update (ADR, experience doc), When the agent writes, Then the change belongs in `docs/` (or DocSlime paths), not in reviews. |
| FR-8 | The system shall ship handbook content with the skill as modular chunks and shall load only the handbook slices needed for the current command—not the entire handbook by default. | Interview | Given a command that benefits from handbook depth, When the agent loads handbook material, Then it opens relevant chunk file(s) only. Given a simple scoped question answerable from principles/command reference, When the agent responds, Then it does not preload the full handbook. |
| FR-9 | The system shall refuse to prescribe dark patterns, manufactured urgency, or emotional coercion, and when reviewing shall surface such risks as ordinary design findings without lecturing or acting as “ethics police.” | PRODUCT.md; Interview | Given a request to invent a coercive pattern, When the agent responds, Then it declines to prescribe it and offers an agency-preserving alternative. Given a review of an existing surface, When a dark-pattern risk is found, Then it is reported as a design finding in the normal review voice. |
| FR-10 | The system shall offer or support an explicit handoff path to Impeccable (craft) and/or DocSlime (durable docs) without auto-writing into the user’s docs unless requested or clearly implied by a change-oriented ask. | PRODUCT.md; Interview | Given a completed review, When handoff is appropriate, Then the agent offers next steps / `handoff` rather than silently editing DocSlime docs. |
| FR-11 | The system shall install and build for the same agent skill hosts that Impeccable’s repository supports (parity with that install matrix). | Interview; DESIGN.md | Given Impeccable’s published/supported skill install targets, When ProductFeeling is built/installed, Then those same host destinations are covered (exact set tracked with Impeccable). |
| FR-12 | The system shall provide chat-only and project-anchored usage as first-class modes. | DESIGN.md | Given no project docs and a pasted surface/flow in chat, When the user runs a scoped command, Then the review proceeds using provided context. |

## Non-functional requirements

| ID | Quality attribute | Target / constraint | Why it matters |
|---|---|---|---|
| NFR-1 | Accessibility | Feeling guidance must never override clarity, contrast, or reduced-motion requirements; intensity/delight yield to accessibility. | DESIGN.md; users who need a11y must not be harmed by “delight.” |
| NFR-2 | Token / context thrift | Prefer selective handbook and reference loads; avoid mandatory full-book ingestion. | Interview — depth without burning unneeded tokens. |
| NFR-3 | Install parity | Host support stays aligned with Impeccable’s skill install matrix. | Interview — seamless companion skill. |
| NFR-4 | Runtime | Packaging/scripts follow repo engines (currently Node `>=22.12.0` where Node is required). | package.json — contributor/runtime consistency. |
| NFR-5 | Ethical UX | Ethics are seamless best practice, not a separate accusatory workflow gate. | Interview — seamless experience. |
| NFR-6 | Docs site integrity | Staged developer docs and handbook site remain build-checkable via project docs scripts. | DESIGN.md; existing `docs:site` practice. |

## Behavior trace

| Requirement | Given | When | Then |
|---|---|---|---|
| FR-3 / FR-4 | Project has no DocSlime tree but user pasted a checkout flow | User runs `/productfeeling audit` on that flow | Audit completes; agent recommends `docs/` + DocSlime; does not refuse for missing FEELING.md |
| FR-5 / FR-6 | Project has `docs/PRODUCT.md` and an experience profile | User runs a review that persists output | Review file lands in `.productfeeling/reviews/`; product narrative is not copied into `.productfeeling/` as a rival source of truth |
| FR-2 / FR-10 | User asked “how does this feel?” only | Review finishes | Findings (+ optional handoff offer); no unsolicited code/docs edits |
| FR-2 | User asked “fix the empty state so it feels hopeful” | Agent finishes analysis | Continues into requested changes; may offer Impeccable for craft polish |
| FR-8 | User runs `peaks-ends` on a cancellation flow | Agent prepares context | Loads peak–end / graceful-exit related handbook chunks as needed—not entire handbook |
| FR-9 | User asks how to guilt users into renewing | Agent responds | Declines coercion; proposes fair retention/exit patterns in normal design voice |
| FR-11 | Maintainer runs project build/install | Build completes | Skill artifacts exist for Impeccable-parity hosts |

## Constraints & assumptions

- **Constraint:** ProductFeeling must not replace Impeccable polish workflows or DocSlime documentation ownership.
- **Constraint:** Dark-pattern invention is out of scope.
- **Constraint:** Install host set is defined by parity with Impeccable—not an independent ProductFeeling host list.
- **Assumption:** Consumer projects may use DocSlime, informal `docs/`, or neither; the skill degrades gracefully.
- **Assumption:** “Feeling context” can be inferred from product/design/experience docs and in-chat material when those sources exist.
- **Assumption:** Handbook modular files remain the unit of selective load for agents.

## Dependencies

- **Impeccable** — craft/execution companion; install-host parity reference; optional handoff target.
- **DocSlime** — recommended durable docs framework; optional handoff target; not a hard runtime dependency for scoped reviews.
- **Agent hosts** — Cursor, Claude Code, Codex, and others in Impeccable’s matrix; host skill-loading behavior is external.
- **Node** — required for repo build/CLI/docs scripts (see engines in package.json).

## Open questions

- **OQ-1** — Exact migration plan from existing `FEELING.md` / `context.mjs` behavior to docs-first context loading — owner: ProductFeeling maintainers (likely ADR).
- **OQ-2** — Whether `init` should scaffold DocSlime/`docs/` feeling-aware sections, `.productfeeling/` only, or both — owner: ProductFeeling maintainers.
- **OQ-3** — Machine-readable pointer from skill package to shipped handbook chunks (path convention inside skill bundle) — owner: engineering.
- **OQ-4** — Confirm Impeccable’s current host list whenever either repo changes install targets — owner: maintainers of both skills.
