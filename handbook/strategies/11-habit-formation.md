# Habit Formation


Help users form reliable return rituals around value they already recognise—without designing for compulsion.

**Prerequisite:** [Customer Discovery](../discovery/index.md) (especially [How Customers Work Today](../discovery/03-how-customers-work-today.md) for cadence). Science and compulsion boundary: [Habit Formation (concept)](../concepts/10-habit-formation.md). Also [User Agency](../concepts/12-user-agency.md), [Investment and Continuity](../concepts/13-investment-and-continuity.md). Related strategy: [Retention](03-retention.md).

- [Commitment](../ttps/commitment.md): Let users declare their intent, then design the product around it.
- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control.
- [System Widget](../ttps/system-widget.md): Put one timely, glanceable piece of user-chosen value where people already look.
- [Variable Reward](../ttps/variable-reward.md): Add optional novelty around reliable value, without making users chase uncertainty.
- [Value Replay](../ttps/value-replay.md): Bring a user’s meaningful progress back into view, only where and when they have chosen to receive it.
- [Investment](../ttps/investment.md): Help users build something that becomes more useful because they shaped it.
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change.

## Supporting Tools, Techniques, and Practices (TTPs)

- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next.
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete.
- [Effort Moat](../ttps/effort-moat.md): Honour what people have built, so their progress remains useful and recognisable.
- [Deep-link](../ttps/deep-link.md): Drop users into the exact moment, feature, or context that matters.

## Insights & Metrics

Measure whether the same useful action becomes easier and more automatic in a stable context—not whether you can extract more opens.

1. Stickiness Ratio (Daily Active Users / Weekly Active Users)
   - Formula: Daily Active Users (DAU) ÷ Weekly Active Users (WAU)
   - What it measures: How concentrated weekly use is across days
   - Why it matters: A rising ratio (for a product meant to be frequent) signals a ritual forming; raw Weekly Active Users can hide one-and-done spikes
2. Session Frequency
   - Formula: Average sessions per active user per week
   - What it measures: How often people return
   - Why it matters: Return cadence is the behavioural spine of habit—interpret it against the product’s natural rhythm (daily tool vs weekly workflow)
3. Core Habit Action Rate
   - Formula: (Sessions—or days—that include the defined habit action ÷ Active sessions or days) × 100
   - What it measures: Whether return visits complete the intended ritual, not only an open
   - Why it matters: Habit is the repeated action in context; empty launches inflate engagement without strengthening the loop
4. Streak Continuity (optional programmes only)
   - Formula: (Users who complete a stated streak window ÷ Users who opted into streaks) × 100
   - What it measures: Voluntary consistency among people who chose a streak mechanic
   - Why it matters: Useful as a design signal—not proof of wellbeing; pair with satisfaction and recovery after a miss, and never punish a broken streak with lost value
5. Return After a Break
   - Formula: (Users who return within N days after a gap of M inactive days ÷ Users with that gap) × 100
   - What it measures: Whether the ritual survives interruption
   - Why it matters: Durable habits tolerate misses; shame walls and “reset to zero” framing often weaken attachment rather than strengthen it

## Behind the Data

Find the cue, the friction, and whether reinforcement feels helpful or coercive.

### Cue and context

- Which cues (time of day, prior action, System Widget, Deep-link, notification) most often precede the core habit action?
- Do returning users pursue the same job-to-be-done, or only respond when prompted?
- How does session frequency and core-action rate change across the first 30 days for new cohorts?

### Reinforcement without coercion

- Do streaks, badges, or Variable Reward correlate with satisfaction and goal progress—or only with anxious checking?
- Can someone miss a day and re-enter without shame, lost progress, or a nag that feels punitive?
- Which Commitment and Investment moments predict lasting return without locking people into sunk-cost traps?

### Prompt quality

- Which reminders lift completion without raising mute, disable, or uninstall rates?
- Does Value Replay arrive only on channels and cadences users chose?
- Where do Gamified Progress and Success Moments mark real progress versus empty points?

## Further reading

- [Habit Formation (concept)](../concepts/10-habit-formation.md) — Working definition, research caveats, and engineer guidance; start here before the primary sources.
- [Atomic Habits summary (James Clear)](https://jamesclear.com/atomic-habits-summary) — Cue → craving → response → reward for ritual design—not for engineering compulsion.
- [Fogg, A Behavior Model for Persuasive Design (2009)](https://behaviordesign.stanford.edu/sites/default/files/2019-05/behavior-model-for-persuasive-design.pdf) — Original FBM paper for analysing why a target behaviour fails.

## Agent skill

- **Primary command / sequence:** `TODO` (e.g. `/productfeeling sequence habit-formation` — not final)
- **Core TTPs to load:** `TODO` (Commitment, Gamified Progress, System Widget, Variable Reward, Value Replay, Investment, Personalisation)
- **Supporting TTPs:** `TODO` (Success Moments, Micro Interactions, Effort Moat, Deep-link)
- **When the agent should use this strategy:** `TODO` ("daily ritual", "habit loop", "return cadence", "streak design", "notification fatigue")
- **Companion handoff:** `TODO` (Impeccable for ritual UI/motion; DocSlime if habit definition becomes PRODUCT.md requirements)
- **Feeling north star this strategy serves:** `TODO` (reliable progress, calm return, earned momentum)
- **Anti-goals:** `TODO` (addiction loops, streak shame, variable reward that makes users chase uncertainty, notification coercion, manufactured FOMO)
- **Reference stub path:** `skill/reference/TODO.md`
