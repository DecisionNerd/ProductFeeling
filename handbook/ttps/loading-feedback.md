# Loading Feedback


Make unavoidable waits legible, calm, and proportionate.

## What it is

Loading feedback is the honest narration of work that has started but not finished: a skeleton that holds the page's shape, a percentage that means what it says, or a line of plain-language status that names what the system is actually doing. It belongs to a small family of TTPs that all answer "did my action register?", but each covers a different moment. `Micro Interactions` confirm that a state has already changed—a toggle flipped, a like landed; loading feedback is for the stretch before that is true, when the outcome is still pending and the user needs to know the system is working rather than stuck. `Perceived Effort Delay` sits one layer further in, narrating the stages of a genuinely slow process; loading feedback is the simpler, more general case that applies to almost any wait, however brief.

A blank screen after a tap and a screen that says "Uploading 3 files, this usually takes a few seconds" describe the same underlying event two different ways—one leaves the user to guess, the other tells them what's true. The craft is matching the feedback to the wait: a two-hundred-millisecond fetch needs nothing more than a placeholder; a ninety-second export needs a status the user can actually read, trust, and act on.

## Why it works

An interface with no wait feedback is asking the user to trust that nothing is wrong purely on faith, at the exact moment the evidence for that is weakest—the screen looks exactly like it does when something has actually failed. `Friction` treats this as temporal friction, and its finding is specific: perceived duration is not the same as measured duration, and an explained wait reliably feels shorter than an unexplained one of the same length. Feedback doesn't make the operation faster; it changes what the waiting means to the person doing it, from suspicion to information.

Skip it, and the failure mode is predictable: people assume the tap didn't register, tap again, and either duplicate the action or quietly conclude the product is broken—the same test `Calibrated Trust` applies to any UI claim that isn't backed by real system state, just run in reverse, where the *absence* of a claim reads as a false one. Overdo it, and you tip into the pattern this card explicitly refuses: manufacturing suspense, padding a fast response to look more considered, or leaving a spinner running past the point it should have told the user something failed. Both directions spend the same currency—trust in what the interface tells you—by either saying too little or asking for too much credit.

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

- **Primary command:** `/productfeeling states` — make waits legible with honest status, structure, and recovery paths
- **Related commands:** `/productfeeling trust`, `/productfeeling friction`, `/productfeeling delight`
- **When the agent should load this TTP:** "loading state", "skeleton screen", "upload progress", "spinner", "waiting feedback"
- **Companion handoff:** Impeccable — skeletons, progress indicators, cancel/retry UI, and reduced-motion variants; none — unless wait thresholds become SLA requirements
- **Feeling north star this TTP serves:** dependable waits, protected context, calm control
- **Anti-goals:** artificial delays, endless spinners on failure, brand filler instead of status, unreliable time remaining
- **Reference path:** `skill/reference/states.md`
