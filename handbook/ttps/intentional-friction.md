# Intentional Friction


Add a small, purposeful pause when moving quickly could create harm, regret, or an avoidable mistake.

## What it is

Intentional Friction is a deliberate extra moment inserted into a flow at the one point where slowing down actually protects the person moving through it: a confirmation before permanent deletion, a preview before publishing to an audience, a cooling-off period before an expensive commitment, a required review of the details that matter. It is the narrowest tool in this handbook's friction toolkit—a single, purposeful pause—rather than a general licence to make things slower.

It sits at one end of the spectrum this handbook maps in [Friction](../concepts/04-friction.md): most friction should be removed because it sits on the user's path to value and serves nobody, but a small remainder should be added on purpose because removing it would let a good decision be made too fast to be a good decision at all. [Fail Safe](fail-safe.md) is the broader design discipline this pattern belongs to—safer defaults, undo, preserved input—and Intentional Friction is specifically the *confirmation* tool within it, reserved for the subset of actions that are genuinely hard to reverse rather than deployed reflexively on anything that feels important.

## Why it works

Even small costs reliably change what people do next, which is usually the argument for stripping friction out of a flow—but the same sensitivity that makes friction dangerous on the path to value makes it useful at a genuine point of risk. A deliberate pause interrupts the momentum that produces slips: the click made on autopilot, the send made before rereading, the delete made without registering what would be lost. [Friction](../concepts/04-friction.md) frames this as the allocation question that runs through the whole handbook—remove friction from the user's path to value, add it only where speed would hurt the user, never where slowness merely profits the business.

The concrete failure mode this TTP prevents is the irreversible mistake made in a moment of inattention: the deleted project, the message sent to the wrong audience, the subscription upgraded by muscle memory. What goes wrong when it is overdone is just as damaging to the same goal—confirmation dialogues added to routine actions until people click through them without reading a word, at which point the safeguard has stopped protecting anyone and started training exactly the blind-click behaviour it was meant to prevent. And when this pattern is aimed at cancellation, refunds, or consent rather than at genuine risk, it stops being protective friction and becomes the sludge that [Friction](../concepts/04-friction.md) explicitly warns against—friction that profits the company at the user's expense, dressed up in the same UI as the pattern that protects them.

## When to use it

- Deleting, overwriting, exporting, or sharing consequential data
- Sending money, changing a subscription, or confirming a high-value purchase
- Publishing to an audience the user may not expect
- Enabling a setting with material privacy, safety, or financial effects
- Capturing information that genuinely improves **Personalisation** or setup value

## Do

- State the consequence in plain language before the irreversible action
- Offer undo, recovery, preview, or a safe default where possible
- Ask only for the information required to create immediate user value
- Test whether the pause prevents mistakes without blocking legitimate progress
- Pair with **Fail Safe**, **Permission Serve**, and **Progressive Disclosure**

## Don't

- Add hurdles to cancellation, refunds, account deletion, or privacy choices
- Gate core value behind needless setup questions
- Use “commitment” steps to pressure an upgrade or paywall conversion
- Make users repeat work because the product failed to save or explain it

## Founder Tip

Before adding a step, name the regret it prevents. If you cannot name one, remove the step.

## Make It Yours

1. **Identify the consequence**
   - What could the user lose, expose, spend, or regret?
   - Is the action truly hard to reverse?

2. **Choose the lightest safeguard**
   - Would an undo window, preview, or default solve the risk better than a modal?
   - Can the user understand the consequence in one sentence?

3. **Make the pause useful**
   - What information helps the user decide now?
   - Can the pause offer a safer alternative rather than only “Cancel”?

4. **Audit for coercion**
   - Would this same friction be acceptable on cancellation and consent flows?
   - Is it protecting the user’s interest, or the company’s metric?

5. **Measure the right outcome**
   - Do errors, reversals, and support requests fall?
   - Are successful completions and user confidence preserved?


## Related concepts

- [Friction](../concepts/04-friction.md)
- [User Agency](../concepts/12-user-agency.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [EAST: Four simple ways to apply behavioural insights](https://www.bi.team/wp-content/uploads/2014/04/BIT-EAST-handbook.pdf) — explains why even small friction costs alter behaviour and should be used with care.
- [Nielsen Norman Group: Preventing User Errors](https://www.nngroup.com/articles/slips/) — practical distinction between slips and mistakes, with design implications.
- [Nielsen Norman Group: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — durable guidance on error prevention, feedback, and user control.
- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf) — documents how unnecessary friction can trap people in unwanted choices.

## Agent skill

- **Primary command:** `/productfeeling friction` — add purposeful pause only where speed risks harm, regret, or irreversible loss
- **Related commands:** `/productfeeling trust`, `/productfeeling states`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "confirmation step", "cooling off", "preview before publish", "protective pause", "consequential action"
- **Companion handoff:** Impeccable — preview, confirmation, and undo UI; RedTeam — when friction protects company metrics on cancel, refund, or privacy flows
- **Feeling north star this TTP serves:** informed, reversible decisions at real risk
- **Anti-goals:** cancellation hurdles, needless setup gates, commitment pressure, repeated work from product failure
- **Reference path:** `skill/reference/friction.md`
