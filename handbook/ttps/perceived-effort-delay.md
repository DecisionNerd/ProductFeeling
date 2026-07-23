# Perceived Effort Delay


When work takes time, show the real work; when it does not, respect the user’s time.

## What it is

Perceived effort delay is the careful presentation of a genuine processing period: showing relevant stages, preserving context, and avoiding a distracting flash when an asynchronous state resolves almost instantly. It must never add artificial waiting or pretend that analysis, personalisation, or care occurred when it did not.

## Why it works

A result feels more credible when people can understand its inputs, limits, and process. Honest status helps users judge whether to wait or review the result. The trust comes from transparency and useful output—not from making a fast system look slow.

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
