# Micro Interactions


Small responses that make an action feel acknowledged, understandable, and complete.

## What it is

Micro interactions are the smallest unit of feedback in an interface: a heart that fills in when you tap it, a row that settles into place after a drag, a field that flashes and re-labels itself after a bad entry. Each one answers a single question—what just changed?—in under a second, using motion, sound, haptics, or a state change too small to need words. They sit downstream of `Loading Feedback`, not alongside it: loading feedback covers the stretch where an outcome is still pending, and a micro interaction is the punctuation mark that fires once the outcome is actually known. Confusing the two produces one of the most common failures in this space—playing a success animation before the save has actually succeeded, which turns a moment meant to reassure into a claim the interface later has to walk back.

The pattern is deliberately small in scope, even when the moment it marks is meaningful. A confirmation toast on a genuine success moment, a haptic buzz on a state change worth noticing, an inline shake to redirect attention to a form error—these clarify cause and effect at the scale of a single action, noticed without stopping the user's flow. The moment the response starts drawing attention to itself rather than to what changed, it has stopped being a micro interaction and started being decoration, which is exactly where restraint tends to break down.

## Why it works

Every micro interaction is a sentence in the story a user is silently writing about how your product works—their `Mental Models and Affordances`. That story gets built from feedback whether or not you supply any: silence doesn't read as neutral, it reads as absence, and the user fills the gap with a guess ("maybe it didn't take", "maybe I have to hold it longer"). A well-placed micro interaction answers before the guess forms, which is why the effect compounds—dozens of small correct answers, repeated across a session, add up to the reflexive sense that a product is considered and dependable, one of the clearest signals of the behavioural layer in `Emotional Design`.

Skip the feedback and the visible symptom is retries: a second tap on a button that already worked, a duplicate submission, a support message that says "I don't think this saved." Overdo it—celebration on every trivial action, haptics that fire whether or not anything actually changed, motion strong enough to notice on the fiftieth use as much as the first—and the signal drowns in its own noise, or starts to feel like the interface performing enthusiasm at the user rather than informing them. The line this card's Don't list draws around haptic or animation pressure is the same line `User Agency` draws everywhere else: feedback should inform a choice already made, never nudge the next one.

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

- **Primary command:** `/productfeeling delight` — brief feedback that confirms cause, effect, and completion without spectacle
- **Related commands:** `/productfeeling intensity`, `/productfeeling states`, `/productfeeling friction`
- **When the agent should load this TTP:** "button feedback", "saved state", "toggle response", "haptic cue", "action confirmation"
- **Companion handoff:** Impeccable — motion, haptics, and state-change UI craft; none — unless feedback patterns need a shared design-system spec
- **Feeling north star this TTP serves:** acknowledged actions, understandable state changes
- **Anti-goals:** motion for its own sake, success before the action completes, haptic pressure, colour-only communication
- **Reference path:** `skill/reference/delight.md`
