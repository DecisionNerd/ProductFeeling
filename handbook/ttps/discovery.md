# Discovery


Guide users to value before they know where to look.

## What it is

Discovery is what a product offers a user who doesn't yet know what to ask for: a small number of strong, contextual suggestions that replace a blank canvas or an empty search box with a few credible next steps. It is not Progressive Disclosure, even though both manage complexity—Progressive Disclosure hides advanced controls until a user who already knows their goal is ready for them; Discovery surfaces possibility for someone who doesn't yet have a goal at all. One is about sequencing what a capable user sees; the other is about orienting a user who is, in that moment, a little lost.

A streaming app's "because you watched…" row, when it actually reflects what you watched, is Discovery doing its job: it replaces "I don't know what's on this thing" with three plausible answers. The same row filled with unrelated promoted content is the same UI pattern doing something else entirely—inventory display wearing Discovery's clothes.

## Why it works

The mechanism sits close to [Mental Models](../concepts/05-mental-models.md): a blank screen forces the user to guess at your product's affordances from nothing, exactly the kind of unsignified capability that produces fear rather than confidence. A good suggestion is a signifier for a possibility the user couldn't otherwise see—it turns "what can this thing even do" into a concrete, low-risk next tap, which is also the fastest way to reduce the cognitive [friction](../concepts/04-friction.md) that stays invisible in analytics: nobody's drop-off event fires when a user simply doesn't know what to try.

The failure mode on the strict side is silence: an empty state or search box with nothing to reach for, which reads as "figure it out yourself" and quietly raises abandonment that never shows up as an explicit complaint. The failure mode on the excessive side is noise—cards, carousels, and "you might like" tiles stacked until every suggestion has the same weight and none of them read as credible, which trains users to stop scanning suggestions at all. Discovery only works while each suggestion still smells like a real path to something the user is trying to accomplish, per [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md); the moment it starts smelling like inventory, it stops functioning as discovery.

## When to use it

- Early sessions and Empty States when users do not yet know the map
- Search UIs, dashboards, and category hubs before (or beside) typing
- Introducing new capabilities without a modal tour dump
- Anywhere “shown, not told” beats a wall of docs

## Do

- Offer a short set of high-scent suggestions tied to context, behaviour, or proven paths
- Seed with clear labels (“Most used,” “Continue,” “Try this next”)—not vague “Explore”
- Pair with Empty States and Spark Curiosity: one primary action, optional secondary paths
- Evolve suggestions as intent becomes clearer (Personalisation / Intent Mirroring)
- Make every suggestion completable in one or two taps

## Don't

- Flood the screen with cards, carousels, and “you might like” until scent dies
- Suggest things you cannot deliver, or dark-pattern “discovery” that is really upsell
- Leave silence where a single good next step would unblock them
- Confuse Discovery with Variable Reward roulette—curiosity needs direction, not slot machines

## Founder Tip

Discovery earns trust when the first suggestion is useful. One perfect next step beats twelve mediocre ones.

## Make It Yours

1. To find the stuck moment:
   - Where do people pause, bounce, or stare at emptiness?
   - What does “I don’t know what’s possible” look like in your analytics?
2. To design the suggestion:
   - What is the single best next action after what they just did?
   - Are you showing possibility or dumping inventory?
3. To personalise without creepiness:
   - Which signals improve scent without feeling surveilled?
   - Can you explain why this was suggested in one plain sentence?
4. To keep the UI calm:
   - How many options before decision anxiety returns?
   - Can categories or progressive reveal keep the first screen quiet?
5. To keep the loop alive:
   - Do suggestions refresh with behaviour and seasonality?
   - Is discovery a habit of the product—or a one-time onboarding gag?


## Related concepts

- [Mental Models and Affordances](../concepts/05-mental-models.md)
- [Friction](../concepts/04-friction.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)

## Further reading

- [Information Scent (Nielsen Norman Group)](https://www.nngroup.com/articles/information-scent/) — Why cues must promise a payoff users can actually reach.
- [Progressive Disclosure (Nielsen Norman Group)](https://www.nngroup.com/articles/progressive-disclosure/) — Sibling pattern: defer complexity; do not confuse with proactive discovery.
- [Designing Empty States in Complex Applications (Nielsen Norman Group)](https://www.nngroup.com/articles/empty-state-interface-design/) — Empty canvases as discovery and pathway, not void.
- [Empty states (Carbon Design System)](https://carbondesignsystem.com/patterns/empty-states-pattern/) — Practical empty-state patterns that guide first action.
- [10 Usability Heuristics for User Interface Design (Nielsen Norman Group)](https://www.nngroup.com/articles/ten-usability-heuristics/) — Recognition over recall and help users recover—foundations under discovery UX.

## Agent skill

- **Primary command:** `/productfeeling jobs` — surface high-scent next steps tied to the progress users are trying to make
- **Related commands:** `/productfeeling states`, `/productfeeling map`, `/productfeeling persona`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "what's possible", "suggestions", "explore before search", "blank canvas", "information scent"
- **Companion handoff:** Impeccable — suggestion cards, categories, and calm first-screen layout; DocSlime — when discovery rules or eligibility become durable requirements
- **Feeling north star this TTP serves:** curiosity with direction, reduced blank-canvas anxiety
- **Anti-goals:** suggestion spam, fake personalisation, discovery-as-upsell
- **Reference path:** `skill/reference/jobs.md`
