# Sequence Flow

Playbooks that chain ProductFeeling commands.

**Source of truth:** the twelve Product Strategies in the handbook (`handbook/strategies/`). Each strategy playbook below mirrors that strategy’s `## Agent skill` section. When the chains disagree, **update this file to match the handbook** — do not silently invent a shorter skill-only path.

Also load the strategy’s **Core TTPs** from its handbook page (selectively — never dump the whole handbook). Supporting TTPs only when the surface needs them.

Published handbook: https://decisionnerd.github.io/ProductFeeling/handbook/

## Handbook strategy playbooks

Match the user’s target (or ask once) to a strategy, then run the chain.

### Onboarding
`jobs` → `peaks-ends` → `states` → `delight` → `brief`

Handbook: `handbook/strategies/01-onboarding.md`  
Core TTPs: Empty States, Setup Defaults, Progressive Disclosure, Time to Value, Success Moments, JTBD Copywriting, Pattern Alignment, Sandbox Experience, Personalisation, Momentum Bias, Micro Interactions

### Activation
`jobs` → `map` → `friction` → `states` → `delight` → `brief`

Handbook: `handbook/strategies/02-activation.md`  
Core TTPs: Time to Value, Success Moments, Setup Defaults, Empty States, Discovery, Personalisation, Micro Interactions, Momentum Bias

### Retention
`map` → `peaks-ends` → `states` → `trust` → `review`

Handbook: `handbook/strategies/03-retention.md`  
Core TTPs: Gamified Progress, System Widget, Value Replay, Effort Moat, Personalisation, Variable Reward, Commitment

### Engagement
`map` → `intensity` → `friction` → `delight` → `review`

Handbook: `handbook/strategies/04-engagement.md`  
Core TTPs: Micro Interactions, Gamified Progress, Variable Reward, Discovery, Personalisation, Intent Mirroring

### Growth & viral
`jobs` → `peaks-ends` → `trust` → `anti-patterns` → `review`

Handbook: `handbook/strategies/05-growth-viral.md`  
Core TTPs: Referral, Shareability, Contact Bridge, Deep-link, Success Moments

### Monetisation
`map` → `trust` → `friction` → `tone` → `review`

Handbook: `handbook/strategies/06-monetisation.md`  
Core TTPs: The Paywall, Intentional Friction, Limited Offer, Perceived Effort Delay, Success Moments, Time to Value, Spark Curiosity  
Aliases: checkout, paywall, upgrade, money flow

### Conversion optimisation
`map` → `friction` → `trust` → `tone` → `anti-patterns` → `review`

Handbook: `handbook/strategies/07-conversion-optimisation.md`  
Core TTPs: The Paywall, Limited Offer, Intentional Friction, Success Moments, Spark Curiosity, Momentum Bias

### Experience refinement
`audit` → `states` → `delight` → `tone` → `critique`

Handbook: `handbook/strategies/08-experience-refinement.md`  
Core TTPs: Micro Interactions, Small Quirk, Loading Feedback, Success Moments, Perceived Effort Delay  
Aliases: polish, craft pass (feeling side before Impeccable)

### Trust building
`trust` → `friction` → `states` → `anti-patterns` → `review`

Handbook: `handbook/strategies/09-trust-building.md`  
Core TTPs: Fail Safe, Pattern Alignment, Permission Serve, Loading Feedback, Intentional Friction

### Intent shaping
`jobs` → `persona` → `states` → `friction` → `brief`

Handbook: `handbook/strategies/10-intent-shaping.md`  
Core TTPs: Investment, Personalisation, Setup Defaults, Progressive Disclosure, Commitment

### Habit formation
`intensity` → `map` → `friction` → `states` → `review`

Handbook: `handbook/strategies/11-habit-formation.md`  
Core TTPs: Commitment, Gamified Progress, System Widget, Variable Reward, Value Replay, Investment, Personalisation  
Aliases: daily tool, return loop, ritual (when the ask is habit/return, not one-shot polish)

### Premium positioning
`audit` → `tone` → `delight` → `intensity` → `critique`

Handbook: `handbook/strategies/12-premium-positioning.md`  
Core TTPs: Perceived Effort Delay, Small Quirk, Micro Interactions, Intentional Friction, Loading Feedback

## Cross-cutting playbooks

Use when the ask is not a named product strategy (or as a pre-step).

### Customer discovery
`init` (or load existing `docs/`) → `persona` → `jobs` → `map` → `tone` → `handoff` (DocSlime)

**Source of truth:** `handbook/discovery/`. Interview method runs through the four questions; **Synthesis** is the gate before a feeling north star or any strategy playbook.

Load selectively (never the whole handbook):
- [Interview method](handbook/discovery/05-interview-method.md) — how to ask
- [Ideal Customer and User Profiles](handbook/discovery/01-ideal-customer-and-users.md)
- [Need States and Awareness](handbook/discovery/02-need-states.md)
- [How Customers Work Today](handbook/discovery/03-how-customers-work-today.md)
- [How Customers Talk, Search, and Buy](handbook/discovery/04-how-customers-talk-search-buy.md)
- [Synthesis](handbook/discovery/06-synthesis.md) — durable write checklist

**Durable writes (DocSlime / `docs/` only):** ICP and personas → `docs/strategy/`; need states, workflow, journeys → `docs/experience/`; voice/language → `docs/PRODUCT.md` / `DESIGN.md`. Session notes may stay in `.productfeeling/sessions/` until graduated. Never duplicate product/experience truth into `.productfeeling/` when `docs/` exists. No external discovery skill—ProductFeeling commands + DocSlime handoff.

Aliases: discovery, ICP, talk to users, personas first, before north star

### New product / major surface
`init` → `jobs` → `metaphors` → `map` → `brief` → `handoff`

Prefer **Customer discovery** first when ICP/personas/need states are missing or proto-only. Then Onboarding or Activation once the north star exists.

### Pre-launch review
`feel` or `audit` → `states` → `anti-patterns` → `review`

### Copy-only pass
`tone` → `anti-patterns` → `trust`

## Steps

1. Identify the situation. Prefer a **handbook strategy** or **Customer discovery** alias over a free-form chain. If ICP/personas/need states are missing or proto-only, start with **Customer discovery** before a strategy playbook.
2. Open the matching handbook page(s); load **Core TTPs** (strategies) or discovery pages selectively — never the whole handbook.
3. Recommend the matching playbook (or adapt lightly — say what you changed and why).
4. Run the first command in the chain now unless the user wants the list only.
5. Tell the user the remaining chain and when to hand off to Impeccable, DocSlime, or RedTeam (per the handbook Agent skill section). Discovery durable writes go to `docs/` via DocSlime—not `.productfeeling/` as a second SoT.
