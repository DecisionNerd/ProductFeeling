# Trust Building


Earn confidence by being predictable, transparent about what happens next, and protective when a mistake would hurt.

**Prerequisite:** [Customer Discovery](../discovery/index.md) (especially [Talk, Search, and Buy](../discovery/04-how-customers-talk-search-buy.md) for evaluation risk). Core concept: [Calibrated Trust](../concepts/11-calibrated-trust.md). Also [User Agency](../concepts/12-user-agency.md), [Friction](../concepts/04-friction.md), [Peak–End Rule](../concepts/07-peak-end-rule.md).

## What it is

Trust building is the deliberate work of making a product predictable enough, transparent enough about what happens next, and protective enough when a mistake would actually hurt, that people are willing to do the high-stakes things a product asks of them: grant a sensitive permission, enter payment details, delete something, or rely on an answer they cannot independently verify. It is distinct from general polish—a product can look extremely refined and still feel untrustworthy, usually because it asks for access before explaining why, hides what a destructive action will actually do, or goes silent during a wait that matters.

The target is not maximum trust; it is [calibrated trust](../concepts/11-calibrated-trust.md)—trust that matches the system's actual reliability. Over-trust is as much a design failure as under-trust: a user who blindly relies on an AI-generated answer without knowing when to double-check it is a trust *miscalibration*, not a trust success, and it tends to produce a much worse betrayal the day the system is wrong.

## Why it works

Trust is built slowly, through many small moments of the product doing what it said it would, and it can be destroyed instantly by a single moment of surprise. This asymmetry is why trust-building strategy focuses so heavily on the moments where a betrayal would be most costly: the permission prompt, the irreversible action, the payment flow, the long wait with no feedback. [Fail Safe](../ttps/fail-safe.md) and [Intentional Friction](../ttps/intentional-friction.md) exist because a small, purposeful pause before an irreversible mistake costs almost nothing in the common case and prevents the exact incidents that would otherwise define a person's entire relationship with the product—the [peak–end rule](../concepts/07-peak-end-rule.md) means one bad, panicked moment can outweigh months of smooth use in someone's memory.

The other half of the mechanism is disclosure timing. Asking for access, money, or trust *before* the value that justifies the ask is visible produces exactly the defensiveness that erodes conversion and confidence alike; just-in-time requests, made at the moment their purpose is obvious, consistently outperform up-front batches. [Friction](../concepts/04-friction.md) placed deliberately—an extra confirmation on a destructive action, a moment of "here's what will happen"—is not the opposite of a smooth experience; it is often what makes a person feel safe enough to move quickly through everything else.

## Core Tools, Techniques, and Practices (TTPs)

- [Fail Safe](../ttps/fail-safe.md): Protect people from costly mistakes while keeping ordinary work moving
- [Pattern Alignment](../ttps/pattern-alignment.md): Use familiar mental models where they help people act with confidence
- [Permission Serve](../ttps/permission-serve.md): Ask for access only when people can understand, choose, and benefit from it
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate
- [Intentional Friction](../ttps/intentional-friction.md): Add a small, purposeful pause when moving quickly could create harm, regret, or an avoidable mistake

## Supporting Tools, Techniques, and Practices (TTPs)

- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Write from the progress the user is trying to make, not the feature your product wants to describe
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [Perceived Effort Delay](../ttps/perceived-effort-delay.md): When work takes time, show the real work; when it does not, respect the user’s time
- [Graceful Recovery](../ttps/graceful-recovery.md): When the product fails, own it, explain it, and repair the user’s progress—so trust survives the bad day
- [Calibrated Confidence](../ttps/calibrated-confidence.md): When the product uses AI, show how sure it is—so people know when to trust the output and when to check it

## Insights & Metrics

Measure whether people feel safe enough to grant access, finish high-stakes work, and stay when something feels off—not whether you extracted consent.

1. Permission Grant Rate (by ask)
   - Formula: (Permissions granted ÷ Permission prompts shown) × 100 — segment by permission type and moment in the journey
   - What it measures: Willingness to share sensitive access *in that context*
   - Why it matters: A low rate often means premature or unclear asks; a high rate from deceptive timing is not trust—it is deferred regret
2. High-Stakes Flow Completion Rate
   - Formula: (Users who finish a defined high-stakes multi-step flow ÷ Users who started it) × 100
   - What it measures: Confidence and clarity through irreversible, financial, or privacy-sensitive work
   - Why it matters: Abandonment here usually signals fear, ambiguity, or missing safety nets—not lack of “motivation”
3. Trust-Related Support Share
   - Formula: (Tickets tagged safety / privacy / security / “did this work?” ÷ Total support tickets) × 100
   - What it measures: How often people need human reassurance about harm, data, or uncertain outcomes
   - Why it matters: Rising share points to disclosure gaps, broken feedback, or weak Fail Safe—pair with absolute volume so growth does not hide the signal
4. Post-Safeguard Continuation Rate
   - Formula: (Users who complete the action after a confirmation, permission, or recovery step ÷ Users who reached that safeguard) × 100
   - What it measures: Whether protective friction clarifies the choice or merely blocks it
   - Why it matters: Healthy trust keeps people moving *with* eyes open; if continuation collapses, the ask, copy, or timing is wrong

## Behind the Data

Find where confidence breaks—and whether the fix is clearer disclosure, better timing, or a stronger safety net.

### Permission & disclosure

- Which permission asks have the lowest grant rates—and what value is visible *before* the prompt?
- Does just-in-time asking (at the moment of need) outperform launch-time batches?
- When people deny, do they still reach value via a respectful fallback?

### High-stakes flows

- Where do users abandon irreversible, payment, or data-sharing steps?
- Do Fail Safe and Intentional Friction increase completion of the *intended* path, or train people to click through?
- After a scary-looking wait, does Loading Feedback (or honest Perceived Effort Delay) reduce “did it work?” support?

### Trust incidents

- Which ticket themes cluster: privacy surprise, security fear, lost work, or unclear state?
- How fast do trust-tagged issues resolve—and does the same issue recur in-product?
- Which segments (new vs power users, locale, device) raise trust concerns most?

## Further reading

- [Trustworthiness in Web Design: 4 Credibility Factors (NN/g)](https://www.nngroup.com/articles/trustworthy-design/) — Durable pillars: design quality, up-front disclosure, current content, connection to the wider web.
- [Trust or Bust: Communicating Trustworthiness in Web Design (NN/g)](https://www.nngroup.com/articles/communicating-trustworthiness/) — Trust accumulates through behaviour over time and collapses on a single betrayal.
- [Prominence-Interpretation Theory (NN/g)](https://www.nngroup.com/articles/prominence-interpretation-theory/) — Accessible summary of Fogg’s model: what people notice, then how they interpret it as credible.
- [Confirmation Dialogs Can Prevent User Errors (NN/g)](https://www.nngroup.com/articles/confirmation-dialog/) — When protective friction helps—and why undo beats endless confirms.
- [User Control and Freedom (NN/g)](https://www.nngroup.com/articles/user-control-and-freedom/) — Heuristic grounding for recovery paths that make people willing to act.
- [Protecting the User’s Privacy (Apple)](https://developer.apple.com/documentation/uikit/protecting-the-user-s-privacy) — Just-in-time access, purpose strings, and fallbacks that respect refusal.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `trust → friction → states → anti-patterns → review` (trust-building playbook)
- **Core TTPs to load:** Fail Safe, Pattern Alignment, Permission Serve, Loading Feedback, Intentional Friction
- **Supporting TTPs:** JTBD Copywriting, Micro Interactions, Success Moments, Progressive Disclosure, Perceived Effort Delay, Graceful Recovery, Calibrated Confidence
- **When the agent should use this strategy:** "permission request", "destructive action", "privacy copy", "users don't trust", "confirmation fatigue", "high-stakes flow"
- **Companion handoff:** Impeccable — confirmation dialogs, error/recovery UI, permission prompts, and loading honesty; DocSlime — when privacy promises, data-use disclosure, or safety policies belong in `docs/strategy/` or ADRs; RedTeam — before new permission batches or trust-badge marketing (`/redteam assumptions` on what the user can verify)
- **Feeling north star this strategy serves:** safety and predictability with informed agency
- **Anti-goals:** fake loading to inflate value, permission spam, shame after deny, confirm-everything theatre, dark-pattern “trust badges”
- **Reference path:** `skill/reference/sequence.md`
