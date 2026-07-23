# Discovery


Guide users to value before they know where to look.

## What it is

Surfacing helpful paths, content, or capabilities before the user has a precise query—anticipating curiosity and replacing blank-canvas paralysis with a few strong next steps. Distinct from Progressive Disclosure (complexity on demand): Discovery is invitation and scent, not hiding advanced controls.

## Why it works

People follow **information scent**—cues that a path will lead to their goal. Good discovery lowers cognitive load, shows what is possible, and turns hesitation into exploration. Bad discovery is noise: irrelevant suggestions that train users to ignore you.

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
