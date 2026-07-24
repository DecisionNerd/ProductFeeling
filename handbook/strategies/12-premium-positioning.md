# Premium Positioning


Earn a premium reputation—and pricing power—through craft signals users can feel, not claims they must take on faith.

**Prerequisite:** [Customer Discovery](../discovery/index.md) — know who this is for and what state they arrive in. Related concepts: [Feeling North Star](../concepts/01-feeling-north-star.md), [Tools, Techniques, and Practices](../concepts/02-tools-techniques-practices.md).

## What it is

Premium positioning is earning a reputation—and the pricing power that comes with it—through craft signals a person can actually feel while using the product, rather than through claims made in marketing copy that the product itself does nothing to substantiate. "Premium" here is not a price tier; it is a quality of experience: consistent spacing and motion, restraint where restraint communicates confidence, waits that are honestly explained rather than artificially inflated, and small flourishes that appear only where they are earned by an already-solid interaction.

This strategy is easy to mistake for [Experience Refinement](08-experience-refinement.md), and the two overlap heavily in technique, but the goal is different: refinement asks "does this feel considered," while premium positioning asks "does this justify what we charge, or what we want to charge." A product can be thoroughly refined and still be positioned as accessible and unpretentious; premium positioning is the deliberate choice to let craft carry pricing weight.

## Why it works

The [aesthetic–usability effect](../concepts/08-aesthetic-usability-effect.md) is again the mechanism: people infer quality and reliability from visual and interaction polish, often before they have any functional basis for that judgement, and that inferred quality directly shapes what price feels fair. This is a real perceptual effect, not a trick—but it is also dangerous when it outruns substance, because craft that promises more than the product delivers converts the first disappointment into a much sharper sense of betrayal than a plainer product would have caused.

The durable version of this strategy pairs restraint with honesty: a purposeful pause before a consequential action can *increase* perceived value the same way a maître d' checking a reservation twice signals a well-run restaurant, but only if the pause reflects something real rather than manufactured delay designed to seem more expensive than it is. [JTBD Copywriting](../ttps/jtbd-copywriting.md) and [Pattern Alignment](../ttps/pattern-alignment.md) do quieter, equally important work here: pricing power holds up best when the value a premium tier promises is stated in the customer's own language and delivered through interactions that behave exactly the way a careful, competent product should.

## Core Tools, Techniques, and Practices (TTPs)

- [Perceived Effort Delay](../ttps/perceived-effort-delay.md): When work takes time, show the real work; when it does not, respect the user’s time.
- [Small Quirk](../ttps/small-quirk.md): A small, repeatable flourish that makes a clear product interaction feel recognisably yours.
- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete.
- [Intentional Friction](../ttps/intentional-friction.md): Add a small, purposeful pause when moving quickly could create harm, regret, or an avoidable mistake.
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate.

## Supporting Tools, Techniques, and Practices (TTPs)

- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next.
- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Write from the progress the user is trying to make, not the feature your product wants to describe.
- [Pattern Alignment](../ttps/pattern-alignment.md): Use familiar mental models where they help people act with confidence.
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find.

## Insights & Metrics

Measure whether craft and clarity translate into willingness to pay—and whether “premium” users stay satisfied.

1. Average Revenue Per User (ARPU)
   - Formula: Total revenue in period ÷ Average active users in the same period
   - What it measures: Revenue intensity across the base (segment by free vs paid when you can)
   - Why it matters: Rising ARPU with stable satisfaction usually signals earned pricing power, not just a price hike
2. Conversion by Price Tier (Price Sensitivity)
   - Formula: (Users who convert at tier T ÷ Users exposed to tier T) × 100 — compare across tested prices/packages
   - What it measures: How demand holds as price or package complexity rises
   - Why it matters: Shows whether perceived value still clears the ask at premium points
3. Premium Cohort Satisfaction & Retention
   - Formula: Customer satisfaction (CSAT) or Net Promoter Score (NPS) for paid or advanced-feature users; plus retention (or logo churn) for that cohort vs the rest
   - What it measures: Whether the premium experience delivers after the purchase
   - Why it matters: Premium that looks refined but disappoints in use erodes reputation faster than a plain product

## Behind the Data

Find where polish, restraint, or purposeful pause elevates quality—and where decoration, delay, or inconsistency cheapens it.

### Craft & consistency

- Where do users describe the product as “cheap,” “busy,” or “inconsistent” versus “considered” or “trustworthy”?
- Which surfaces break the visual or interaction system (spacing, motion, copy tone, empty states)?
- Do Micro Interactions and Small Quirks feel earned on core jobs—or ornamental noise?

### Value perception & pricing

- At which moment does willingness to pay rise or collapse (first value, advanced feature, invoice, renewal)?
- Which benefits justify a higher tier in users’ own words—not yours?
- Does longer Time to Value or unclear JTBD Copywriting make premium pricing feel arbitrary?

### Friction that elevates vs erodes

- Where does Intentional Friction increase confidence (confirmations, reviews) versus where it feels like a status gate?
- Are waits explained with Loading Feedback and real Perceived Effort Delay—or do they feel like theatre?
- Which Progressive Disclosure paths keep power-users deep without overwhelming everyone else?

## Further reading

- [Consumer Perceptions of Price, Quality, and Value (Zeithaml, 1988)](https://doi.org/10.1177/002224298805200302) — Canonical model linking price, perceived quality, and perceived value.
- [The Aesthetic-Usability Effect (Nielsen Norman Group)](https://www.nngroup.com/articles/aesthetic-usability-effect/) — Why craft raises perceived quality—and can mask real usability debt in research.
- [Emotional Design: People and Things (Don Norman)](https://jnd.org/emotional-design-people-and-things/) — Visceral, behavioural, and reflective levels that shape “this feels premium.”
- [Good Visual Design, Explained (NN/g)](https://www.nngroup.com/articles/good-visual-design/) — Hierarchy, consistency, and restraint as practical quality signals.
- [Trustworthiness in Web Design: 4 Credibility Factors (NN/g)](https://www.nngroup.com/articles/trustworthy-design/) — How visual quality and clarity feed credibility judgments.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `audit → tone → delight → intensity → critique`
- **Core TTPs to load:** Perceived Effort Delay, Small Quirk, Micro Interactions, Intentional Friction, Loading Feedback
- **Supporting TTPs:** Success Moments, JTBD Copywriting, Pattern Alignment, Progressive Disclosure
- **When the agent should use this strategy:** "feels cheap", "pricing power", "premium tier", "polish vs substance", "brand quality", "considered craft"
- **Companion handoff:** Impeccable — primary partner for visual system, motion restraint, and finish quality (`polish` with register and intensity constraints); DocSlime — when premium positioning, tier differentiation, or quality bars belong in `docs/strategy/`; RedTeam — before price increases or exclusivity framing that outruns substance (`/redteam assumptions` on whether craft signals match delivered value)
- **Feeling north star this strategy serves:** considered quality with calm confidence and earned worth
- **Anti-goals:** fake loading theatre, manufactured exclusivity, free-tier shame, decoration that hides broken jobs
- **Reference path:** `skill/reference/sequence.md`
