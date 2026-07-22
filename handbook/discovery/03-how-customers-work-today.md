# How Customers Work Today

Before your product exists in a customer's life, the job is already being done—with other tools, workarounds, favours, and habits. That existing way of working is the environment your product must enter, and discovery's task is to map it as it *is*, not as your roadmap wishes it were.

## Definition

The customer's **current workflow** (their working practice, or modus operandi) is the observable sequence of tools, steps, people, and workarounds through which they get the job done today: where the work starts, what it touches, where it stalls, who else is involved, and what "done" looks like. The standard research method is **contextual inquiry**—watching the work happen in its real environment and asking questions in the moment—because people cannot accurately narrate their own routines from memory: they omit the workarounds they no longer notice and describe the process as it is *supposed* to go.

## Why it matters

Emotionally, the current workflow is where the feelings you must design against already live: the dread step everyone procrastinates, the fragile handoff people double-check out of fear, the copy-paste ritual that makes professionals feel like clerks. A product that relieves a specific felt moment in a real workflow gets emotional credit far beyond its feature list; a product that ignores the workflow asks the user to dismantle their working life on faith.

The workflow also defines your real competition. The **current alternative** is rarely a rival product—it is a spreadsheet, an email thread, an intern, or living with the problem. Discovery that only benchmarks competitors misses the actual incumbent: the devil the customer knows, whose greatest feature is requiring no change ([Habit Formation](../concepts/10-habit-formation.md) explains the physics of that inertia).

## Deep dive

What to capture in a workflow map:

1. **Triggers and cadence.** What starts the work, and how often—daily ritual, monthly close, unpredictable fire? Cadence determines your product's natural usage rhythm and whether daily-engagement mechanics fit at all.
2. **The tool chain and its seams.** Which tools touch the job, and where does work cross between them? The seams—exports, re-keying, screenshots pasted into chat—are where effort, errors, and resentment concentrate, and where a wedge product enters.
3. **Workarounds as evidence.** Every workaround is a feature request the customer already prototyped, plus proof of how much the gap hurts (they built *something* rather than live with it). Ask "what do you do when that fails?" and watch for the embarrassed laugh—that laugh is a need state.
4. **The emotional topography.** Which steps do they defer, double-check, or hand to someone else? Where do they feel competent versus anxious? This map chooses your TTPs: anxiety steps want [Fail Safe](../ttps/fail-safe.md) and [Loading Feedback](../ttps/loading-feedback.md); tedium steps want [Setup Defaults](../ttps/setup-defaults.md) and [Momentum Bias](../ttps/momentum-bias.md); pride steps want [Success Moments](../ttps/success-moments.md) and [Shareability](../ttps/shareability.md).
5. **Switching stakes.** What accumulated value (data, history, integrations, muscle memory) would a move to your product put at risk? These are the anxieties your onboarding must answer concretely ([Effort Moat](../ttps/effort-moat.md) honoured in reverse).

## For engineers and agents

- The workflow map is an integration spec: the tools it names are your import sources, export targets, and notification channels. "Fits into how they already work" is implemented as connectors, file-format fidelity, and respecting the system of record—not as marketing copy.
- Migration is a feature with a feeling: importers that preserve structure, dry-run previews, and reversible switches directly attack the anxiety force. Budget them as first-class work, not launch-week afterthoughts.
- Watch for workflow signals in your own telemetry: exports immediately re-imported elsewhere, the same data re-entered twice, sessions that always start from a paste. Your users' workarounds inside your product are the same evidence discovery finds outside it.
- For agents: when asked to design or review a flow, request the current-workflow context first. A flow reviewed against "what does this replace, and what does the user risk by switching?" produces materially different findings than one reviewed in a vacuum.

## Where it shows up

- [Time to Value](../ttps/time-to-value.md) is defined relative to the current alternative: first value must beat the spreadsheet, not a blank slate.
- [Onboarding](../strategies/01-onboarding.md) and [Retention](../strategies/03-retention.md) both depend on entering the existing cadence rather than demanding a new one.

## Further reading

- [Contextual Inquiry: Inspire Design by Observing and Interviewing Users in Their Context (Nielsen Norman Group)](https://www.nngroup.com/articles/contextual-inquiry/) — The core method for seeing work as it actually happens.
- [The Mom Test (Rob Fitzpatrick)](https://www.momtestbook.com/) — Asking about the past and the concrete, so you learn the real workflow instead of the idealised one.
- [Demand-Side Sales 101 (Bob Moesta)](https://www.goodreads.com/book/show/55338968-demand-side-sales-101) — The current alternative and the forces holding it in place.
