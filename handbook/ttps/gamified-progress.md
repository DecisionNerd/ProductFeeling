# Gamified Progress


Make meaningful progress visible, achievable, and fully in the user’s control.

## What it is

Gamified Progress borrows the legible mechanics of games — progress bars, levels, missions, checklists, earned badges — and applies them to real work the user is already trying to do. Someone learning a language sees a skill tree fill in; someone setting up a workspace sees a setup checklist empty out. The mechanic is decoration on top of a task that would still be worth doing without it: the points are a mirror held up to real progress, not the reason the progress exists.

That distinction is what separates it from Variable Reward, its closest neighbour in this handbook. Variable Reward adds unpredictable novelty at the edge of an otherwise dependable experience — a fresh suggestion, a surprising discovery — precisely because unpredictability is the point. Gamified Progress is the opposite instinct: it wants the user to see, with complete honesty, exactly how much work is done and exactly how much remains. Swap deterministic milestones for a chance-based drip of rewards and you have quietly crossed from progress tracking into a slot machine wearing a progress bar's clothes.

## Why it works

People are more willing to start and finish a task when they can see it as a sequence of achievable steps rather than one large, undifferentiated effort — breaking a goal into visible milestones lowers the perceived size of what is left. That visibility also feeds a sense of competence: users can point to what they have already done, which is reassuring in exactly the moments — a long setup flow, a multi-week course — where people are most likely to quit from a vague feeling that they are getting nowhere.

The mechanism only holds if the autonomy stays intact. [Habit Formation](../concepts/10-habit-formation.md) is explicit that a single missed day barely dents a real habit curve, which is why streaks that zero out on one miss are fighting the science rather than using it — they convert a competence signal into a guilt signal. The failure mode this TTP exists to prevent is a progress display that quietly becomes a leash: once badges are awarded for empty activity, or a broken streak reads as failure, the feeling shifts from "I am making progress" to "I am being tracked," and the very visibility that motivated people starts to make them feel watched instead.

## When to use it

- In multi-step onboarding, learning, practice, or goal-setting journeys
- When users benefit from breaking a meaningful outcome into manageable steps
- To make gradual improvement, completed work, or skill development easier to recognise
- Where an optional challenge can add clarity or encouragement without becoming a requirement

## Do

- Define progress in terms of a user outcome, not a vanity engagement metric
- Show completed work, the next achievable step, and an honest indication of what remains
- Celebrate real milestones with brief Success Moments that do not interrupt momentum
- Let users choose pace, challenge level, reminders, and whether to participate in social features
- Use Habit Formation to support beneficial routines, with easy pause and notification controls

## Don't

- Describe engagement as addiction or use random rewards to keep people checking
- Penalise breaks, reset progress punitively, or make streak loss feel like failure
- Use leaderboards where comparison can shame, exclude, or distort the real goal
- Award points and badges for empty activity that does not benefit the user
- Hide the trade-off between a business metric and the user’s stated outcome

## Founder Tip

If removing the points, badges, and animations leaves no user value, the mechanic is decoration — or pressure — rather than progress.

## Make It Yours

1. **Define a worthwhile finish line**
   - What outcome would a user be genuinely pleased to complete or improve?
   - Which smaller steps show real advancement towards it?

2. **Make progress truthful**
   - Does the progress indicator reflect work completed, skill gained, or a meaningful decision?
   - Can users understand what is left without feeling artificially rushed?

3. **Preserve autonomy**
   - Can people set their own pace, skip challenges, pause reminders, or opt out of social comparison?
   - What happens to the experience when someone takes a break?

4. **Recognise effort appropriately**
   - Which milestones deserve a Success Moment because they reflect genuine work or growth?
   - Are rewards informational and encouraging, rather than conditional or controlling?

5. **Test for wellbeing, not just return**
   - Do users report greater confidence and progress towards their goal?
   - Do streaks, reminders, or comparisons create guilt, compulsive checking, or support complaints?


## Related concepts

- [Habit Formation](../concepts/10-habit-formation.md)
- [User Agency](../concepts/12-user-agency.md)
- [Emotional Design](../concepts/06-emotional-design.md)

## Further reading

- [Self-Determination Theory: A Quarter Century of Human Motivation Research](https://www.apa.org/research-practice/conduct-research/self-determination-theory) — introduces autonomy, competence, and relatedness as foundations for motivation.
- [How Gamification Motivates: An Experimental Study of Specific Game Design Elements](https://d-nb.info/1309619042/34) — examines how distinct mechanics affect psychological need satisfaction.
- [Fogg Behavior Model](https://www.behaviormodel.org/) — a practical model for checking motivation, ability, and prompts.
- [Gamification in Digital Mental Health Interventions: The Engagement–Efficacy–Ethics Trilemma](https://www.mdpi.com/2078-2489/17/2/168) — useful ethical cautions about autonomy, surveillance, and compulsive design.

## Agent skill

- **Primary command:** `/productfeeling delight` — make truthful progress visible without turning the product into pressure mechanics
- **Related commands:** `/productfeeling intensity`, `/productfeeling anti-patterns`, `/productfeeling peaks-ends`, `/productfeeling friction`
- **When the agent should load this TTP:** "progress bar", "milestones", "levels", "onboarding steps", "goal journey"
- **Companion handoff:** Impeccable — progress UI, milestone feedback, and opt-out controls; RedTeam — when streaks, rewards, or social comparison may coerce rather than support
- **Feeling north star this TTP serves:** competence, autonomy, and honest momentum
- **Anti-goals:** addiction framing, random rewards, punitive streak loss, shameful leaderboards, empty badge farming
- **Reference path:** `skill/reference/delight.md`
