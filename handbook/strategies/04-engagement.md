# Engagement


Deepen how people use the product—more meaningful interaction, not more time trapped.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Engagement is depth of *useful* interaction within a session—how much real progress, exploration, or meaningful action happens once someone is already in the product—not raw time spent or clicks generated. This distinction is the whole strategy: a session that ends in fifteen efficient minutes with a task completed is a better engagement outcome than an hour of aimless clicking, even though only one of those looks better on a naive "time in app" dashboard.

Engagement is easy to confuse with the metrics that are easiest to inflate, which is exactly why this strategy exists as its own discipline rather than a side effect of Retention or Habit Formation. It asks a narrower question than either: given that someone is here right now, are they finding and using the capabilities that matter to them, or are they stuck, bored, wandering, or being nudged into busywork that looks like activity but produces nothing they value.

## Why it works

Depth of engagement predicts long-term value better than session length because it measures whether the product's actual capabilities are being discovered and used—the thing a person is ultimately paying attention (or money) for. A product can have long average sessions and low feature adoption at the same time, which usually means people are searching, not benefiting; conversely, short high-completion sessions are frequently a sign of a product that respects the user's time enough to let them finish and leave.

The mechanism runs through [Progressive Disclosure](../ttps/progressive-disclosure.md) and [Discovery](../ttps/discovery.md): people can only engage deeply with capability they can find, and revealing the next useful layer at the right moment is what turns a single-purpose visit into a broader relationship with the product. This is also where engagement work is most vulnerable to becoming manipulative—optional novelty and gamified progress are legitimate tools for making exploration pleasant, but the moment they are the *reason* someone keeps interacting rather than a decoration around real value, engagement has quietly become compulsion, which is [Habit Formation](11-habit-formation.md)'s territory to police, not this strategy's to exploit.

## Core Tools, Techniques, and Practices (TTPs)

- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete
- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control
- [Variable Reward](../ttps/variable-reward.md): Add optional novelty around reliable value, without making users chase uncertainty
- [Discovery](../ttps/discovery.md): Guide users to value before they know where to look
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change
- [Intent Mirroring](../ttps/intent-mirroring.md): Notice a meaningful signal, then offer a small, optional next step that fits the user’s likely goal

## Supporting Tools, Techniques, and Practices (TTPs)

- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [System Widget](../ttps/system-widget.md): Put one timely, glanceable piece of user-chosen value where people already look
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [Small Quirk](../ttps/small-quirk.md): A small, repeatable flourish that makes a clear product interaction feel recognisably yours

## Insights & Metrics

Measure depth of useful activity—not time spent for its own sake.

1. Meaningful Actions Per Session
   - Formula: Count of defined value actions per session (e.g. create, complete, share, configure)—not raw clicks
   - What it measures: How much real work or progress happens in a visit
   - Why it matters: Separates productive engagement from restless tapping or dead ends
2. Feature Adoption Rate
   - Formula: (Users who used a defined feature ÷ Active users in period) × 100
   - What it measures: Whether people find and use capabilities that matter
   - Why it matters: Validates Discovery and Progressive Disclosure; low adoption often means buried value, not lazy users
3. Session Duration (interpret with intent)
   - Formula: Average or median time per session
   - What it measures: Time in-product—not satisfaction by itself
   - Why it matters: Longer can mean immersion *or* struggle; for efficiency products, shorter successful sessions may be the win
4. Stickiness Ratio (Daily Active Users / Monthly Active Users)
   - Formula: Daily Active Users ÷ Monthly Active Users
   - What it measures: How regularly the active base shows up
   - Why it matters: Useful engagement context for return frequency; treat deep habit loops under Habit Formation, not as an addiction target

## Behind the Data

Diagnose whether people are exploring with purpose—or stuck, bored, or nudged into empty activity.

### Depth & momentum

- Which Micro Interactions or Success Moments precede a second meaningful action in the same session?
- Where does Progressive Disclosure help people find the next useful layer—and where does it hide capability?
- Which sequences predict broader feature use without longer, frustrated sessions?

### Discovery & relevance

- Which Discovery paths drive Feature Adoption for core jobs—not vanity features?
- How does inspectable Personalisation compare with generic suggestions on depth and return quality?
- Where does Intent Mirroring offer a helpful next step—and where does it feel pushy or wrong?

### Agency & load

- Are Variable Reward and Gamified Progress optional flourishes around reliable value, or do users feel they must chase novelty?
- What cognitive load feels right for exploration before people abandon or thrash?
- Do Small Quirk and System Widget invite a glance of chosen value—or interrupt focus?

## Further reading

- [Frequency & Recency of Site Visits (Nielsen Norman Group)](https://www.nngroup.com/articles/frequency-recency/) — Durable framing for engagement as return patterns, not time-on-page alone.
- [Translating UX Goals into Analytics Measurement Plans (NN/g)](https://www.nngroup.com/articles/ux-goals-analytics/) — Why adoption and duration must map to real UX goals (including saving time).
- [Microinteractions in User Experience (NN/g)](https://www.nngroup.com/articles/microinteractions/) — How small feedback loops support status, prevention, and engaging feel.
- [Progressive Disclosure (NN/g)](https://www.nngroup.com/articles/progressive-disclosure/) — Canonical guidance for revealing complexity when users need it.
- [Wellbeing Supportive Design (Peters et al.)](https://selfdeterminationtheory.org/wp-content/uploads/2022/08/2022_Peters_WellbeingSupportiveDesign.pdf) — Autonomy- and competence-supportive design as a guardrail against coercive engagement.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `map → intensity → friction → delight → review`
- **Core TTPs to load:** Micro Interactions, Gamified Progress, Variable Reward, Discovery, Personalisation, Intent Mirroring
- **Supporting TTPs:** Success Moments, System Widget, Loading Feedback, Progressive Disclosure, Small Quirk
- **When the agent should use this strategy:** "feature adoption", "session depth", "discovery path", "users bounce after one action", "shallow use", "explore without purpose"
- **Companion handoff:** Impeccable — interaction polish, discovery affordances, and progress feedback on named surfaces; DocSlime — when engagement metrics or feature-adoption goals belong in `docs/experience/`; pair with Retention or Habit Formation sequences when depth must become return — not more time-on-page
- **Feeling north star this strategy serves:** competence and curiosity with user control
- **Anti-goals:** time-maximising dark patterns, addiction loops, compulsive variable rewards, engagement theatre without value
- **Reference path:** `skill/reference/sequence.md`
