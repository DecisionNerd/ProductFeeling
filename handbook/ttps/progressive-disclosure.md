# Progressive Disclosure


Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find.

## What it is

Progressive disclosure is a layering decision: put the choices that matter for the task at hand in the first view, and push everything else—advanced settings, rare options, deeper explanations—one deliberate step away, reachable but not visible by default. A photo editor that opens on crop and brightness, with colour curves and noise reduction one tap under “more”, is doing this correctly: the first screen answers the common case, and the second layer still holds the product’s full depth for the person who needs it. It’s easy to confuse with **Discovery**, which is invitation rather than deferral—Discovery proactively surfaces a next step the user didn’t know to look for, while progressive disclosure hides a control the user would recognise immediately if they saw it, until they go looking for it.

## Why it works

The mechanism is the one **Mental Models and Affordances** describes: a new user’s working theory of your product is small, and handing them the full control surface before that theory exists doesn’t feel like power, it feels like risk—too many unfamiliar options with no sense of which ones are safe to touch. Layering the interface lets the model grow one accurate piece at a time, so competence builds instead of collapsing into hesitation. This kind of overload rarely shows up cleanly in analytics as a drop-off event; **Friction** calls it cognitive friction, and it tends to surface as hovering, re-reading, and abandoned attempts rather than an error anyone can point to.

Skip the layering and you get choice overload on the first screen: a ten-second task now competes with twenty options the user doesn’t need yet, and the people who don’t already know your product simply stall. Overdo it, and the failure moves to the other side—advanced controls, or the true cost of an action, get buried behind a label nobody would think to click, which is no longer simplification but concealment. The craft is keeping the deferred layer genuinely reachable: a well-marked door, not a locked one, so depth stays available the moment someone actually needs it.

## When to use it

- When a screen supports both common tasks and specialised workflows
- When new users need a clear first action but experienced users need efficient access to depth
- When **Setup Defaults** can provide a useful start and **Discovery** can surface the next capability

## Do

- Put frequent, decision-critical actions in the first layer
- Use clear labels and predictable locations for advanced controls
- Let users skip guidance or move directly to the level of detail they need

## Don’t

- Hide frequently needed settings behind vague labels, multiple layers, or timed gates
- Use disclosure to conceal costs, consequences, limitations, or destructive actions
- Turn a simple task into a mandatory sequence when a direct path is safe

## Founder Tip

Simpler is not the same as smaller. Keep the first decision clear, then leave a well-marked door to everything else.

## Make It Yours

1. To identify the first layer:
   - What is the most common successful task on this screen?
   - Which choice must be visible for users to act safely?
2. To defer responsibly:
   - Which options are genuinely secondary or rare?
   - What information can wait until the user asks for it?
3. To protect discoverability:
   - Can a capable user locate advanced controls without trial and error?
   - Do labels describe the outcome, rather than the implementation?
4. To support different speeds:
   - Where can a beginner receive context without blocking an expert?
   - Can users revisit guidance when they need it?
5. To test the boundary:
   - What do users search for, miss, or configure repeatedly?
   - Are we reducing cognitive load, or merely moving it to another screen?


## Related concepts

- [Mental Models and Affordances](../concepts/05-mental-models.md)
- [Friction](../concepts/04-friction.md)

## Further reading

- [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) — canonical guidance on prioritising primary versus secondary options.
- [Information Scent](https://www.nngroup.com/articles/information-scent/) — how labels help people predict where a path will lead.
- [Progressive Disclosure](https://ixdf.org/literature/topics/progressive-disclosure) — practical explanation of layered interfaces and discoverability.
- [Ten Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — useful guardrails, especially visibility and user control.

## Agent skill

- **Primary command:** `/productfeeling friction` — layer complexity so first decisions stay clear while depth stays discoverable
- **Related commands:** `/productfeeling intensity`, `/productfeeling states`, `/productfeeling map`
- **When the agent should load this TTP:** "advanced settings hidden", "show more options", "simplify first screen", "layered interface", "expert mode"
- **Companion handoff:** Impeccable — disclosure patterns, labels, and advanced-control placement
- **Feeling north star this TTP serves:** clarity now with depth on demand
- **Anti-goals:** hiding frequent settings, concealing costs or consequences, mandatory sequences for simple tasks
- **Reference path:** `skill/reference/friction.md`
