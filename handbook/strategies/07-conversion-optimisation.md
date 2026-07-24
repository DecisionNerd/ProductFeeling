# Conversion Optimisation


Help people complete a clear, valuable action by removing friction and supporting a confident choice—without deceptive pressure.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Conversion optimisation is the general discipline of helping people complete a specific, valuable action—checkout, signup, an application, a booking—by removing genuine friction and supporting a confident decision, as distinct from [Monetisation](06-monetisation.md), which is specifically about the money-changing-hands moment, and [Onboarding](01-onboarding.md), which is specifically about a new user's first session. Any funnel with a defined completion event and a population that drops off along the way is conversion optimisation's territory.

The discipline has an unusually short distance to its own corruption: the same funnel-analytics toolkit used to find genuine confusion (an unclear price, a broken form, an unnecessary field) is just as easily used to find the point of maximum leverage for pressure—a countdown timer, a pre-checked upsell, a confirmshaming exit link. This handbook treats those as different activities entirely. Legitimate conversion work removes obstacles between an already-motivated person and their goal; illegitimate conversion work manufactures obstacles or false urgency to extract a decision the person would not otherwise make.

## Why it works

Conversion rates respond to clarity and trust far more reliably, and far more durably, than they respond to pressure. A confusing step, an unexpected cost revealed late, or an unclear next action all produce the same failure mode—hesitation that curdles into abandonment—and each is fixable with the same tool: making the true cost, time, and outcome of the action legible before the person commits to it. This is why step-level drop-off analysis is more useful than aggregate conversion rate alone: it names the exact screen where confidence broke, rather than leaving the team to guess.

Pressure tactics can lift short-term conversion numbers while quietly destroying the metric that actually matters: post-conversion quality. A checkout that spikes completions through urgency or hidden costs will also spike refunds, chargebacks, and immediate cancellations, because the person converted before they were actually convinced. [User Agency](../concepts/12-user-agency.md) is the principle that keeps this strategy honest: a genuine limited offer with a real deadline and a respectful alternative is a legitimate tool; a fabricated one is deferred churn wearing a growth chart.

## Core Tools, Techniques, and Practices (TTPs)

- [The Paywall](../ttps/the-paywall.md): Present a clear, fair upgrade decision when users understand the value on offer
- [Limited Offer](../ttps/limited-offer.md): Present a genuine, time-bound offer when it creates a fair choice, not pressure
- [Intentional Friction](../ttps/intentional-friction.md): Add a small, purposeful pause when moving quickly could create harm, regret, or an avoidable mistake
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Spark Curiosity](../ttps/spark-curiosity.md): Offer a truthful glimpse of a useful outcome, then let users choose whether to explore it
- [Momentum Bias](../ttps/momentum-bias.md): Give people a genuine head start without taking the decision away from them

## Supporting Tools, Techniques, and Practices (TTPs)

- [Time to Value](../ttps/time-to-value.md): Help people reach their first meaningful outcome with the least unnecessary effort
- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Write from the progress the user is trying to make, not the feature your product wants to describe
- [Perceived Effort Delay](../ttps/perceived-effort-delay.md): When work takes time, show the real work; when it does not, respect the user’s time
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change

## Insights & Metrics

Optimise for informed completion—not for forcing every visitor through the same call to action (CTA).

1. Conversion Rate
   - Formula: (Users who complete the defined conversion event ÷ Eligible users in the funnel) × 100
   - What it measures: Share of people who take the action you care about
   - Why it matters: Core signal of funnel effectiveness—track relative to design changes and traffic quality, not in isolation
2. Step Drop-off Rate
   - Formula: (Users who leave at step N ÷ Users who reached step N) × 100
   - What it measures: Where the path loses people
   - Why it matters: Names the concrete moment of confusion, doubt, cost surprise, or premature ask
3. Median Time to Convert
   - Formula: Median time from first eligible touchpoint (or funnel entry) to conversion
   - What it measures: How long the decision path typically takes
   - Why it matters: Guides nurture windows and follow-up timing; median beats mean when a few long journeys skew the average
4. Conversion Rate by Traffic Source
   - Formula: (Conversions from source S ÷ Visits or eligible users from source S) × 100
   - What it measures: Channel quality and intent fit
   - Why it matters: Separates acquisition problems from product/UX problems before you “fix” the wrong step
5. Early Post-Conversion Quality
   - Formula: (Refunds, chargebacks, or cancels within 7 days of conversion ÷ Conversions in the same period) × 100
   - What it measures: Whether converted users stay willing
   - Why it matters: A lift that spikes regret is not optimisation—it is deferred churn

## Behind the Data

Find where users lose clarity, confidence, or momentum—and whether “urgency” is real or manufactured.

### Funnel & friction

- Which step has the highest drop-off—and what ask sits there (account, payment, permission, long form)?
- How do mobile vs desktop (or web vs app) conversion and drop-off compare on the same steps?
- Does shortening the path raise completion *and* post-conversion quality—or only the former?

### Traffic & segment fit

- Which sources and campaigns convert best—and which inflate visits while lowering rate?
- How do conversion and early cancel rates vary by segment, plan intent, or prior product use?
- Are you optimising a step that low-intent traffic can never pass?

### Decision quality & timing

- Where do people hesitate longest—and is that hesitation useful (comparison) or broken (unclear price, trust, next step)?
- If you use a Limited Offer, is the deadline genuine and the alternative still a respectful choice?
- What follow-up timing helps abandoned journeys without nagging or shame?

## Further reading

- [Conversion Rate (Nielsen Norman Group)](https://www.nngroup.com/articles/conversion-rates/) — Defines conversion rate for UX/analytics and why you should optimise, not blindly maximise it.
- [Define Stronger A/B Test Variations Through UX Research (NN/g)](https://www.nngroup.com/articles/ab-testing-and-ux-research/) — Why experiments need research-backed hypotheses, not guesswork variants.
- [Deceptive Patterns in UX (NN/g)](https://www.nngroup.com/articles/deceptive-patterns/) — How conversion pressure turns into unethical (and often unlawful) patterns.
- [Deceptive Patterns (deceptive.design)](https://www.deceptive.design/) — Canonical taxonomy of manipulative tactics, including fake scarcity and fake urgency.
- [E-Commerce Cart & Checkout Usability Research (Baymard Institute)](https://baymard.com/research/checkout-usability/) — Evidence-led checkout friction patterns that commonly kill completion.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `map → friction → trust → tone → anti-patterns → review`
- **Core TTPs to load:** The Paywall, Limited Offer, Intentional Friction, Success Moments, Spark Curiosity, Momentum Bias
- **Supporting TTPs:** Time to Value, JTBD Copywriting, Perceived Effort Delay, Personalisation
- **When the agent should use this strategy:** "checkout drop-off", "signup conversion", "paywall conversion", "funnel friction", "CTA not converting", "step drop-off"
- **Companion handoff:** Impeccable — form, checkout, and CTA craft on named funnel steps; DocSlime — when conversion definitions or funnel success criteria belong in `docs/experience/`; RedTeam — before A/B variants that add urgency, hidden costs, or confirmshaming (`/redteam assumptions` on whether the lift trades away post-conversion quality)
- **Feeling north star this strategy serves:** clarity and confidence through fair, earned completion
- **Anti-goals:** fake scarcity/urgency, confirmshaming, hidden costs, forced continuity, A/B tests that only maximise click-through at the user’s expense
- **Reference path:** `skill/reference/sequence.md`
