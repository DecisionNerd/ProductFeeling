# Trust Building


Earn confidence by being predictable, transparent about what happens next, and protective when a mistake would hurt.

**Prerequisite:** [Customer Discovery](../discovery/index.md) (especially [Talk, Search, and Buy](../discovery/04-how-customers-talk-search-buy.md) for evaluation risk). Core concept: [Calibrated Trust](../concepts/11-calibrated-trust.md). Also [User Agency](../concepts/12-user-agency.md), [Friction](../concepts/04-friction.md), [Peak–End Rule](../concepts/07-peak-end-rule.md).

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

- **Primary command / sequence:** `/productfeeling trust` — then `friction → states → anti-patterns → review` for high-stakes flows
- **Core TTPs to load:** Fail Safe, Pattern Alignment, Permission Serve, Loading Feedback, Intentional Friction
- **Supporting TTPs:** JTBD Copywriting, Micro Interactions, Success Moments, Progressive Disclosure, Perceived Effort Delay, Graceful Recovery, Calibrated Confidence
- **When the agent should use this strategy:** "permission request", "destructive action", "privacy copy", "users don't trust", "confirmation fatigue", "high-stakes flow"
- **Companion handoff:** Impeccable — confirmation dialogs, error/recovery UI, permission prompts, and loading honesty; DocSlime — when privacy promises, data-use disclosure, or safety policies belong in `docs/strategy/` or ADRs; RedTeam — before new permission batches or trust-badge marketing (`/redteam assumptions` on what the user can verify)
- **Feeling north star this strategy serves:** safety and predictability with informed agency
- **Anti-goals:** fake loading to inflate value, permission spam, shame after deny, confirm-everything theatre, dark-pattern “trust badges”
- **Reference path:** `skill/reference/trust.md`
