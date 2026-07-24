# Onboarding


Get new users to first meaningful value with the least unnecessary ceremony.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Onboarding is everything between a person's first arrival and the moment they experience the product's actual value for themselves—not a tour, not a checklist, and not a synonym for signup. A signup form collects credentials; onboarding earns understanding. The distinction matters because most products confuse the two: they optimise the number of accounts created and call the job done, while the person who created the account still has no idea what to do next or why they should come back.

Good onboarding is deliberately short on ceremony and long on orientation. It answers three questions as fast as honestly possible: *what is this for*, *what do I do first*, and *did that work*. Everything else—preference collection, feature tours, permission requests, account completeness nagging—is optional weight that a well-designed onboarding defers until it is earned by demonstrated value, or skips entirely. The goal is not to explain the whole product; it is to get one real job done once, so the person has evidence the product works before being asked for anything else.

## Why it works

People do not persist through confusion on faith. Early sessions are disproportionately fragile: a user who has not yet felt value has no sunk cost, no habit, and no loyalty to draw on—only the immediate experience in front of them, which either builds confidence or ends the session for good. This is why onboarding sits upstream of every other strategy in this handbook: [Retention](03-retention.md), [Habit Formation](11-habit-formation.md), and [Monetisation](06-monetisation.md) all assume a user who has already crossed this threshold, and none of them can compensate for a first session that failed to deliver it.

The mechanism is closely tied to [Time to Value](../ttps/time-to-value.md) and [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md): people "hire" a product for a specific piece of progress, and onboarding is the interview where the product proves it can do the job. Every step that delays that proof—an account wall before value, a permission batch before trust, a tutorial before a real task—is friction spent on the product's convenience rather than the user's. Evidence from usability research is consistent here: guided tours and front-loaded tutorials often fail to improve task success and are frequently skipped or resented, while contextual, pull-based help delivered at the moment of need outperforms push-based onboarding almost everywhere it has been tested.

## Core Tools, Techniques, and Practices (TTPs)

- [Empty States](../ttps/empty-states.md): Turn “nothing here” into a clear, useful next step
- [Setup Defaults](../ttps/setup-defaults.md): Give users a credible starting point they can understand, change, or skip
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [Time to Value](../ttps/time-to-value.md): Help people reach their first meaningful outcome with the least unnecessary effort
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Jobs-to-be-Done (JTBD) Copywriting](../ttps/jtbd-copywriting.md): Jobs-to-be-Done (JTBD) copy: write from the progress the user is trying to make, not the feature your product wants to describe
- [Pattern Alignment](../ttps/pattern-alignment.md): Use familiar mental models where they help people act with confidence
- [Sandbox Experience](../ttps/sandbox-experience.md): Let people experience a truthful slice of product value before asking them to commit
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change
- [Momentum Bias](../ttps/momentum-bias.md): Give people a genuine head start without taking the decision away from them
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete

## Supporting Tools, Techniques, and Practices (TTPs)

- [Permission Serve](../ttps/permission-serve.md): Ask for access only when people can understand, choose, and benefit from it
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate
- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control
- [Contact Bridge](../ttps/contact-bridge.md): Connect users to people they already know—without turning their address book into a growth hack
- [Deep-link](../ttps/deep-link.md): Drop users into the exact moment, feature, or context that matters

## Insights & Metrics

Optimise for first value and early return—not for finishing every tutorial step.

1. Activation Rate
   - Formula: (Users who complete the defined activation action ÷ New users in cohort) × 100
   - What it measures: Share of new users who reach the action most tied to later retention
   - Why it matters: Completion of a tour is vanity; activation predicts whether onboarding worked
2. Time to Value (TTV)
   - Formula: Median time from first open (or signup) to first activation action
   - What it measures: How quickly users feel product benefit
   - Why it matters: Longer paths usually mean more drop-off; median beats mean when outliers skew
3. Onboarding Completion Rate
   - Formula: (Users who finish required onboarding steps ÷ Users who started them) × 100
   - What it measures: Throughput of your deliberate setup path
   - Why it matters: Useful for finding friction—but secondary to activation if steps are optional or skippable
4. Step Drop-off Rate
   - Formula: (Users who leave at step N ÷ Users who reached step N) × 100
   - What it measures: Where the path loses people
   - Why it matters: Names the concrete moment of confusion, delay, or premature ask
5. Activated vs Not — Early Retention
   - Formula: Compare Day 1 / 7 / 30 retention for activated vs non-activated users in the same signup cohort
   - What it measures: Whether your activation definition actually predicts return
   - Why it matters: If activated users do not retain better, redefine the activation action before polishing the flow

## Behind the Data

Diagnose whether the path is unclear, too long, or aimed at the wrong first win.

### Path & friction

- Which step has the highest drop-off—and what ask sits on that screen (account, permission, payment, empty form)?
- Do users who skip optional guidance activate at similar or higher rates?
- How does TTV for activated users compare to those who churn in week one?

### Segment & entry

- Which sources, campaigns, or Deep-link destinations activate best?
- How does activation differ by device, locale, or “invited vs organic”?
- Do some segments need a shorter path or a different first job?

### Behaviour after first value

- What happens in the session after the first Success Moment—explore, leave, or hit a wall?
- Is account creation before value correlating with lower activation?
- Which empty states and defaults actually produce the activation action?

## Further reading

- [Mobile-App Onboarding (Nielsen Norman Group)](https://www.nngroup.com/articles/mobile-app-onboarding/) — When dedicated onboarding helps vs when a clearer user interface (UI) is the real fix.
- [Mobile Tutorials: Wasted Effort or Efficiency Boost? (NN/g)](https://www.nngroup.com/articles/mobile-tutorials/) — Evidence that front-loaded tutorials often fail to improve task success.
- [Onboarding Tutorials vs. Contextual Help (NN/g)](https://www.nngroup.com/articles/onboarding-tutorials/) — Prefer pull/contextual help over pushy first-run tours.
- [Progressive Disclosure (NN/g)](https://www.nngroup.com/articles/progressive-disclosure/) — Classic framing for revealing complexity only when needed.
- [Instructional Overlays and Coach Marks (NN/g)](https://www.nngroup.com/articles/mobile-instructional-overlay/) — How to keep in-product hints short, scannable, and non-blocking.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `jobs → peaks-ends → states → delight → brief` (onboarding playbook)
- **Core TTPs to load:** Empty States, Setup Defaults, Progressive Disclosure, Time to Value, Success Moments, Jobs-to-be-Done (JTBD) Copywriting, Pattern Alignment, Sandbox Experience, Personalisation, Momentum Bias, Micro Interactions
- **Supporting TTPs:** Permission Serve, Loading Feedback, Gamified Progress, Contact Bridge, Deep-link
- **When the agent should use this strategy:** "first run", "signup flow", "time to value", "new user drop-off", "onboarding tour", "activation before account"
- **Companion handoff:** Impeccable — first-run UI, empty states, defaults, and success feedback (`craft` / `shape` on named surfaces); DocSlime — when activation criteria or onboarding rules belong in `docs/strategy/` or `docs/experience/`; RedTeam — before locking a mandatory account wall, permission batch, or tour-heavy path (`/redteam assumptions` on the proposed first-run gate)
- **Feeling north star this strategy serves:** early competence with earned momentum
- **Anti-goals:** forced tours, value-gated account walls without need, permission spam, dark-pattern “skip” shame
- **Reference path:** `skill/reference/sequence.md`
