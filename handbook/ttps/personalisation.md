# Personalisation


Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change.

## What it is

Personalisation adapts content, defaults, guidance, or presentation to a user’s goals, preferences, and context. It can use choices they explicitly provide or carefully bounded behavioural signals, then gives them meaningful control over the result.

## Why it works

Relevant experiences reduce needless decisions and help users recognise a product as useful to their situation. The best personalisation is legible: users can see why something changed, adjust it, and still use the product well without sharing more data.

## When to use it

- When a stated goal can make onboarding, recommendations, or defaults more useful
- When users repeatedly configure the same settings or return to a recognisable workflow
- When **Setup Defaults**, **Intent Mirroring**, or **Progressive Disclosure** can respond to a clear user preference

## Do

- Start with information the user knowingly supplied; explain meaningful inferences in plain language
- Let people edit, reset, or turn off personalised settings without losing core access
- Personalise toward an immediate job: a relevant starting template, next step, or saved preference

## Don’t

- Infer or expose sensitive attributes that users did not expect you to use
- Make a personalised route the only route, especially when it affects price, eligibility, or opportunity
- Confuse surveillance with relevance; more data is not automatically better personalisation

## Founder Tip

Earn the right to personalise. A small, visible preference that saves someone time is more valuable than a clever guess that feels invasive.

## Make It Yours

1. To find a useful moment:
   - Which repeated decision could the product remember for the user?
   - What stated goal would make the next screen more relevant?
2. To choose signals:
   - What can the user explicitly tell us instead of forcing an inference?
   - Is this signal necessary for the value we plan to provide?
3. To make it understandable:
   - Could a user explain why they are seeing this recommendation or default?
   - Where should we show the preference that shaped it?
4. To preserve control:
   - Can the user change, reset, or decline this adaptation in one clear action?
   - Does the non-personalised experience remain useful?
5. To check the feeling:
   - Would this feel helpful if it appeared unexpectedly?
   - Are we helping the user make progress, or optimising for our own engagement metric?


## Related concepts

- [User Agency](../concepts/12-user-agency.md)
- [Investment and Continuity](../concepts/13-investment-and-continuity.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)

## Further reading

- [Personalization in UX](https://www.nngroup.com/articles/personalization-ux/) — Nielsen Norman Group on making customisation useful rather than distracting.
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework) — a durable framework for managing privacy risk in data-informed products.
- [Data protection by design and default](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-by-design-and-default/) — ICO guidance on minimisation and user-centred safeguards.
- [The Personalization Paradox](https://doi.org/10.1016/j.jretai.2015.12.002) — research on the trade-off between relevance and perceived intrusiveness.

## Agent skill

- **Primary command:** `/productfeeling persona` — shape adaptations from stated needs with legible control and bounded signals
- **Related commands:** `/productfeeling jobs`, `/productfeeling friction`, `/productfeeling states`
- **When the agent should load this TTP:** "personalised defaults", "recommended for you", "preference settings", "adaptive onboarding", "reset personalisation"
- **Companion handoff:** DocSlime — preference and data-use policy in product docs; Impeccable — preference controls and explainability UI
- **Feeling north star this TTP serves:** relevant fit the user can inspect and change
- **Anti-goals:** unexpected sensitive inferences, personalised-only routes, surveillance disguised as relevance
- **Reference path:** `skill/reference/persona.md`
