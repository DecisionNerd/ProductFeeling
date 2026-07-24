# Success Moments


Mark meaningful progress with feedback that feels earned, then let users decide what comes next.

## What it is

A Success Moment is a deliberately marked acknowledgement, reserved for the point where a user has genuinely completed something—a task with real stakes, a milestone that took sustained effort, or a recovery from a difficult flow. It differs from Micro Interactions, which confirm ordinary actions continuously and quietly ("saved", "sent", "copied") so the system never leaves the user guessing; a Success Moment is punctuated and occasional, and using it on every tap flattens exactly the contrast that makes it register as meaningful. It's also distinct from the visible meter in Gamified Progress: if progress is the ongoing map of a journey, a Success Moment is the flag planted at a real waypoint on that map, not the map itself.

Picture someone submitting their first invoice through a finance tool, or finishing a language course's hardest unit after several failed attempts: a brief, warm confirmation that names what they actually did ("You've sent your first invoice—nice work") lands very differently from a generic checkmark, because it recognises the specific effort rather than the mere fact that a button was pressed.

## Why it works

The Peak–End Rule shows that people judge an entire experience by its most intense moments and its ending, largely ignoring how long anything took to get there—which means a handful of well-placed Success Moments can shape how an entire relationship with a product is remembered, out of proportion to the seconds they occupy. In Emotional Design's terms, the moment operates on two levels at once: behaviourally, it confirms that effort had an effect; reflectively, it becomes part of the story the user tells themselves, and others, about being capable, and about the product for recognising it.

The failure mode this TTP guards against is a milestone passing unmarked—real progress dissolving into the general blur of software use because nothing paused to notice it, wasting a nearly free chance to plant a positive peak. The opposite failure is just as damaging: celebrating trivial taps or incomplete work cheapens the signal until users stop trusting it, and a Success Moment that exists to justify an unrelated ask—a referral prompt, a permission request—stops feeling earned and starts feeling exploited.

## When to use it

- After a completed task with visible user effort or consequence
- At meaningful onboarding checkpoints, once value has been experienced
- After recovery from a difficult or error-prone flow

## Do

- Confirm the completed outcome before celebrating it
- Acknowledge effort, learning, or progress in concrete terms
- Offer a calm, relevant next step or let users continue uninterrupted

## Don't

- Celebrate trivial taps, incomplete work, or metrics users do not value
- Block the user with lengthy animation, sound, or forced sharing
- Treat a positive moment as leverage for referrals, permissions, or upgrades

## Founder Tip

Celebrate the outcome the user came for—not the action your dashboard wants them to take next.

## Make It Yours

1. Which completed actions genuinely create relief, pride, or momentum?
2. What proof of progress can the product show in that moment?
3. What tone matches the effort: quiet recognition, encouragement, or celebration?
4. Would the user rather keep moving, pause, or choose a next step?
5. Are moments of success distributed fairly across different paths to value?


## Related concepts

- [Peak–End Rule](../concepts/07-peak-end-rule.md)
- [Emotional Design](../concepts/06-emotional-design.md)
- [Habit Formation](../concepts/10-habit-formation.md)

## Further reading

- [The Peak–End Rule: How Impressions Become Memories](https://www.nngroup.com/articles/peak-end-rule/) — Applies remembered peaks and endings to product journeys.
- [Microinteractions in User Experience](https://www.nngroup.com/articles/microinteractions/) — Connects feedback to system visibility and user understanding.
- [Wellbeing Supportive Design](https://selfdeterminationtheory.org/wp-content/uploads/2022/08/2022_Peters_WellbeingSupportiveDesign.pdf) — Research-based guidance on competence- and autonomy-supportive feedback.

## Agent skill

- **Primary command:** `/productfeeling peaks-ends` — mark earned progress with feedback that shapes remembered journey peaks
- **Related commands:** `/productfeeling delight`, `/productfeeling tone`, `/productfeeling map`
- **When the agent should load this TTP:** "completion celebration", "milestone feedback", "onboarding checkpoint", "success state", "progress acknowledgement"
- **Companion handoff:** Impeccable — confirmation UI, restrained animation, and next-step affordances
- **Feeling north star this TTP serves:** earned recognition of meaningful progress
- **Anti-goals:** celebrating trivial taps, blocking animation, leveraging wins for referrals or upgrades
- **Reference path:** `skill/reference/peaks-ends.md`
