# How Customers Work Today

Before your product exists in a customer’s life, the job is already being done—with other tools, workarounds, favours, and habits. That existing way of working is the environment your product must enter, and discovery’s task is to map it as it *is*, not as your roadmap wishes it were.

## What it is

The customer’s **current workflow** (their working practice, or modus operandi) is the observable sequence of tools, steps, people, and workarounds through which they get the job done today: where the work starts, what it touches, where it stalls, who else is involved, and what “done” looks like. The standard research method is **contextual inquiry**—watching the work happen in its real environment and asking questions in the moment—because people cannot accurately narrate their own routines from memory: they omit the workarounds they no longer notice and describe the process as it is *supposed* to go.

## Why it works

Emotionally, the current workflow is where the feelings you must design against already live: the dread step everyone procrastinates, the fragile handoff people double-check out of fear, the copy-paste ritual that makes professionals feel like clerks. A product that relieves a specific felt moment in a real workflow gets emotional credit far beyond its feature list; a product that ignores the workflow asks the user to dismantle their working life on faith.

The workflow also defines your real competition. The **current alternative** is rarely a rival product—it is a spreadsheet, an email thread, an intern, or living with the problem. Discovery that only benchmarks competitors misses the actual incumbent: the devil the customer knows, whose greatest feature is requiring no change ([Habit Formation](../concepts/10-habit-formation.md) explains the physics of that inertia).

## Going deeper

What to capture in a workflow map:

1. **Triggers and cadence.** What starts the work, and how often—daily ritual, monthly close, unpredictable fire? Cadence determines your product’s natural usage rhythm and whether daily-engagement mechanics fit at all.
2. **The tool chain and its seams.** Which tools touch the job, and where does work cross between them? The seams—exports, re-keying, screenshots pasted into chat—are where effort, errors, and resentment concentrate, and where a wedge product enters.
3. **Workarounds as evidence.** Every workaround is a feature request the customer already prototyped, plus proof of how much the gap hurts (they built *something* rather than live with it). Ask “what do you do when that fails?” and watch for the embarrassed laugh—that laugh is a need state.
4. **The emotional topography.** Which steps do they defer, double-check, or hand to someone else? Where do they feel competent versus anxious? This map chooses your TTPs: anxiety steps want [Fail Safe](../ttps/fail-safe.md) and [Loading Feedback](../ttps/loading-feedback.md); tedium steps want [Setup Defaults](../ttps/setup-defaults.md) and [Momentum Bias](../ttps/momentum-bias.md); pride steps want [Success Moments](../ttps/success-moments.md) and [Shareability](../ttps/shareability.md).
5. **Switching stakes.** What accumulated value (data, history, integrations, muscle memory) would a move to your product put at risk? These are the anxieties your onboarding must answer concretely ([Effort Moat](../ttps/effort-moat.md) honoured in reverse).

## For builders and agents

The workflow map is an integration spec: the tools it names are your import sources, export targets, and notification channels. “Fits into how they already work” is implemented as connectors, file-format fidelity, and respecting the system of record—not as marketing copy. Migration is a feature with a feeling: importers that preserve structure, dry-run previews, and reversible switches directly attack the anxiety force. Budget them as first-class work, not launch-week afterthoughts.

Watch for workflow signals in your own telemetry: exports immediately re-imported elsewhere, the same data re-entered twice, sessions that always start from a paste. Your users’ workarounds *inside* your product are the same evidence discovery finds outside it. For agents: when asked to design or review a flow, request the current-workflow context first. A flow reviewed against “what does this replace, and what does the user risk by switching?” produces materially different findings than one reviewed in a vacuum.

## When to use it

- Before designing onboarding, imports, or “replace the spreadsheet” value
- When choosing integrations, file formats, and systems of record
- When mapping anxiety vs tedium vs pride steps to TTPs
- When estimating switching stakes

## Do

- Capture triggers and cadence before inventing engagement loops
- Map the tool chain and its seams—where resentment concentrates
- Treat workarounds as prototypes of unmet need
- Chart emotional topography; name switching stakes explicitly
- Treat migration as first-class product work

## Don't

- Benchmark only rival products and miss the spreadsheet incumbent
- Design against the idealised process in the wiki
- Demand a new daily ritual when the job is monthly
- Promise “fits how they work” without connectors or fidelity to their system of record

## Founder Tip

The embarrassed laugh after “what do you do when that fails?” is usually a need state wearing a workaround.

## Make It Yours

1. **One real episode** — tools touched, seams crossed, who else involved.
2. **Name the incumbent** — what wins if they never switch.
3. **Three emotional beats** — dread, anxiety, pride—and which TTPs they imply.
4. **Switching stakes list** — data, integrations, habits you must honour on the way in.

## Insights & Metrics

1. **Workflow completeness** — Maps that name current alternative + ≥1 switching stake ÷ Maps produced.
2. **Seam inventory** — Cross-tool handoffs in the primary job (wedge targets).
3. **In-product workaround signals** — Exports re-imported elsewhere, double entry, paste-first sessions.

## Behind the Data

- Are you competing with a spreadsheet you have not watched someone use?
- Which dread step does first value actually remove?
- Does onboarding respect their cadence or invent a new one?

## Related concepts

- [Habit Formation](../concepts/10-habit-formation.md), [Friction](../concepts/04-friction.md), [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- Consumed by: [Time to Value](../ttps/time-to-value.md), [Onboarding](../strategies/01-onboarding.md), [Retention](../strategies/03-retention.md), [Fail Safe](../ttps/fail-safe.md), [Setup Defaults](../ttps/setup-defaults.md), [Success Moments](../ttps/success-moments.md)

## Further reading

- [Contextual Inquiry (Nielsen Norman Group)](https://www.nngroup.com/articles/contextual-inquiry/) — See work as it actually happens.
- [The Mom Test (Rob Fitzpatrick)](https://www.momtestbook.com/) — Past and concrete, not the idealised process.
- [Demand-Side Sales 101 (Bob Moesta)](https://www.goodreads.com/book/show/55338968-demand-side-sales-101) — Current alternative and forces holding it.

## Agent skill

- **Primary command:** `/productfeeling map` — journey valence across the real workflow and switch
- **Related commands:** `/productfeeling jobs`, `/productfeeling friction`, `/productfeeling sequence` (Customer discovery)
- **When the agent should load this page:** "current workflow", "how they work today", "workaround", "migration", "spreadsheet"
- **Companion handoff:** DocSlime — workflow and switching stakes in `docs/experience/`; integration constraints in `docs/DESIGN.md` when durable. Impeccable after synthesis. No external discovery skill.
- **Feeling north star this practice serves:** enter their working life; do not demand they invent a new one first
- **Anti-goals:** rival-only competitive research, idealised process design, cadence mismatch
- **Reference path:** `skill/reference/map.md`
- **Durable DocSlime targets:** `docs/experience/` (workflow map); `docs/DESIGN.md` or strategy for integration/migration rules
