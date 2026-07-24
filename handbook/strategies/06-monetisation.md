# Monetisation


Turn free or trial use into paid use by making the upgrade feel fair, clear, and earned—after users have felt real product value.

**Prerequisite:** [Customer Discovery](../discovery/index.md) (especially [Talk, Search, and Buy](../discovery/04-how-customers-talk-search-buy.md)). Concepts: [User Agency](../concepts/12-user-agency.md), [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md), [Calibrated Trust](../concepts/11-calibrated-trust.md), [Investment and Continuity](../concepts/13-investment-and-continuity.md).

## What it is

Monetisation is the moment a person who has already felt real value decides that paying for more of it is a fair trade—not the moment a limit locks them out, and not a countdown timer designed to manufacture panic. The ordering matters more than almost anything else in this strategy: value has to be felt *before* the ask, or the paywall reads as a bait-and-switch regardless of how the pricing page is worded. A free tier that is generous enough to prove the product works, followed by a clear and specific upgrade moment tied to a limit the user actually understands, is the shape monetisation takes when it is working.

This strategy is distinct from [Conversion Optimisation](07-conversion-optimisation.md), which is about funnel completion in general; monetisation specifically concerns the transfer of money, which carries its own emotional weight—loss aversion, doubt about whether the product will keep being worth it, and, in business contexts, the need to justify the spend to someone else. Every tactic here has to survive that heightened scrutiny, which is why manufactured urgency and bait-and-switch limits do more damage to a monetisation strategy than almost any other UX mistake.

## Why it works

People pay for outcomes they already trust, not for outcomes they are promised. [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md) frames the paywall as a second hiring decision: the user already hired the free tier to make some progress, and the upgrade decision is whether the next increment of progress is worth the price—which means the paywall's job is to make that next increment legible, not to make staying free feel painful. [Calibrated Trust](../concepts/11-calibrated-trust.md) is the other half: a pricing page, cancellation flow, and refund policy that are honest about what the user is buying build the confidence that makes the transaction feel safe, while dark patterns around cancellation or hidden costs poison every future upgrade decision, not just the current one.

[Investment and Continuity](../concepts/13-investment-and-continuity.md) explains why some of the strongest, most durable upgrade motivations are not urgency at all—they are the accumulated value of what a person has already built inside the product, which the upgrade protects or extends. This is a fundamentally different (and more sustainable) lever than a limited-time discount, because it does not decay the moment the countdown ends.

## Core Tools, Techniques, and Practices (TTPs)

- [The Paywall](../ttps/the-paywall.md): Present a clear, fair upgrade decision when users understand the value on offer
- [Intentional Friction](../ttps/intentional-friction.md): Add a small, purposeful pause when moving quickly could create harm, regret, or an avoidable mistake
- [Limited Offer](../ttps/limited-offer.md): Present a genuine, time-bound offer when it creates a fair choice, not pressure
- [Perceived Effort Delay](../ttps/perceived-effort-delay.md): When work takes time, show the real work; when it does not, respect the user’s time
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Time to Value](../ttps/time-to-value.md): Help people reach their first meaningful outcome with the least unnecessary effort
- [Spark Curiosity](../ttps/spark-curiosity.md): Offer a truthful glimpse of a useful outcome, then let users choose whether to explore it

## Supporting Tools, Techniques, and Practices (TTPs)

- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control
- [Effort Moat](../ttps/effort-moat.md): Honour what people have built, so their progress remains useful and recognisable
- [Investment](../ttps/investment.md): Help users build something that becomes more useful because they shaped it
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change
- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Write from the progress the user is trying to make, not the feature your product wants to describe
- [Graceful Exit](../ttps/graceful-exit.md): Make leaving—cancelling, pausing, exporting, deleting—as respectful as joining, so the last impression earns the return visit

## Insights & Metrics

Measure whether people who experienced value choose to pay—and stay—without treating rough SaaS shortcuts as gospel.

1. Free-to-Paid Conversion Rate (cohort)
   - Formula: (Users in a signup cohort who become paying customers within a defined window ÷ Free or trial users in that cohort) × 100
   - What it measures: How often a defined free/trial cohort upgrades in time
   - Why it matters: A stock “paid ÷ all free users” mix of old and new users hides whether the current path works
2. Paywall Conversion Rate
   - Formula: (Users who upgraded after seeing the paywall ÷ Users who saw the paywall) × 100
   - What it measures: Whether the paywall moment is clear, timely, and trusted
   - Why it matters: Low rates often mean wrong timing, unclear value, or distrust—not “not enough pressure”
3. Average Revenue Per User (ARPU)
   - Formula: Revenue in period ÷ Active users in period (state whether the denominator is all users or paying users only)
   - What it measures: Revenue intensity of the base you define
   - Why it matters: Blended ARPU (free + paid) and average revenue per paying user (ARPPU) answer different questions—label which you use
4. Customer Lifetime Value (LTV) — directional
   - Formula (common shortcut): (Period ARPU × Gross margin %) ÷ Period churn rate — *same period units throughout*
   - What it measures: A back-of-envelope contribution estimate under stable ARPU, margin, and churn
   - Why it matters: Useful for rough customer acquisition cost (CAC) sanity checks; overstates or breaks when churn is unstable, expansion creates negative net churn, or cohorts differ—prefer cohort or retention-curve LTV when stakes are high
5. Trial-to-Paid Conversion Rate
   - Formula: (Trial users who convert to paid ÷ Trial users who started in the cohort) × 100
   - What it measures: Whether the trial window actually surfaces value worth paying for
   - Why it matters: Weak conversion usually means thin trial value, confusing packaging, or premature ask—not a missing countdown
6. Paid Churn Rate
   - Formula: (Paying customers lost in period ÷ Paying customers at start of period) × 100
   - What it measures: How fast you lose paying customers
   - Why it matters: Monetisation that converts people who quickly cancel is revenue theatre; pair with retention and cancel reasons

## Behind the Data

Find where value is unclear, the ask feels unfair, or packaging does not match the job—before you “add urgency.”

### Conversion & paywall timing

- After which Success Moment or failed free-tier attempt do upgrades cluster?
- Which gated capabilities users try most—and which produce regret vs. understood upgrade?
- Does earlier paywall exposure raise impressions but lower trust and long-term paid retention?

### Pricing & packaging

- Which tier converts and retains—not only which click-throughs?
- How do monthly vs annual plans differ on conversion, refunds, and realised LTV?
- Does trial length change trial-to-paid without increasing early churn after payment?

### Behaviour & fairness signals

- Which usage patterns predict willing upgrade vs. cancel-within-period?
- Where do users hit limits that feel like bait-and-switch rather than a clear free/paid boundary?
- What cancel reasons and refund spikes follow Limited Offers or paywall copy changes?

## Further reading

- [Product-Led Growth and User Experience (Nielsen Norman Group)](https://www.nngroup.com/articles/product-led-growth-ux/) — Freemium/trial as try-before-you-buy; UX levers for time-to-value, conversion, and churn.
- [Fake urgency (Deceptive Patterns)](https://www.deceptive.design/types/fake-urgency) — Why manufactured timers and false scarcity destroy trust—and what counts as genuine limits.
- [How to Calculate and Increase Customer Lifetime Value (Baremetrics)](https://baremetrics.com/academy/saas-calculating-ltv) — Practical subscription LTV shortcut plus why small samples and early churn need caution.
- [How to project customer retention (Fader & Hardie)](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Fader%5Fhardie%5Fjim%5F07.pdf) — Retention curves and heterogeneity—why a single churn rate often misstates lifetime value.
- [Patrick Campbell on pricing and freemium (Intercom)](https://www.intercom.com/blog/podcasts/profitwells-patrick-campbell-on-the-art-and-science-of-pricing/) — Freemium as acquisition, not a hollow free tier; pricing as research, not a growth hack.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `map → trust → friction → tone → review` (checkout / money-flow playbook)
- **Core TTPs to load:** The Paywall, Intentional Friction, Limited Offer, Perceived Effort Delay, Success Moments, Time to Value, Spark Curiosity
- **Supporting TTPs:** Gamified Progress, Effort Moat, Investment, Personalisation, JTBD Copywriting, Graceful Exit
- **When the agent should use this strategy:** "paywall timing", "upgrade flow", "pricing page", "trial conversion", "free to paid", "subscription packaging"
- **Companion handoff:** Impeccable — paywall, trial-limit, and post-upgrade UI states; DocSlime — when pricing tiers, free/paid boundaries, or cancellation policy belong in `docs/strategy/` or `docs/PRODUCT.md`; RedTeam — before fake urgency, bait-and-switch limits, or dark-pattern cancel paths (`/redteam review` on the proposed paywall moment)
- **Feeling north star this strategy serves:** earned desire with fair choice and post-payment confidence
- **Anti-goals:** fake urgency, bait-and-switch free tiers, dark-pattern cancel paths, manufactured delays to inflate value, coercive “last chance” churn traps
- **Reference path:** `skill/reference/sequence.md`
