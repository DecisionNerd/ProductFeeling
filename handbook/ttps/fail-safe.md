# Fail Safe


Protect people from costly mistakes while keeping ordinary work moving.

## What it is

Fail Safe designs risky actions so users can prevent or reverse mistakes before they become incidents. It combines safer defaults, clear consequences, preserved work, undo where possible, and proportionate confirmation where an action is genuinely irreversible.

## Why it works

People explore more confidently when they know an accidental tap will not destroy their work or create a costly commitment. This card is *prevention*: safer defaults, clear consequences, undo, and proportionate confirmation at real risk—see [Friction](../concepts/04-friction.md) (protective friction) and [Calibrated Trust](../concepts/11-calibrated-trust.md).

When failure has already happened, use [Graceful Recovery](graceful-recovery.md) ([Peak–End Rule](../concepts/07-peak-end-rule.md), error states in [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)). Do not turn every action into a confirmation dialog—that trains people to click through.

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
