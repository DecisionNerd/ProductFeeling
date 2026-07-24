# Personalisation


Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change.

## What it is

Personalisation adapts what a product shows, suggests, or defaults to based on what a specific user has told it, or on behaviour patterns narrow and stable enough that the user could recognise and confirm them if asked. It's a durable, standing adaptation—a saved preference, a recommended workflow, a default tuned to a stated goal—that persists across sessions and stays visible enough to edit or turn off. That distinguishes it from **Intent Mirroring**, its closest relative: intent mirroring reflects back a single signal from the moment at hand ("you just did X, want Y?"), while personalisation is the accumulated, longer-running shape of the product around a person. Both have to clear the same bar—the user could explain, in plain terms, why they're seeing what they're seeing—but personalisation is the one that has to keep clearing it session after session, as the shape it built becomes part of how the product feels to that person.

A tool that remembers a user chose "freelancer" during setup, and quietly tailors its default invoice template and dashboard metrics to that choice, is personalising correctly: the input was given knowingly, the adaptation is visible in what changed, and switching it off just returns to a generic-but-usable default. A tool that infers the same thing from browsing patterns the user never confirmed, and uses it to silently change pricing or eligibility, has crossed from personalisation into an inference the user cannot see, question, or consent to.

## Why it works

Relevance is a shortcut through the exact kind of repeated, low-stakes decision that **Friction** counts as cognitive cost: reselecting the same filters, re-explaining the same goal, wading past options that were never going to apply. When the product remembers what a user already told it and acts on that, it removes a small decision every time, and **Jobs-to-be-Done** explains why that lands emotionally rather than just efficiently—the user isn't just saving clicks, they're being recognised as someone with a specific situation, not a generic account. **Investment and Continuity** names the deeper version of the same effect: when a contribution a user made keeps paying off in later sessions, the product starts to feel like something they've shaped, rather than something they merely use.

Skip personalisation entirely and every return visit costs the user the same setup tax it cost the first time, quietly undermining the sense of continuity that makes people attach to a product. But the failure on the other side is worse, not milder: personalisation built on inferences a user never confirmed and cannot inspect stops being relevance and starts being surveillance wearing relevance's clothes, and the moment it's used to route people toward different prices or opportunities without their knowledge, it fails the honest-defaults test **User Agency** applies to everything else. The test that separates the two isn't how much data was used—it's whether the person on the receiving end could explain, out loud, why they're seeing what they're seeing.

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
