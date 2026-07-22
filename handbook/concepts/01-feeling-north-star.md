# Feeling North Star

The one emotion a product surface should reliably produce—named explicitly, before any pattern, copy, or metric is chosen.

## Definition

A feeling north star is a short, specific answer to the question: *when someone uses this surface, what should they feel?* Not a brand adjective ("delightful") but an emotion tied to the user's situation: *safe enough to paste in real data*, *confident the export worked*, *proud of what they built this week*. It is the design requirement that everything else on the surface either serves or betrays.

## Why it matters

Without a named feeling, teams optimise whatever is measurable—clicks, conversion, session length—and the emotional outcome becomes an accident. Two products can have identical funnels where one feels like momentum and the other feels like being processed. The north star is what lets you tell the difference, choose between competing patterns, and reject a tactic that moves the metric while souring the feeling.

Naming the feeling first also changes *which* Tools, Techniques, and Practices (TTPs) apply. A checkout whose north star is *certainty* wants [Fail Safe](../ttps/fail-safe.md) and plain copy; a first-run whose north star is *curiosity* wants [Spark Curiosity](../ttps/spark-curiosity.md) and a [Sandbox Experience](../ttps/sandbox-experience.md). Same funnel stage, different feeling, different toolbox.

## Deep dive

A useful north star has three properties:

1. **It is situational, not decorative.** "Calm" means something different during a payment failure than during a celebration. The north star describes the feeling *in that moment of that job*, which is why every TTP card in this handbook carries a "Feeling north star this TTP serves" line rather than a global mood board.
2. **It is falsifiable through behaviour and memory.** Feelings leave evidence: hesitation before a scary button, "did it work?" support tickets, whether users describe the product warmly a week later. If you cannot imagine evidence that the feeling failed, the north star is too vague to design against.
3. **It survives the metric.** A north star constrains optimisation. If "activated" is up but users feel cornered, the north star is failing and the metric is lying. This is the handbook's recurring test: measure whether the user is *better off*, not merely whether they complied.

In practice the north star lives in `FEELING.md`—the project-level emotion context that ProductFeeling's agent commands load before reviewing a surface. Writing it down is the point: an unnamed feeling cannot be reviewed, handed to an agent, or defended in a trade-off.

## For engineers and agents

- Treat the north star like a non-functional requirement: it constrains implementation the way a latency budget does. "Certainty at checkout" rules out optimistic UI that shows success before the charge settles; "calm during setup" rules out five permission prompts in the first minute.
- Write it down where tooling can find it. `FEELING.md` is the machine-readable home: per-surface feeling targets that a coding agent loads before reviewing or generating UI, the same way it loads lint config before formatting.
- Review error paths against the north star, not just happy paths. The branch where the request fails is where the intended feeling is usually lost, and it is the branch least likely to have been designed.
- Instrument for evidence of the feeling, not just the funnel: retries, back-navigation, rage clicks, abandoned drafts, time-to-first-action after page load, and "did it work?" support tickets are all feeling telemetry that already exists in your logs.
- When two implementations are functionally equivalent, the north star is the tiebreaker. That is its whole job: turning "matter of taste" into a decidable question.

## Where it shows up

- Every TTP's **Agent skill** section names the feeling north star that TTP serves; start from [Tools, Techniques, and Practices](02-tools-techniques-practices.md).
- Strategies: [Onboarding](../strategies/01-onboarding.md), [Activation](../strategies/02-activation.md), [Trust Building](../strategies/09-trust-building.md), [Experience Refinement](../strategies/08-experience-refinement.md), [Intent Shaping](../strategies/10-intent-shaping.md), [Monetisation](../strategies/06-monetisation.md)
- Discovery: [Ideal Customer and User Profiles](../discovery/01-ideal-customer-and-users.md), [Need States and Awareness](../discovery/02-need-states.md) — the feeling has an owner and a situation
- Concepts: [Peak–End Rule](07-peak-end-rule.md) (which moments), [Emotional Design](06-emotional-design.md) (which level), [Jobs-to-be-Done](09-jobs-to-be-done.md) (outcome clause), [User Agency](12-user-agency.md) (feeling must survive endorsement)

## Further reading

- [Emotion & Design: Attractive things work better (Don Norman)](https://jnd.org/emotion-design-attractive-things-work-better/) — Affect as a functional input to how people think and act, not decoration.
- [The Peak–End Rule (Nielsen Norman Group)](https://www.nngroup.com/articles/peak-end-rule/) — Why some moments matter far more than others when choosing where to aim a feeling.
- [Designing for Emotion (Aarron Walter)](https://abookapart.com/products/designing-for-emotion) — A practitioner's case for emotion as a designed outcome with a hierarchy of needs.
