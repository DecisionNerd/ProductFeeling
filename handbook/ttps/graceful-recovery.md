# Graceful Recovery


When the product fails, own it, explain it, and repair the user’s progress—so trust survives the bad day.

## What it is

The designed response *after* something breaks: honest error messages, preserved work, undo, retry that works, and—for larger incidents—status updates and follow-up that close the loop. This is the card for when the bad thing has already happened, which is what separates it from its closest neighbour, [Fail Safe](fail-safe.md): Fail Safe is the seatbelt that stops the mistake from happening at all—safer defaults, undo, confirmation before something irreversible—while Graceful Recovery is the paramedic that shows up once the crash has already occurred. A product needs both, but they are not interchangeable: turning every error state into another confirmation dialog is a category error, and so is treating a genuine outage as something a better warning message could have prevented.

In practice this means treating error states as a designed surface rather than whatever the framework renders by default—the specific error state described in [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)—and treating an incident as having a beginning, middle, and end that someone is responsible for narrating, not just a log line that eventually resolves itself.

## Why it works

Failures are emotional peaks, and the [Peak–End Rule](../concepts/07-peak-end-rule.md) is unambiguous that people remember peaks and endings out of proportion to their actual duration—a single bad error in an otherwise smooth session can become the entire story the user tells about the product afterwards. A recovery that names what happened plainly, protects the user's effort, and hands them a working next step turns that moment from a trust withdrawal into a trust deposit: it is direct evidence, delivered at the exact moment doubt is highest, that the product is dependable under pressure. This is the mechanism behind [Calibrated Trust](../concepts/11-calibrated-trust.md)'s repair stage—a well-handled failure can leave a user's trust higher than before, because they have now seen how the product behaves when things go wrong.

The failure mode this TTP exists to prevent is compounding: a vague "something went wrong," input the user has to retype, or a dead end with no path forward turns one bug into two losses—the original failure, plus the work and time spent recovering from it, plus the doubt that the product's other claims can be trusted either. Skipped entirely, recovery design leaves every failure to land at full emotional force with nothing absorbing the blow; overdone, in the form of apology without repair, it teaches users that contrition is cheap and does nothing to restore what they actually lost.

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

- **Primary command:** `/productfeeling states` — design error and outage surfaces that preserve work and offer a real next step
- **Related commands:** `/productfeeling trust`, `/productfeeling friction`, `/productfeeling anti-patterns`, `/productfeeling peaks-ends`
- **When the agent should load this TTP:** "error message", "error state", "outage comms", "lost work", "retry flow"
- **Companion handoff:** Impeccable — error-state UI, retry, and preserved-input craft; DocSlime — incident comms templates and status-page requirements
- **Feeling north star this TTP serves:** safety after failure, kept trust, protected effort
- **Anti-goals:** blame-the-user copy, data loss on failure, hidden outages, apology without repair
- **Reference path:** `skill/reference/states.md`
