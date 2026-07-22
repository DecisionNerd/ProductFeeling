# Micro Interactions


Small responses that make an action feel acknowledged, understandable, and complete.

## What it is

Micro interactions are brief visual, motion, sound, or haptic responses to a user action: a saved state, a pressed control, a drag target, or an error correction. They clarify cause and effect; they are not decoration for its own sake.

## Why it works

People need to know that the interface received their input and what changed as a result. Timely feedback reduces repeat taps and uncertainty, while a consistent response can make a product feel considered and trustworthy. Use `Loading Feedback` when the work is still pending; use a micro interaction when a state has actually changed.

## When to use it

- After a tap, click, drag, drop, save, or destructive action
- When a control changes state, such as mute, follow, or favourite
- To guide a correction after an error
- At meaningful success moments where feedback should be noticed but not interrupt flow

## Do

- Make the response match the action and resulting state
- Keep duration and motion restrained enough that repeated use stays comfortable
- Use haptics only for meaningful moments, with an accessible way to reduce or disable them
- Test whether the feedback prevents confusion, double actions, or missed state changes

## Don't

- Animate every surface or delay an action to showcase motion
- Rely on colour, motion, or sound alone to communicate a result
- Use haptics, shake effects, or celebration to pressure people into continuing
- Make a visual flourish imply success before the underlying action succeeds

## Founder Tip

Start with the moments users tap twice or hesitate; the best micro interaction often looks like a clear answer, not a spectacle.

## Make It Yours

1. Which actions most need instant confirmation?
2. What exact state change should a user be able to perceive?
3. Could text, shape, or position carry the same meaning if motion is reduced?
4. Which repeated interactions would become tiring with this treatment?
5. How will you know the cue reduced confusion rather than merely adding polish?


## Related concepts

- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- [Mental Models and Affordances](../concepts/05-mental-models.md)
- [Emotional Design](../concepts/06-emotional-design.md)

## Further reading

- [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) — especially visibility of system status and error recovery.
- [Material Design: Motion](https://m3.material.io/styles/motion/overview) — a durable system for purposeful UI motion.
- [Apple Human Interface Guidelines: Haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) — use haptic feedback with restraint and meaning.
- [W3C: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) — accessibility requirements for motion triggered by interaction.

## Agent skill

- **Primary command:** `TODO`
- **Related commands:** `TODO`
- **When the agent should load this TTP:** `TODO`
- **Companion handoff:** `TODO`
- **Feeling north star this TTP serves:** `TODO`
- **Anti-goals:** `TODO`
- **Reference stub path:** `skill/reference/TODO.md`
