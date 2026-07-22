# Graceful Recovery


When the product fails, own it, explain it, and repair the user’s progress—so trust survives the bad day.

## What it is

The designed response *after* something breaks: honest error messages, preserved work, undo, retry that works, and—for larger incidents—status updates and follow-up that close the loop. Fail Safe prevents the mistake; Graceful Recovery is what happens once the mistake or outage is real.

## Why it works

Failures are emotional peaks; the [Peak–End Rule](../concepts/07-peak-end-rule.md) means users remember them out of proportion. A recovery that names what happened, protects their effort, and offers a working next step converts a trust-destroying moment into evidence the product is dependable—see [Calibrated Trust](../concepts/11-calibrated-trust.md) and the error state in [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md). Vague “something went wrong,” lost input, and dead ends do the opposite.

Prevention before the break is [Fail Safe](fail-safe.md)—do not collapse the two cards.

## When to use it

- Error states of any kind: validation, sync, payment, network, model failure
- Crashes or timeouts where user input is at risk
- Outages and degraded service that need in-product or status-page communication
- After the incident: what changed, and whether affected users are made whole

## Do

- Say what went wrong in plain language, what was preserved, and the most likely fix—inline, near the problem
- Protect the user’s work by default: autosave, drafts, retry queues, safe re-submission
- Offer a real path forward (retry, alternative route, support with context attached)—never a dead end
- Take responsibility in copy; the system failed, not the user
- For incidents, communicate early, update honestly, and follow up when resolved

## Don't

- Show raw codes, jargon, or blame-the-user phrasing
- Discard input on failure, or make users re-enter what the system lost
- Hide known outages while support queues fill with “is it just me?”
- Apologise without repair—an apology with lost data is theatre
- Over-apologise for trivial hiccups until the words lose meaning

## Founder Tip

Users forgive failure; they do not forgive being lied to or losing their work. Budget recovery design for your three most common failures before polishing the happy path.

## Make It Yours

1. What are your top five real-world failures (from logs and support), and what does the user currently see for each?
2. For each, what user effort is at risk—and how is it preserved?
3. Can the user always tell the difference between “broken,” “waiting,” and “my mistake”?
4. Who writes incident copy, and how fast can it ship to the affected surface?
5. After a serious failure, what follow-up would make an affected user say “they handled that well”?


## Related concepts

- [Peak–End Rule](../concepts/07-peak-end-rule.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)
- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)

## Further reading

- [Error-Message Guidelines (Nielsen Norman Group)](https://www.nngroup.com/articles/error-message-guidelines/) — Plain language, precise diagnosis, constructive next steps.
- [An Error Messages Scoring Rubric (NN/g)](https://www.nngroup.com/articles/error-messages-scoring-rubric/) — A systematic way to audit and prioritise error-state UX debt.
- [User Control and Freedom (NN/g)](https://www.nngroup.com/articles/user-control-and-freedom/) — Undo and emergency exits as the foundation of confident use.
- [GOV.UK Design System: Error message](https://design-system.service.gov.uk/components/error-message/) — A rigorous, accessible standard for respectful error communication.
- [The Peak–End Rule (NN/g)](https://www.nngroup.com/articles/peak-end-rule/) — Why failure moments dominate what users remember about your product.

## Agent skill

- **Primary command:** `TODO` (e.g. candidate `/productfeeling states` or `recovery` — not final)
- **Related commands:** `TODO` (`feel`, `trust`, `anti-patterns`)
- **When the agent should load this TTP:** `TODO` ("error message", "error state", "outage comms", "lost work", "retry flow")
- **Companion handoff:** `TODO` (Impeccable for error-state UI craft; DocSlime for incident comms templates)
- **Feeling north star this TTP serves:** `TODO` (safety after failure, kept trust, protected effort)
- **Anti-goals:** `TODO` (blame-the-user copy, data loss on failure, hidden outages, apology without repair)
- **Reference stub path:** `skill/reference/TODO.md`
