# Intent Mirroring


Notice a meaningful signal, then offer a small, optional next step that fits the user’s likely goal.

## What it is

Intent Mirroring adapts the interface to behaviour the user has just shown, in the moment they show it: comparing the same two plans twice, repeating a filter, returning to an unfinished draft, searching for the same term again after a rephrase that didn't help. The product reflects that signal back as relevant help, a shortcut, or a clearer path—it is a form of mixed-initiative design, where the product offers assistance without ever taking the wheel.

The distinction worth holding onto is with [Personalisation](personalisation.md), its more durable cousin. Intent Mirroring reacts to a signal from the current session—it is local, temporary, and disappears once the moment passes. Personalisation is what a product remembers about a user across sessions and openly surfaces as a standing preference. A comparison-page nudge that appears because you just toggled between two plans three times is mirroring; a homepage that greets you by name and shows your saved filters every time is personalisation. Confusing the two tends to produce mirroring that never turns off, which starts to feel less like a shortcut and more like being watched.

## Why it works

People should not have to restate a goal the product can plainly see them pursuing—when someone has already shown what they are trying to do, making them explain it again from scratch is a small tax on exactly the moment their patience is thinnest. A well-timed reflection removes that tax and restores orientation, which matters most in dense flows like search, onboarding, or plan comparison, where a wrong turn is easy and a nudge back on course is cheap to deliver and expensive to skip.

The mechanism only works if the underlying signal is treated as evidence, not proof—[User Agency](../concepts/12-user-agency.md) is the test that separates a genuine assist from a manipulation dressed as one. The concrete failure mode this TTP prevents is a product that forces users to keep re-explaining themselves, which reads as indifference even when nothing else is wrong. The failure mode it can *cause*, if overdone, is worse: treating a hover, a pause, or one click as proof of hesitation and using that inference to intensify a paywall or a discount is not mirroring, it is surveillance wearing mirroring's clothes—and it is precisely the kind of inference [User Agency](../concepts/12-user-agency.md) asks whether the user would endorse on reflection.

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

- **Primary command:** `/productfeeling jobs` — reflect recent behaviour with one optional assist tied to likely progress
- **Related commands:** `/productfeeling persona`, `/productfeeling tone`, `/productfeeling friction`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "behavioural suggestion", "adaptive UI", "resume draft", "repeated search", "mixed initiative"
- **Companion handoff:** Impeccable — dismissible assist UI and transparent personalisation copy; RedTeam — when inferred intent drives paywall pressure or sensitive profiling
- **Feeling north star this TTP serves:** helpful orientation without taking control
- **Anti-goals:** hover-as-intent, paywall pressure from hesitation, sensitive inferences, vague magic personalisation
- **Reference path:** `skill/reference/jobs.md`
