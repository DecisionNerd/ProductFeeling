# Fail Safe


Protect people from costly mistakes while keeping ordinary work moving.

## What it is

Fail Safe is prevention: it designs a risky action so that a mistake either can't happen or can be undone before it costs anything—safer defaults that make the destructive path harder to reach by accident, clear statements of consequence before the point of no return, preserved input if something goes wrong, and confirmation reserved for the moments that are genuinely irreversible. It sits on the opposite side of the timeline from [Graceful Recovery](graceful-recovery.md), which is what a product does after failure has already happened—an outage, a failed request, a lost connection. Fail Safe is about the tap before the mistake; Graceful Recovery is about the error after it. Confusing the two produces a common bug: reaching for a confirmation dialog (Fail Safe's tool) to handle a system outage (Graceful Recovery's job), which just adds a click to an already-bad moment without fixing anything.

Undo on a deleted email, a "you're about to charge this card $400" summary before checkout, and a draft that survives a crashed tab are all Fail Safe. A generic "Something went wrong, try again" toast after a failed API call is not Fail Safe at all—it's Graceful Recovery's territory, and reaching for a confirmation dialog there won't help.

## Why it works

The mechanism is protective friction, the deliberate half of [Friction](../concepts/04-friction.md)'s allocation rule: most friction should be removed from a user's path to value, but friction placed on purpose at a point of real risk protects people from a mistake they can't take back, and lets them explore the rest of the product with real confidence instead of low-grade anxiety about what might break. That confidence is the actual product: a user who trusts that an accidental tap won't destroy their work moves faster and tries more, not less—the opposite of what over-cautious teams assume protective friction costs them.

The failure mode this prevents is a mental-model mismatch at the worst possible moment—a user who believed "archive" meant recoverable discovering it meant deleted, which reads as betrayal rather than an edge case, because the product broke a promise the user didn't know was only in their own head, and it does lasting damage to [Calibrated Trust](../concepts/11-calibrated-trust.md). But Fail Safe fails the other way just as easily: confirm every action, including the reversible and low-stakes ones, and people stop reading the dialogs and start clicking through on autopilot—so the one confirmation that actually mattered gets dismissed with the same reflex as the nine that didn't.

## When to use it

- Before irreversible, high-impact, or hard-to-correct actions such as deleting data, sending money, or publishing externally
- In forms, imports, settings, and admin workflows where mistakes can damage work or access
- When interrupted work, network failures, or validation errors could lose user input
- When a user needs confidence to explore an unfamiliar feature

## Do

- Prefer undo, soft deletion, drafts, and version history when they are technically possible
- Use specific confirmations only for consequential actions; state what will happen and what cannot be undone
- Preserve entered information and show an actionable fix when validation fails (user-side prevention—not system outage recovery)
- Use Intentional Friction only where evidence shows a pause prevents a meaningful mistake
- Test safeguards with keyboard, screen-reader, slow-network, and interrupted-session paths

## Don't

- Add confirmation dialogs to every action until people dismiss them on autopilot
- Hide serious consequences behind vague labels such as “Continue” or a generic warning icon
- Use Fail Safe language for system outages or failed requests—that is [Graceful Recovery](graceful-recovery.md)
- Block ordinary work with Intentional Friction that has no evidence of preventing a meaningful mistake

## Founder Tip

For every risky action, ask first: “Can we make this reversible?” A good undo is often kinder and more effective than a warning.

## Make It Yours

1. **Rank the risks**
   - Which actions can cost money, expose data, delete work, or create an external commitment?
   - Which mistakes are common slips, and which come from an unclear mental model?

2. **Choose the lightest effective safeguard**
   - Can a safer default, constraint, preview, or undo prevent harm without interruption?
   - If confirmation is necessary, what exact consequence must the person understand?

3. **Design undo and prevention, not just warnings**
   - When validation fails, is the user’s original input retained and editable?
   - If the system itself fails after the action, that is [Graceful Recovery](graceful-recovery.md)—not more confirmations

4. **Measure confidence and harm**
   - Where do accidental actions, reversals, support requests, or abandoned workflows occur?
   - Did the safeguard prevent costly mistakes without creating new completion friction?


## Related concepts

- [Friction](../concepts/04-friction.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)
- [Mental Models and Affordances](../concepts/05-mental-models.md)

## Further reading

- [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) — canonical principles for error prevention, recovery, and user control.
- [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) — explains how to write clear, constructive recovery guidance.
- [Recover from Validation Errors](https://design-system.service.gov.uk/patterns/validation/) — accessible, practical guidance for retaining input and fixing errors.
- [Interruption Pages](https://design-system.service.gov.uk/patterns/interruption-pages/) — shows when a serious-action warning is justified and when it is not.

## Agent skill

- **Primary command:** `/productfeeling states` — design risky actions with undo, previews, and proportionate confirmation
- **Related commands:** `/productfeeling trust`, `/productfeeling friction`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "destructive action", "confirmation dialog", "undo", "prevent mistake", "irreversible action"
- **Companion handoff:** Impeccable — confirmation, preview, undo, and validation recovery UI; RedTeam — when safeguards may block legitimate exit or privacy choices
- **Feeling north star this TTP serves:** confident exploration without costly slips
- **Anti-goals:** confirmation fatigue, vague warnings, blocking ordinary work, mistaking prevention for outage recovery
- **Reference path:** `skill/reference/states.md`
