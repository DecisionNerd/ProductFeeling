# Commitment


Let users declare their intent, then design the product around it.

## What it is

Commitment is a voluntary micro-pledge: a goal, pace, schedule, or outcome that the user states in their own words, which the product then uses as structure—reminders, defaults, progress views, and feedback that all point back to what they said they wanted. The product isn't deciding the goal; it's building around a goal the user already chose, which is why the pledge has to be genuinely elective and genuinely revisable, not a checkbox dressed up as a preference.

It is easy to confuse with Intentional Friction, because both slow a user down before value flows—but the two aim at opposite outcomes. Intentional Friction interrupts to protect against a mistake the user hasn't made yet; Commitment interrupts, briefly, to let the user articulate an intention they already have, so the product has something concrete to act on later. A language app asking "how many minutes a day, realistically?" before the first lesson is Commitment; a screen forcing someone to retype "DELETE" before removing an account is Intentional Friction. Both add a step. Only one is asking a question the user wants answered.

## Why it works

The mechanism is Cialdini's commitment-and-consistency principle: people tend to act in line with stands they've taken, especially when the stand was made freely. A stated goal also does something more mundane and just as important—it resolves ambiguity. "What am I actually trying to do here?" is a question every open-ended product forces the user to answer implicitly, over and over; a pledge answers it once, out loud, and gives the product a fixed point to build reminders, defaults, and progress views around instead of guessing.

Skip it and personalisation has nothing to personalise toward, so nudges default to generic engagement bait instead of the user's own stated intent—the failure mode [Habit Formation](../concepts/10-habit-formation.md) calls a product-owned cue instead of a user-owned one. Overdo it and commitment curdles into its dark twin: a pledge that can't be edited, a streak that punishes a missed day, a goal the product guilts the user for changing. The moment a pledge feels irreversible or surveilled, it stops working as commitment and starts working as a trap, which is the exact line [User Agency](../concepts/12-user-agency.md) asks every TTP to hold.

## When to use it

- When value depends on habit, frequency, or a clear outcome (learning, health, saving, tracking)
- Early in a demanding flow, after the user has tasted value enough to know what to aim for
- When personalisation or Intent Mirroring needs a durable “stated intent” to build on
- Before heavy nudges: commit first, then remind—never the reverse as coercion

## Do

- Let users choose the goal, metric, pace, or end state in their own words or clear options
- Reflect the pledge in the UI (dashboard, checklist, next action) so intent stays visible
- Tie nudges, reminders, and Success Moments back to what they committed to
- Make edit, pause, and restart obvious; treat broken streaks as recovery, not failure theatre
- Match commitment cost to trust: start low-stakes; escalate only when value is proven

## Don't

- Force arbitrary goals or default them into a pledge they did not affirm
- Make commitment feel irreversible, punitive, or like a contract they cannot exit
- Shame users for slips with guilt copy, disappearing progress, or social exposure they did not opt into
- Ask for a heavy pledge (public, paid, identity-level) before the product has earned trust
- Confuse Commitment with Intentional Friction: slowdown to clarify is fine; slowdown to trap is not

## Founder Tip

When users say what they want, help them become it—and let them rewrite the script when life intervenes. Memory of intent builds loyalty; memory used as a cudgel destroys it.

## Make It Yours

1. To design the right pledge:
   - What habit, outcome, or frequency is the product actually for?
   - Would a lightweight goal or schedule feel like progress, or like homework?
   - What is the smallest voluntary yes that still gives you a useful signal?
2. To create space for intent:
   - Where can you ask “What do you want out of this?” without blocking first value?
   - Can users pick their own pace, metric, or end goal?
   - How might the pledge feel personal and empowering rather than corporate?
3. To build follow-through loops:
   - Do nudges and tips refer back to what they said they wanted?
   - What check-ins create momentum instead of guilt?
   - How do you celebrate imperfect progress and re-entry after a slip?
4. To avoid coercion or shame:
   - Is commitment optional, or is the product unusable without it?
   - Is there a clear way to update, pause, or abandon a goal?
   - Would a user feel safe admitting they missed a week?
5. To test and evolve:
   - Do committed users retain or activate more—and is that causation or selection?
   - Where do people drop after pledging, and what did the UI imply would happen next?
   - What behavioural signals say someone is ready to commit (vs being rushed)?


## Related concepts

- [Habit Formation](../concepts/10-habit-formation.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [User Agency](../concepts/12-user-agency.md)

## Further reading

- [The Principle of Commitment and Behavioral Consistency (Nielsen Norman Group)](https://www.nngroup.com/articles/commitment-consistency-ux/) — UX-centred summary of Cialdini’s principle with product examples and trust/stakes guidance.
- [Freedman & Fraser (1966), Compliance without pressure: The foot-in-the-door technique](https://psycnet.apa.org/doi/10.1037/h0023552) — Classic evidence that a small voluntary yes increases later compliance; use carefully and ethically.
- [Cialdini, *Influence: Science and Practice*](https://www.influenceatwork.com/) — Primary framing of commitment & consistency among the six principles of persuasion.
- [The gentle science of persuasion: Consistency (W. P. Carey / ASU)](https://news.wpcarey.asu.edu/20070117-gentle-science-persuasion-part-four-consistency) — Accessible overview of consistency and foot-in-the-door from Cialdini’s own institutional context.
- [Goal-setting theory (Locke & Latham) — overview](https://www.apa.org/pubs/books/4311505) — Why specific, accepted goals improve performance when feedback and commitment are present (complement to persuasion framing).

## Agent skill

- **Primary command:** `/productfeeling trust` — voluntary pledges only work when intent is reflected back without shame or trap mechanics
- **Related commands:** `/productfeeling jobs`, `/productfeeling feel`, `/productfeeling anti-patterns`, `/productfeeling persona`
- **When the agent should load this TTP:** "goal pledge", "habit commitment", "user declared intent", "streak recovery", "optional goal setting"
- **Companion handoff:** Impeccable — pledge UI, edit/pause controls, and slip recovery states; DocSlime — when stated intent becomes a durable product or policy requirement
- **Feeling north star this TTP serves:** agency, purposeful momentum, trusted follow-through
- **Anti-goals:** guilt loops, irreversible traps, forced pledges, shame for slips
- **Reference path:** `skill/reference/trust.md`
