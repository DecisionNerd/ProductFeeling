# Activation


Get users to the first proof of value—the action that predicts they will return.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

- [Time to Value](../ttps/time-to-value.md): Help people reach their first meaningful outcome with the least unnecessary effort
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Setup Defaults](../ttps/setup-defaults.md): Give users a credible starting point they can understand, change, or skip
- [Empty States](../ttps/empty-states.md): Turn “nothing here” into a clear, useful next step
- [Discovery](../ttps/discovery.md): Guide users to value before they know where to look
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete
- [Momentum Bias](../ttps/momentum-bias.md): Give people a genuine head start without taking the decision away from them

## Supporting Tools, Techniques, and Practices (TTPs)

- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Jobs-to-be-Done (JTBD) copy: write from the progress the user is trying to make, not the feature your product wants to describe
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate
- [Sandbox Experience](../ttps/sandbox-experience.md): Let people experience a truthful slice of product value before asking them to commit
- [Contact Bridge](../ttps/contact-bridge.md): Connect users to people they already know—without turning their address book into a growth hack

## Insights & Metrics

Measure whether people reach real value—not whether they finished a tour.

1. Activation Rate
   - Formula: (Users who complete the defined activation action ÷ New users in cohort) × 100
   - What it measures: Share of new users who hit the milestone most tied to later retention
   - Why it matters: Signup and checklist completion are vanity; activation is the first signal the product worked
2. Time to Value (TTV)
   - Formula: Median time from first open (or signup) to first activation action
   - What it measures: How quickly users experience product benefit
   - Why it matters: Longer paths usually mean more drop-off; median beats mean when a few slow setups skew the average
3. Feature Adoption Rate (post-activation)
   - Formula: (Activated users who used feature X ÷ Activated users) × 100
   - What it measures: Whether first value deepens into the capabilities that sustain use
   - Why it matters: Activation without follow-on adoption often means a shallow “aha,” not a habit start
4. Activated vs Not — Early Retention
   - Formula: Compare Day 1 / 7 / 30 retention for activated vs non-activated users in the same signup cohort
   - What it measures: Whether your activation definition actually predicts return
   - Why it matters: If “activated” users do not retain better, redefine the action before polishing the funnel

## Behind the Data

What’s blocking first value—and whether the milestone you track is the right one.

### Define & validate activation

- Which candidate actions best predict Day 7 / 30 retention—and which are busywork?
- Do different jobs-to-be-done need different activation events?
- How does guided vs self-directed exploration change activation rate and TTV?

### Friction before first value

- Where do users stall before the activation action (empty state, setup, permission, account wall)?
- Which defaults, empty states, or Sandbox paths produce the fastest TTV?
- Does asking for account or contacts before value correlate with lower activation?

### After the aha

- What do users do in the same session after the first Success Moment—explore, leave, or hit a wall?
- Which features adopted within 24–72 hours best predict retention among activated users?
- Where does Discovery help—and where does it distract from the core job?

## Further reading

- [Getting Started: Driving Product Engagement by Obsessing Over Activation (Amplitude)](https://amplitude.com/blog/getting-started-activation) — Define an aha/activation action and validate it against retention.
- [What is Activation Rate for SaaS Companies? (Amplitude)](https://amplitude.com/explore/digital-analytics/what-is-activation-rate) — Clear framing of activation rate as a product-specific, retention-linked metric.
- [Hook trial users from their first use (Intercom)](https://www.intercom.com/blog/trial-users-first-use/) — JTBD-led first-use design aimed at a real aha with minimal ask.
- [Designing Empty States in Complex Applications (Nielsen Norman Group)](https://www.nngroup.com/articles/empty-state-interface-design/) — Empty states as status, learnability, and a direct path into key tasks.
- [Progressive Disclosure (NN/g)](https://www.nngroup.com/articles/progressive-disclosure/) — Reveal complexity when needed so first value is not buried under setup.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `jobs → map → friction → states → delight → brief`
- **Core TTPs to load:** Time to Value, Success Moments, Setup Defaults, Empty States, Discovery, Personalisation, Micro Interactions, Momentum Bias
- **Supporting TTPs:** Progressive Disclosure, JTBD Copywriting, Loading Feedback, Sandbox Experience, Contact Bridge
- **When the agent should use this strategy:** "activation rate", "aha moment", "time to value", "signed up but inactive", "first value", "define activation event"
- **Companion handoff:** Impeccable — empty states, defaults, sandbox paths, and first-value feedback on named surfaces; DocSlime — when the activation definition or retention-linked milestone belongs in `docs/strategy/` or `docs/experience/`; RedTeam — before committing to a vanity activation metric or contact-import gate (`/redteam review` on the proposed activation event)
- **Feeling north star this strategy serves:** clarity that the product works, with early competence
- **Anti-goals:** fake social proof, contact-book spam, sunk-cost traps, forcing tours before value, counting vanity events as “activated”
- **Reference path:** `skill/reference/sequence.md`
