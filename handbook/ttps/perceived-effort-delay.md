# Perceived Effort Delay


When work takes time, show the real work; when it does not, respect the user’s time.

## What it is

Perceived effort delay is what you show while something genuinely slow is happening, provided the slowness is real: a sequence of named stages—"scanning document," "cross-referencing prior claims," "preparing summary"—that map onto actual work the system is doing, shown roughly in the order it happens. It's easy to mistake for `Loading Feedback`, and the two do overlap, but the wait-triad distinction matters: loading feedback covers the honest fact that work is pending, however simple; perceived effort delay is specifically for work substantial enough to have distinguishable stages, and its entire job is to narrate those stages truthfully rather than invent them. The moment a stage is shown that isn't actually happening, this stops being perceived effort delay and becomes something this handbook refuses outright: theatre.

An AI feature that takes four seconds to produce a recommendation and shows "reading your data → comparing options → checking for conflicts" is using this pattern correctly, provided those are real steps executed in that order. The same four-second wait dressed up with an invented "thinking" animation, designed purely to make an instant lookup feel like deep analysis, is the exact failure this card exists to prevent—and it's worth naming precisely because it's one of the most common shortcuts teams reach for when a fast, accurate result still feels "too quick to be trusted."

## Why it works

`Calibrated Trust` treats every UI claim as testimony the user is quietly cross-examining, and a staged process description is exactly that kind of claim. Showing the real steps—what was checked, what was weighed, what limits apply—gives the user something to actually evaluate the result against, instead of asking them to take "this is good" on faith. That's the mechanism: transparency about process doesn't just feel more trustworthy, it gives people real information to decide whether to accept, edit, or reject what they're looking at.

Skip this and results feel arbitrary even when they're good, because there's nothing for the user to check their own judgement against. Fabricate it, and you're doing something worse than skipping it: manufacturing the appearance of care that wasn't taken, which is the confident lie `Calibrated Trust` warns costs more than it earns—trust breaks the moment a user works out that the "analysing" animation ran for a fixed three seconds regardless of what they submitted. The failure compounds for consequential outputs—health, money, safety—where theatre doesn't just risk annoyance, it borrows an authority the system hasn't actually demonstrated.

## When to use it

- When an analysis, generation, upload, or calculation genuinely takes time
- When a brief minimum display prevents a loading state from flashing distractingly
- When a result needs a concise explanation of inputs, confidence, limitations, or next steps
- Alongside `Loading Feedback` for work that continues beyond the current screen

## Do

- State real stages only when those stages are actually occurring
- Show useful provenance or limitations for recommendations, scores, and generated results
- Keep any minimum display brief and purely for visual stability
- Give users a clear route to inspect, edit, retry, or reject the result

## Don't

- Insert a pause to imply human review, intelligence, personalisation, or care
- Use “thinking” or “analysing” copy when no such work is happening
- Make health, finance, safety, or other consequential outputs feel authoritative through theatre
- Hold results hostage to brand animation or manufactured suspense

## Founder Tip

If a result needs to feel more considered, improve the explanation and the result—not the waiting time.

## Make It Yours

1. Which processing stages can you describe truthfully and usefully?
2. What information would help a user assess a recommendation without overclaiming certainty?
3. Is any pause serving visual stability, or is it trying to manufacture value?
4. Can the user inspect inputs, correct mistakes, or choose not to use the outcome?
5. Would this flow still feel trustworthy if the result arrived immediately?


## Related concepts

- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- [Friction](../concepts/04-friction.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [Nielsen Norman Group: Progress Indicators](https://www.nngroup.com/articles/progress-indicators/) — communicate genuine work and waiting states clearly.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — trustworthy AI requires validity, transparency, and accountability.
- [Google PAIR: Explainability + Trust](https://pair.withgoogle.com/explorables/trust-in-ai/) — practical considerations for making AI-supported outputs understandable.
- [Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) — why responsiveness remains a usability obligation.

## Agent skill

- **Primary command:** `/productfeeling friction` — review waiting states so real work is shown honestly, never theatrically extended
- **Related commands:** `/productfeeling trust`, `/productfeeling states`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "loading theatre", "thinking animation", "processing delay", "AI wait state", "minimum display time"
- **Companion handoff:** Impeccable — loading states, progress stages, and result provenance UI
- **Feeling north star this TTP serves:** credible transparency about process and limits
- **Anti-goals:** artificial pauses, fake analysis copy, authority theatre, hostage results to animation
- **Reference path:** `skill/reference/friction.md`
