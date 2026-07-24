# Retention


Earn return visits by making lasting value easy to resume—so people come back because the product still fits their life, not because they were nudged.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Retention is whether people who already found value keep coming back to get more of it. It sits downstream of [Activation](02-activation.md)—you cannot retain someone who never experienced the product working—and it is measured in cohorts and curves, not single snapshots: what share of a signup cohort is still active on day 1, 7, and 30, and does that curve flatten into a durable core or slide toward zero. A flattening curve means the product has found a group of people for whom it is genuinely useful; a curve that never flattens means either the wrong people are arriving, the value is one-time, or something about return visits is broken.

Retention is not the same job as engagement or habit formation, even though they share tools. [Engagement](04-engagement.md) is about how deeply someone uses the product *within* a session; [Habit Formation](11-habit-formation.md) is about whether return becomes automatic and context-cued. Retention sits between them: it asks whether the product still fits the person's life well enough that they choose to resume it, deliberately, when the need recurs.

## Why it works

People return to things that keep working for them—not to things that remind them the most often. The mechanism is resumption, not reminder: a returning user needs to find their progress, context, and prior work exactly as they left it, with the friction of re-entry as close to zero as the value allows. This is why [Effort Moat](../ttps/effort-moat.md), [Value Replay](../ttps/value-replay.md), and [Personalisation](../ttps/personalisation.md) do more for retention than most notification strategies: they honour what the person already invested, rather than asking them to reconstruct it.

Retention curves are also the cleanest way to detect a product-market mismatch, because a curve does not lie the way a survey can. If even highly activated users churn steadily, the issue is rarely a UI polish problem—it is more often that the product's natural usage interval was misjudged (forcing a daily frame on a weekly tool inflates apparent churn) or that the value simply does not recur for this segment. Treating retention as a design problem to be nudged, rather than a signal to be diagnosed, is how teams end up bolting streaks and notifications onto a product nobody actually needs again.

## Core Tools, Techniques, and Practices (TTPs)

- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control.
- [System Widget](../ttps/system-widget.md): Put one timely, glanceable piece of user-chosen value where people already look.
- [Value Replay](../ttps/value-replay.md): Bring a user’s meaningful progress back into view, only where and when they have chosen to receive it.
- [Effort Moat](../ttps/effort-moat.md): Honour what people have built, so their progress remains useful and recognisable.
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change.
- [Variable Reward](../ttps/variable-reward.md): Add optional novelty around reliable value, without making users chase uncertainty.
- [Commitment](../ttps/commitment.md): Let users declare their intent, then design the product around it.

## Supporting Tools, Techniques, and Practices (TTPs)

- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next.
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete.
- [Intent Mirroring](../ttps/intent-mirroring.md): Notice a meaningful signal, then offer a small, optional next step that fits the user’s likely goal.
- [Pattern Alignment](../ttps/pattern-alignment.md): Use familiar mental models where they help people act with confidence.
- [Deep-link](../ttps/deep-link.md): Drop users into the exact moment, feature, or context that matters.
- [Graceful Exit](../ttps/graceful-exit.md): Make leaving as respectful as joining, so the last impression earns the return visit.

## Insights & Metrics

Measure whether people return—and whether that return matches how often the product should naturally be used.

1. Day 1 / 7 / 30 cohort retention
   - Formula: (Users from a new-user cohort who return on day X / Cohort size) × 100  
     (Prefer a clear starting event and return event; use “on or after” when you care about cumulative return.)
   - What it measures: How well a cohort sticks after first use
   - Why it matters: Early retention is the base of sustainable growth; compare cohorts, not vanity totals
2. Stickiness ratio (Daily Active Users / Monthly Active Users)
   - Formula: Daily Active Users (DAU) / Monthly Active Users (MAU)
   - What it measures: How concentrated activity is within the month
   - Why it matters: Higher ratios suggest frequent return—but judge against your product’s natural cadence (daily tools ≠ weekly tools)
3. Churn rate (period)
   - Formula: (Users who became inactive in the period / Active users at period start) × 100
   - What it measures: Loss of previously active users
   - Why it matters: Retention’s mirror metric—shows when value, fit, or trust is eroding

## Behind the Data

Why people return, when they stop, and what still earns another visit.

### Retention curve analysis

- Does your curve flatten (a core of lasting users) or keep sliding toward zero?
- Which acquisition or behaviour cohorts keep the strongest retention after the early drop?
- Are you measuring return on the product’s real usage interval—or forcing a daily frame that misreads health?

### Feature usage and return value

- Which features predict long-term return versus one-session spikes?
- Does the order of feature adoption change retention strength?
- Where does resumed value feel hard to find—so people open the product and leave?

### Return prompts without fatigue

- What legitimate reasons bring occasional users back (progress, people, deadlines, outcomes)?
- How do notifications and Value Replay affect return without training people to mute you?
- When users churn, what did they lose that Effort Moat or Personalisation could have preserved?

## Further reading

- [Interpret your retention analysis (Amplitude Docs)](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-interpret) — How cohort retention methods and curves are defined in practice.
- [Usage interval in retention analysis (Amplitude Docs)](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-interpret-usage) — Match retention goals to how often users naturally return.
- [Fogg Behavior Model](https://www.behaviormodel.org/) — Motivation, ability, and prompt must converge for a return behaviour to happen.
- [Choose Customer Loyalty over Short-Term Profit (Nielsen Norman Group)](https://www.nngroup.com/articles/customer-loyalty-vs-short-term-profit/) — Why trust-preserving experience beats retention tricks that tax loyalty.
- [Loyalty on the Web (Nielsen Norman Group)](https://www.nngroup.com/articles/loyalty-on-the-web/) — Classic guidance on earning repeat visits without becoming an annoyance.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `map → peaks-ends → states → trust → review`
- **Core TTPs to load:** Gamified Progress, System Widget, Value Replay, Effort Moat, Personalisation, Variable Reward, Commitment
- **Supporting TTPs:** Success Moments, Micro Interactions, Intent Mirroring, Pattern Alignment, Deep-link, Graceful Exit
- **When the agent should use this strategy:** "users churn after week one", "D7 falling", "need return without spam", "resume value", "win-back flow"
- **Companion handoff:** Impeccable — return surfaces, widgets, progress UI, and re-entry states; DocSlime — when retention definitions, cohort metrics, or return policies belong in `docs/strategy/`; RedTeam — before streak mechanics, notification cadence changes, or variable-reward programmes ship (`/redteam premortem` on the proposed return loop)
- **Feeling north star this strategy serves:** trusted familiarity — progress still waiting for me
- **Anti-goals:** streak punishment, addictive variable-reward loops, unsolicited resurfacing, retention at the cost of agency
- **Reference path:** `skill/reference/sequence.md`
