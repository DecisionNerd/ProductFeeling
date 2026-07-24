# Synthesis

Turn discovery evidence into durable artifacts the team—and agents—can load before locking a feeling north star.

## What it is

**Synthesis** is the gate between listening and designing: cluster episodes, promote or kill proto-personas, write the ICP, need states, workflow, and VoC into project docs, and leave ephemeral notes behind. Until synthesis lands in DocSlime-shaped `docs/`, strategies and TTPs are guessing. This is not a second product narrative in `.productfeeling/`—reviews and sessions stay local; **truth** lives in `docs/`.

## Why it works

Scattered interview notes do not change onboarding copy or paywall trust. Named files with owners, evidence links, and a last-validated date do. Agents running `/productfeeling persona` or `jobs` need the same SoT humans use. Synthesis also prevents “we talked to users” theatre: if nothing durable was written, discovery did not finish.

## When to use it

- After a round of interviews (or continuous discovery cadence)
- Before locking [Feeling North Star](../concepts/01-feeling-north-star.md) or running a strategy playbook
- When proto-personas have enough evidence to promote or delete
- When agents keep inventing customers because nothing is in `docs/`

## Do

- Promote claims with evidence; keep **proto-** labels on the rest—or delete them
- Write a short synthesis pack to agreed paths (see Durable targets below)
- Link claims to interviews or behavioural sources; date **last validated**
- Separate: session notes (ephemeral) vs product/experience truth (durable)
- Run `/productfeeling handoff` (DocSlime) when the docs tree is scaffold-thin—fill/kiss as needed
- Optionally stress-test ICP assumptions with RedTeam before locking strategy

## Don't

- Dump interview transcripts into `docs/` as the narrative
- Duplicate ICP/journey truth into `.productfeeling/` when `docs/` exists
- Lock a north star on proto-personas alone
- Skip synthesis and jump straight to Impeccable craft
- Treat a slide deck outside the repo as the SoT for agents

## Founder Tip

If an agent cannot answer “who is this for and what do they fear?” from `docs/`, synthesis is not done.

## Make It Yours

1. **Kill list** — proto claims to delete this week.
2. **File map** — which discovery outputs land in which `docs/` paths.
3. **Evidence links** — one citation per major persona and need-state claim.
4. **Gate check** — north star and next strategy blocked until synthesis pack exists.

## Insights & Metrics

1. **Graduation rate** — Validated claims written to `docs/` ÷ Claims still only in sessions/chat.
2. **Freshness** — Days since ICP / primary persona **last validated** (set a team threshold).
3. **Agent loadability** — Can `context.mjs` / selective docs load name owner + fear + current alternative without chat invention?

## Behind the Data

- What is still proto that you are already designing as fact?
- Where does truth live today—repo, Notion, or someone’s head?
- Did the last “discovery week” change a single durable file?

## Related concepts

- [Feeling North Star](../concepts/01-feeling-north-star.md), [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- Inputs: [01](01-ideal-customer-and-users.md)–[05](05-interview-method.md); outputs feed all [Strategies](../strategies/index.md)

## Further reading

- [Customer Development is Not a Focus Group (Steve Blank)](https://steveblank.com/2009/11/30/customer-development-is-not-a-focus-group/) — Hypotheses in, decisions out.
- [The Mom Test (Rob Fitzpatrick)](https://www.momtestbook.com/) — What counts as evidence worth writing down.
- [DocSlime](https://www.docslime.dev/) — Opinionated `docs/` tree for durable product context.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — Customer discovery playbook ending in `handoff`; or `/productfeeling init` then `/productfeeling handoff` when refreshing docs
- **Related commands:** `/productfeeling persona`, `/productfeeling jobs`, `/productfeeling brief` (only after north star is grounded)
- **When the agent should load this page:** "synthesis", "write up discovery", "update personas in docs", "graduate findings", "before north star"
- **Companion handoff:** **DocSlime** — primary: write/update the synthesis pack in `docs/`; fill/kiss if scaffold-thin. **Impeccable** — only after north star / emotion brief. **RedTeam** — `/redteam assumptions` on ICP before locking. No external discovery skill.
- **Feeling north star this practice serves:** grounded clarity that survives the next session and the next agent
- **Anti-goals:** transcript dumps as docs, dual SoT in `.productfeeling/`, craft before synthesis
- **Reference path:** `skill/reference/sequence.md`
- **Durable DocSlime targets:**
  - `docs/strategy/` — ICP, personas, market/buy notes
  - `docs/experience/` — need states, workflow, journeys
  - `docs/PRODUCT.md` / `DESIGN.md` — voice, language, constraints
  - Ephemeral: `.productfeeling/sessions/`, `.productfeeling/reviews/` — not a second narrative
