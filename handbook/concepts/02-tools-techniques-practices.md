# Tools, Techniques, and Practices (TTPs)

The modular unit of this handbook: a named, reusable pattern for shaping how a product moment feels—small enough to apply in a sprint, precise enough to audit.

## Definition

A Tool, Technique, or Practice (TTP) is one deliberate move—[Empty States](../ttps/empty-states.md), [Intentional Friction](../ttps/intentional-friction.md), [Graceful Exit](../ttps/graceful-exit.md)—described with a consistent anatomy so that a founder, designer, or agent can pick it up cold. The term is borrowed from tradecraft ("tactics, techniques, and procedures"): a shared vocabulary for describing *how* an outcome is achieved, separate from *whether* to pursue it.

A **Product Strategy** is the composition layer: a goal-shaped bundle (Onboarding, Retention, Monetisation…) that names which TTPs carry the goal, which support it, and which metrics tell you whether the feeling—and not just the funnel—is working.

## Why it matters

Most product advice arrives as anecdotes ("Duolingo does streaks") or as abstractions ("build habits"). Neither is actionable or auditable. TTPs sit in between: concrete enough to implement, general enough to transfer, and separable enough that you can adopt one without swallowing an ideology. The card format also makes the ethical boundary explicit—every TTP defines its own misuse, so the same vocabulary that spreads a pattern also spreads its guardrails.

## Deep dive

Every TTP card in this handbook has the same anatomy:

- **Tagline** — the pattern in one honest sentence; if the tagline requires deception to be true, it is not a TTP, it is a dark pattern.
- **What it is / Why it works** — the mechanism and the evidence behind it, usually one or two behavioural findings, not a literature review.
- **When to use it** — the situations where the mechanism actually applies; most TTP misuse is a timing error.
- **Do / Don't** — the boundary between the pattern and its evil twin (e.g. [Limited Offer](../ttps/limited-offer.md) vs. fake urgency).
- **Founder Tip** — the compressed judgement call a busy builder needs.
- **Make It Yours** — prompts that adapt the pattern to your product instead of copying a competitor's implementation.
- **Further reading** — durable primary sources.
- **Agent skill** — how ProductFeeling's agent commands load and apply the TTP, including the feeling north star it serves and its anti-goals.

Strategies then do the combining. Each strategy page lists **carrying TTPs** (the moves that do the strategic work), **supporting TTPs** (amplifiers), **Insights & Metrics** (how to measure the feeling, with formulas), and **Behind the Data** (diagnostic questions). The same TTP appears under several strategies because patterns are reusable; the strategy supplies intent and sequence.

## For engineers and agents

- Read a TTP card the way you read an API contract: **When to use it** is the precondition, **Do/Don't** is the spec, **Anti-goals** are the invariants that must never be violated. A pattern applied outside its preconditions is a bug even when the code is clean.
- TTPs decompose review work into checkable units. "Does this PR feel right?" is unanswerable; "does this empty state teach the next step?" ([Empty States](../ttps/empty-states.md)) and "does this wait explain itself?" ([Loading Feedback](../ttps/loading-feedback.md)) are yes/no questions an agent can answer from the diff.
- Strategies are dependency graphs, not menus: a strategy page tells you which TTPs carry the goal and which merely support it, so you implement carriers first. Building the supporting TTPs without the carriers is scaffolding with no building.
- The **Insights & Metrics** blocks are instrumentation specs—each metric names its formula and its failure modes. Wire the events before shipping the pattern, or you will never know whether the feeling landed.
- One card per concern: when a change touches several TTPs (a paywall touches [The Paywall](../ttps/the-paywall.md), [Limited Offer](../ttps/limited-offer.md), and [JTBD Copywriting](../ttps/jtbd-copywriting.md)), review against each card separately rather than blending them into vibes.

## Where it shows up

- The full alphabetical catalogue lives in [Tools, Techniques, and Practices](../ttps/index.md).
- The twelve compositions live in [Product Strategies](../strategies/index.md).
- The [Feeling North Star](01-feeling-north-star.md) concept explains the line every TTP card's agent section must declare.

## Further reading

- [The Behavior Change Wheel (Michie et al.)](https://doi.org/10.1186/1748-5908-6-42) — A rigorous precedent for taxonomising behaviour-change techniques rather than trading anecdotes.
- [Deceptive Patterns (Harry Brignull)](https://www.deceptive.design/) — The negative catalogue: named patterns of manipulation, and why naming a pattern is the first step to policing it.
- [Growth Design Case Studies](https://growth.design/case-studies) — Pattern-level teardowns of real products, in a spirit close to TTP analysis.
