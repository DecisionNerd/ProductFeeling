# Limited Offer


Present a genuine, time-bound offer when it creates a fair choice, not pressure.

## What it is

A Limited Offer is a clearly defined price, credit, trial extension, or bundle available for a real and disclosed period—not a general licence to add urgency to a pricing screen. It sits on top of [The Paywall](the-paywall.md), never instead of it: the paywall's job is to make the standing decision (what does paid access cost, and what does it add) legible on its own merits; a Limited Offer is a genuine, time-bound *delta* layered on that already-fair decision, useful for a user who already understands the value and only needs a practical reason to decide this week rather than next month.

The word doing the real work in this card is "genuine." The eligibility, the end date, the renewal terms, and the price after expiry all have to be true and understandable before the user accepts—if any of them would not survive being screenshotted and shown to a stranger, the offer has already crossed from a fair deal into the territory this handbook refuses.

## Why it works

A real deadline gives people a legitimate reason to prioritise a decision they were already inclined to make, which is a genuinely useful service when the boundary is operational or commercial and not invented for the occasion—it works because it resolves procrastination on a decision the user has already substantively made, not because it manufactures a decision they hadn't. [User Agency](../concepts/12-user-agency.md) frames the test precisely: would this pressure survive the user learning, a week later, exactly how the deadline was constructed?

The concrete failure mode this pattern exists to serve is genuine indecision on real value—someone who has used the trial, likes the product, and is drifting rather than deciding. What goes wrong when it is faked is well documented and specific: a countdown that resets on refresh, scarcity that was invented rather than real, or a decline path that is harder to find than the accept button are recognised dark patterns that regulators now treat as deceptive rather than merely aggressive, and users who feel timed into a purchase tend to reconcile the story eventually—as a refund request, a chargeback, or a review warning the next person not to trust the timer. [Calibrated Trust](../concepts/11-calibrated-trust.md) is unforgiving about this: users calibrate on your worst confident lie, not your average honesty, and a fake deadline is exactly that kind of lie.

## When to use it

- A real introductory price, seasonal package, or event-bound promotion
- A trial expiry with clear renewal terms and a fair reminder
- A user-initiated upgrade moment after they have experienced relevant value
- A re-engagement campaign where consent, frequency, and eligibility are clear

## Do

- State the exact end date, eligibility, price, and price after the offer
- Make “No thanks” or “Keep my current plan” as clear as acceptance
- Use a countdown only when it reflects a real, non-resetting deadline
- Let users compare plans and return to the decision without losing access unfairly
- Pair with **The Paywall**, **Premium Positioning**, and **JTBD Copywriting**

## Don't

- Invent low stock, scarcity, social proof, or a deadline
- Intercept account deletion or cancellation with obstructive discounts
- Repeatedly show an offer after a user declines
- Hide auto-renewal, price changes, eligibility limits, or cancellation terms
- Target financial distress, vulnerability, or sensitive inferred behaviour

## Founder Tip

If you would not show the offer’s terms in a support reply or investor deck, it is not clear enough to show in a checkout flow.

## Make It Yours

1. **Prove the limit**
   - What makes this offer genuinely time-bound or limited?
   - Who owns the decision to extend it, and what happens when it ends?

2. **Make the economics legible**
   - What does the user pay now, later, and after renewal?
   - Which terms must be visible before acceptance rather than behind a link?

3. **Choose the respectful moment**
   - Has the user experienced the value the offer relates to?
   - Are they actively considering an upgrade, rather than trying to leave?

4. **Preserve a real choice**
   - Is declining as easy as accepting?
   - Will users see the same offer again only when they have opted in or re-engaged?

5. **Evaluate trust, not only revenue**
   - Are refunds, cancellations, complaints, and support contacts stable?
   - Do users understand the offer when asked in their own words?


## Related concepts

- [User Agency](../concepts/12-user-agency.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf) — official guidance identifying baseless countdown timers and false scarcity as deceptive.
- [Competition and Markets Authority: Online Choice Architecture](https://assets.publishing.service.gov.uk/media/6231ea3d8fa8f5277bc75ef2/Online_choice_architecture_discussion_paper.pdf) — evidence and policy discussion on digital design that distorts consumer choice.
- [UK Competition and Markets Authority: Pricing practices](https://www.gov.uk/government/publications/pricing-practices-guide-for-traders) — practical expectations for clear and non-misleading pricing.
- [Nielsen Norman Group: Dark Patterns](https://www.nngroup.com/articles/dark-patterns/) — UX framing for recognising and avoiding manipulative interface choices.

## Agent skill

- **Primary command:** `/productfeeling anti-patterns` — audit urgency, scarcity, and decline paths for deceptive or coercive mechanics
- **Related commands:** `/productfeeling friction`, `/productfeeling review`, `/productfeeling trust`, `/productfeeling jobs`
- **When the agent should load this TTP:** "limited time offer", "countdown timer", "intro pricing", "trial expiry", "promotional deadline"
- **Companion handoff:** Impeccable — offer modal, decline path, and renewal-term UI; DocSlime — pricing, eligibility, and cancellation policy requirements; RedTeam — when urgency is proposed without a genuine operational limit
- **Feeling north star this TTP serves:** fair choice with legible terms, not manufactured pressure
- **Anti-goals:** fake scarcity, reset timers, obstructive cancel discounts, hidden auto-renewal, repeated decline nagging
- **Reference path:** `skill/reference/anti-patterns.md`
