# Loading Feedback


Make unavoidable waits legible, calm, and proportionate.

## What it is

Loading feedback shows that work is underway, what is happening, and—where possible—what the user can do next. It can be a skeleton state, determinate progress, concise status copy, or a task-relevant `Micro Interactions` cue.

## Why it works

A blank or frozen surface leaves people unsure whether their action registered. Clear feedback reduces that uncertainty, helps users decide whether to wait, and makes the product feel dependable. It does not make a slow operation fast; it makes the wait honest and easier to navigate.

## When to use it

- While content, search results, uploads, or generated work are genuinely pending
- When a transition would otherwise look frozen or incomplete
- When progress can be reported accurately, including failures or stalled work
- When a brief skeleton can preserve the page’s structure without pretending content has arrived

## Do

- Name the work in plain language: “Uploading 3 files” is better than “Loading”
- Use determinate progress only when the value reflects real progress
- Preserve context, offer cancellation or backgrounding where practical, and explain recovery when work fails
- Respect reduced-motion preferences; keep motion supportive rather than compulsory

## Don't

- Add artificial waits to create suspense or make a result feel more valuable
- Use endless spinners when the task has failed, stalled, or needs user action
- Replace useful status with brand copy, jokes, or animation
- Promise a time remaining unless it is reliable

## Founder Tip

Treat loading as a service moment: tell people what is happening, protect their work, and let them stay in control.

## Make It Yours

1. Which waits currently leave users wondering whether their action worked?
2. What is the most useful truthful status for each of those moments?
3. Can users safely continue, cancel, retry, or leave while work continues?
4. Which loading states need a failure or offline path rather than another spinner?
5. Does the feedback remain clear with motion reduced and on a slow connection?


## Related concepts

- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- [Friction](../concepts/04-friction.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) — Nielsen Norman Group’s enduring guidance on perceived responsiveness.
- [Progress Indicators Make a Slow System Less Insufferable](https://www.nngroup.com/articles/progress-indicators/) — how progress feedback affects waiting and trust.
- [WAI-ARIA: `progressbar` role](https://www.w3.org/WAI/ARIA/apg/patterns/meter/) — accessible patterns for communicating progress.
- [MDN: `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — support motion-sensitive users.

## Agent skill

- **Primary command:** `TODO`
- **Related commands:** `TODO`
- **When the agent should load this TTP:** `TODO`
- **Companion handoff:** `TODO`
- **Feeling north star this TTP serves:** `TODO`
- **Anti-goals:** `TODO`
- **Reference stub path:** `skill/reference/TODO.md`
