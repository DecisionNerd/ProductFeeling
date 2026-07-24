# The Paywall


Present a clear, fair upgrade decision when users understand the value on offer.

## What it is

The Paywall is the standing decision point where a user who already understands what a product does chooses whether to pay for continued or expanded access—distinct from Limited Offer, which layers a genuine, time-bound discount or extension on top of an otherwise fair paywall and must never be mistaken for the paywall itself. A paywall's economics should be just as legible with any countdown removed: what's available now, what paid access adds, what it costs, and what changes after the choice is made. Done well, it reads less like a locked door and more like a menu the user was always going to reach once they understood the product.

Consider a notes app that keeps capture completely free but places cross-device sync behind a plan, shown only once someone has felt the specific pain of a note trapped on the wrong device—the ask arrives exactly when its value is self-evident, not before.

## Why it works

Jobs-to-be-Done explains why timing does most of the work here: people can only price a capability sensibly once they've felt the progress it enables, so a paywall shown before that progress is experienced asks users to value something abstract, which produces either under-conversion or a resentful "yes" that churns later. A paywall is also a promise—price, terms, what happens next—and Calibrated Trust treats every such claim as testimony the user is quietly cross-examining; a paywall that hides auto-renewal or buries cancellation is exactly the kind of confident, broken promise that collapses trust fastest and is hardest to earn back.

Skip a deliberate paywall moment and monetisation either never gets asked for cleanly, leaving revenue on the table, or gets smuggled in through pressure tactics instead—guilt, false urgency, obstructive comparisons—which is the failure mode User Agency's symmetry test exists to catch: if declining takes visibly more effort than accepting, the moment has stopped being a fair choice.

## When to use it

- When a user requests a genuinely paid capability or reaches a clear plan boundary
- After sufficient preview or use to understand the relevant benefit
- At renewal, trial expiry, or feature-limit moments with material terms visible

## Do

- State price, billing cadence, trial terms, limits, and cancellation path plainly
- Connect the upgrade to the user’s current job and the capability it enables
- Keep the free path and decline option visible and functional

## Don't

- Use guilt, false scarcity, obstructive comparison, or disguised decline actions
- Remove previously granted access without prominent, advance notice
- Make cancellation, downgrading, or checking terms harder than subscribing

## Founder Tip

The best paywall makes the right customer say “yes” and lets everyone else say “not now” without regret.

## Make It Yours

1. What paid capability delivers a distinct, understandable outcome?
2. Has the user seen enough relevant value to assess the offer?
3. Are every material term and the cancellation route visible before consent?
4. Can users compare plans and decline without confusion or pressure?
5. What evidence would show the paywall is improving trust as well as conversion?


## Related concepts

- [User Agency](../concepts/12-user-agency.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800+Dark+Patterns+Report+9.14.2022+-+FINAL.pdf) — Details deceptive subscription and cancellation tactics to avoid.
- [FTC Negative Option Marketing Policy Statement](https://www.ftc.gov/system/files/documents/public_statements/1598063/negative_option_policy_statement-10-22-2021-tobureau.pdf) — Durable guidance on disclosures, consent, and simple cancellation.
- [Auto-renewable subscriptions](https://developer.apple.com/app-store/subscriptions/) — Apple’s product guidance for communicating subscription value and terms.

## Agent skill

- **Primary command:** `/productfeeling anti-patterns` — audit upgrade moments for pressure, obscured terms, and cancellation sludge
- **Related commands:** `/productfeeling trust`, `/productfeeling friction`, `/productfeeling jobs`
- **When the agent should load this TTP:** "paywall design", "upgrade screen", "subscription pricing", "trial expiry", "plan comparison"
- **Companion handoff:** RedTeam — stress-test pricing pressure and decline-path fairness; Impeccable — paywall layout and terms visibility
- **Feeling north star this TTP serves:** confident fair upgrade decisions with visible free path
- **Anti-goals:** guilt and false scarcity, removing access without notice, cancellation harder than subscribing
- **Reference path:** `skill/reference/anti-patterns.md`
