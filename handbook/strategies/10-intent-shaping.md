# Intent Shaping


Invite people to declare what they want—then adapt the product to that choice, with skip, edit, and exit intact.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Intent shaping is the practice of inviting a person to declare what they actually want—a goal, a preference, a starting configuration—and then visibly adapting the product around that declaration, with skip, edit, and exit always available and always working. It is the opposite of silent inference: rather than guessing what a user wants from behavioural signals alone and quietly personalising around that guess, intent shaping asks, listens, and then shows its work.

This matters because declared intent and inferred intent produce very different feelings even when they produce the same outcome. A product that asks "what are you trying to do?" and then configures itself accordingly feels responsive and collaborative; a product that silently infers the same configuration from click patterns and never explains why feels surveilled, even when the guess is correct. The strategy's entire value proposition rests on that difference remaining visible to the user.

## Why it works

People commit more fully to paths they chose than to paths chosen for them—a well-documented finding often summarised as the [commitment and consistency principle](../ttps/commitment.md): a small, voluntary declaration ("I'm here to do X") makes the person more likely to follow through on X, because backing out would mean contradicting a choice they made freely. This only works when the commitment is genuinely low-stakes and freely reversible; a forced declaration, or one framed to be difficult to walk back later, converts a trust-building technique into a foot-in-the-door manipulation, which is exactly the failure mode this strategy exists to prevent.

The follow-through half of the mechanism depends on [Progressive Disclosure](../ttps/progressive-disclosure.md) and [Setup Defaults](../ttps/setup-defaults.md): a declared intent is worthless if the product does not visibly change in response to it. [Setup Defaults](../ttps/setup-defaults.md) give people a credible, inspectable starting point built from what they said, which does double duty—it demonstrates the product listened, and it gives the person something concrete to correct rather than a blank page to fill in from nothing, which is consistently easier for people to act on.

## Core Tools, Techniques, and Practices (TTPs)

- [Investment](../ttps/investment.md): Help users build something that becomes more useful because they shaped it
- [Personalisation](../ttps/personalisation.md): Make the product fit the user’s stated needs—without making assumptions they cannot inspect or change
- [Setup Defaults](../ttps/setup-defaults.md): Give users a credible starting point they can understand, change, or skip
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [Commitment](../ttps/commitment.md): Let users declare their intent, then design the product around it

## Supporting Tools, Techniques, and Practices (TTPs)

- [Effort Moat](../ttps/effort-moat.md): Honour what people have built, so their progress remains useful and recognisable
- [Intent Mirroring](../ttps/intent-mirroring.md): Notice a meaningful signal, then offer a small, optional next step that fits the user’s likely goal
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Sandbox Experience](../ttps/sandbox-experience.md): Let people experience a truthful slice of product value before asking them to commit

## Insights & Metrics

Measure whether intent was freely given and whether the product actually fitted around it—not how much you extracted.

1. Voluntary Intent Declaration Rate
   - Formula: (Users who state a goal or preference when offered ÷ Users shown the optional ask) × 100
   - What it measures: Willingness to declare intent when skip is real
   - Why it matters: Forced declarations pollute data and teach users to click through; voluntary ones predict fit
2. Intent Follow-through Rate
   - Formula: (Users who take the next intent-aligned action ÷ Users who declared that intent) × 100
   - What it measures: Whether the experience adapts usefully after a declaration
   - Why it matters: Declaration without a better path is theatre—Commitment without design follow-through
3. Preference Ask Completion Rate
   - Formula: (Optional preference or profile steps completed ÷ Steps started) × 100
   - What it measures: Friction in progressive, just-in-time asks (not mandatory walls)
   - Why it matters: Long or premature asks kill momentum; compare to skip-and-continue outcomes
4. Default Override Rate
   - Formula: (Users who change a setup default in the first week ÷ Users who saw that default) × 100
   - What it measures: Whether defaults are credible starting points or silent lock-in
   - Why it matters: Sensible overrides mean people can steer; near-zero with no discoverable edit path often means trapped agency

## Behind the Data

Diagnose whether you are inviting intent—or cornering people into commitments and data they did not choose.

### Voluntary commitment

- Is Commitment optional, skippable, and reversible—or required before any value?
- After a declared intent, does the product change in a way users can notice and undo?
- Do Sandbox or Trial paths reach truthful value before account or preference walls?

### Ask timing & load

- Which preference fields drive the most abandonment—and what value did that ask promise?
- Does progressive collection outperform upfront questionnaires for the same later engagement?
- When do Intent Mirroring prompts help vs feel like surveillance?

### Fit after intent

- Do users who declare intent activate or retain better than those who skip—and is the ask itself selecting for motivated users?
- Which defaults get overridden most—and does that signal a wrong default or a healthy edit path?
- Does Personalisation reflect stated needs, or opaque inferences users cannot inspect?

## Further reading

- [The Principle of Commitment and Behavioral Consistency (Nielsen Norman Group)](https://www.nngroup.com/articles/commitment-consistency-ux/) — Low-stakes, trust-matched commitments—and why high-stakes early asks backfire.
- [Progressive Disclosure (NN/g)](https://www.nngroup.com/articles/progressive-disclosure/) — Reveal complexity when needed without burying capability.
- [The Power of Defaults (NN/g)](https://www.nngroup.com/articles/the-power-of-defaults/) — Why most people stick with defaults—and how to choose helpful, non-exploitative ones.
- [Three Methods to Increase User Autonomy in UX Design (NN/g)](https://www.nngroup.com/articles/increase-user-autonomy/) — Meaningful defaults and postpone-able personalisation that preserve choice.
- [Customization vs. Personalization in the User Experience (NN/g)](https://www.nngroup.com/articles/customization-personalization/) — User-controlled vs system-controlled fit; why inspectability matters.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `jobs → persona → states → friction → brief`
- **Core TTPs to load:** Investment, Personalisation, Setup Defaults, Progressive Disclosure, Commitment
- **Supporting TTPs:** Effort Moat, Intent Mirroring, Success Moments, Sandbox Experience
- **When the agent should use this strategy:** "goal selection", "preference onboarding", "progressive profiling", "declare intent", "product fit quiz", "setup wizard"
- **Companion handoff:** Impeccable — preference, goal-selection, and default-edit UI; DocSlime — when the intent model, persona segments, or personalisation rules belong in `docs/strategy/` or `docs/experience/`; RedTeam — before mandatory profiling walls or opaque inference (`/redteam review` on whether skip and edit paths are real)
- **Feeling north star this strategy serves:** agency with clarity of purpose and earned fit
- **Anti-goals:** forced Commitment, coercive foot-in-the-door, opaque personalisation, data walls before value, shame for skipping
- **Reference path:** `skill/reference/sequence.md`
