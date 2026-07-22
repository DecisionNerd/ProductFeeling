# Intent Mirroring


Notice a meaningful signal, then offer a small, optional next step that fits the user’s likely goal.

## What it is

Intent Mirroring adapts the interface to behaviour the user has just shown: comparing plans, repeating a filter, returning to a draft, or searching for the same thing twice. It reflects that signal with relevant help, a shortcut, or a clearer path.

It is a form of mixed-initiative design: the product offers assistance without taking control.

## Why it works

People should not have to restate a goal the product can reasonably see. A well-timed suggestion can reduce effort and restore orientation, especially in dense flows such as search, onboarding, or plan comparison.

The key word is *reasonably*. Behaviour is evidence, not certainty. Helpful mirroring keeps the user in charge: it offers, explains, and gets out of the way.

## When to use it

- A user repeats a search, filter, or navigation path
- A comparison flow shows clear, local signals of uncertainty
- A draft, setup, or task is resumed after a pause
- Discovery or onboarding can offer a relevant next action without interrupting progress

## Do

- Use high-confidence, recent signals from the current task
- Offer one useful action: a template, saved comparison, shortcut, or plain-language explanation
- Make the suggestion easy to dismiss and do not repeat it after dismissal
- Explain personalisation where behaviour or personal data meaningfully shapes the experience
- Pair with **Discovery**, **Progressive Disclosure**, and **JTBD Copywriting**

## Don't

- Treat hovering, pausing, or one click as proof of intent
- Use inferred hesitation to intensify a paywall, discount, or emotional pressure
- Surprise users with sensitive inferences about health, finances, identity, or relationships
- Hide behavioural profiling behind vague “magic” language

## Founder Tip

Design the assist before the nudge: if the suggestion does not save a real next step, it is probably interruption disguised as personalisation.

## Make It Yours

1. **Choose a real signal**
   - Which repeated action reliably suggests a current task or obstacle?
   - Is the signal recent enough to matter?

2. **Name the helpful response**
   - What one action would remove effort: save, compare, resume, filter, or explain?
   - Can the user get the same help without sharing more data?

3. **Set a confidence threshold**
   - What other explanation could this behaviour have?
   - What should happen when confidence is low? Usually, show nothing.

4. **Protect agency**
   - Can the user dismiss or turn off the adaptation?
   - Does the suggestion preserve a clear route to continue independently?

5. **Check the feeling**
   - Would a user describe this as “helpful” rather than “watching me”?
   - Are you measuring resolved tasks and satisfaction, not only conversion?


## Related concepts

- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [User Agency](../concepts/12-user-agency.md)
- [Friction](../concepts/04-friction.md)

## Further reading

- [Principles of Mixed-Initiative User Interfaces](https://www.microsoft.com/en-us/research/publication/principles-mixed-initiative-user-interfaces/) — foundational guidance for assistance that works alongside direct user control.
- [Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) — practical guidance for calibrated, controllable adaptive behaviour.
- [ICO: Lawfulness, fairness and transparency](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/lawfulness-fairness-and-transparency/) — why inferred-data use must be clear, fair, and unsurprising.
- [ICO: Profiling for content delivery and service personalisation](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/how-to-use-our-guidance-for-standard-one-best-interests-of-the-child/best-interests-framework/profiling-for-content-delivery/) — safeguards for personalisation, particularly where children may use a service.

## Agent skill

- **Primary command:** `TODO`
- **Related commands:** `TODO`
- **When the agent should load this TTP:** `TODO`
- **Companion handoff:** `TODO`
- **Feeling north star this TTP serves:** `TODO`
- **Anti-goals:** `TODO`
- **Reference stub path:** `skill/reference/TODO.md`
