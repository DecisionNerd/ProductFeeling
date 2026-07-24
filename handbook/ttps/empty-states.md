# Empty States


Turn “nothing here” into a clear, useful next step.

## What it is

An empty state is what a surface shows when there's nothing to display yet—not nothing wrong, just nothing there: a fresh project with no files, a search with no matches, an inbox that's genuinely empty. It's one of the five states [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md) defines for every surface, and it's easy to confuse with Loading, the state next door: both can look like a blank screen, but Loading means the system is working and will resolve on its own, while Empty means the system has already resolved and there's genuinely nothing there yet—which means the two need opposite treatment. Show a spinner on a genuinely empty state and you're lying about work that isn't happening; show a static "nothing here" message during a slow fetch and you're telling the user to give up on data that's still coming.

A new user's dashboard on day one, a filtered list that matches nothing, and a cleared notification tray are all empty states, but they call for different words: "get started" belongs to the first, "try different filters" to the second, "you're all caught up" to the third. Answering them all with "No items found" is technically true and practically useless.

## Why it works

The mechanism is [Mental Models](../concepts/05-mental-models.md): a blank area with no explanation forces the user to guess what it means, and the guesses people reach for under uncertainty—broken, loading forever, I did something wrong—are all worse than the truth. A well-designed empty state closes that gap immediately: it names the absence, confirms the system is working as intended, and, where there's a next step, states the smallest one. That's enough to convert a moment of doubt into a moment of orientation, which matters most on first use, before the user has any other evidence the product works.

Skip empty-state design and the default isn't neutral—it's whatever the framework renders when an array is empty, which is usually a jarring blank rectangle that reads as broken even when nothing has failed. That's the specific failure [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md) calls out: every surface has an empty state whether anyone designed it or not; the only choice is whether it was designed on purpose. Overdo it and the opposite failure appears—filling a quiet, successful empty state (an inbox at zero, a completed checklist) with promotional prompts, which punishes the user for the exact moment they should feel calm and finished.

## When to use it

- On first use, before a user has created or connected content
- When search, filters, or permissions produce no visible results
- After a user clears content, archives a collection, or completes a workflow
- In dashboards or containers whose purpose is otherwise unclear without data

## Do

- Name the state plainly: what is absent, why, and whether the system is still working
- Offer one proportionate next action, such as “Create project” or “Clear filters”
- Show a small, representative example when it teaches the outcome better than copy alone
- Use Discovery and Progressive Disclosure to reveal possibilities without overwhelming a first visit

## Don't

- Use the same generic “No items found” message for every kind of absence
- Pretend data is loading, personalised, or unavailable when it is not
- Fill a quiet success state with promotional prompts
- Add decorative illustrations that compete with the explanation or action

## Founder Tip

Before writing empty-state copy, classify the absence: new, no-result, cleared, unavailable, or loading. The right next step follows from that answer.

## Make It Yours

1. **Inventory the absences**
   - Which screens begin empty, and which become empty through search, filters, permissions, or user action?
   - Can a person tell the difference between “nothing exists”, “nothing matches”, and “something went wrong”?

2. **Give the state a job**
   - What does the user need to understand before acting?
   - Is the best next step to create, import, change a filter, wait, ask for access, or simply continue?

3. **Design the smallest useful prompt**
   - Can the action use the user’s own language and name the result it creates?
   - Would one realistic example reduce uncertainty without becoming a tutorial?

4. **Validate the outcome**
   - Do people take the intended action, change their query, or leave confused?
   - Which empty states lead to support requests, repeated refreshes, or rapid exits?


## Related concepts

- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- [Friction](../concepts/04-friction.md)
- [Mental Models and Affordances](../concepts/05-mental-models.md)

## Further reading

- [Designing Empty States in Complex Applications: 3 Guidelines](https://www.nngroup.com/articles/empty-state-interface-design/) — durable guidance on status, learnability, and key tasks.
- [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) — the foundation for system status and recognition over recall.
- [Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/) — helps make an empty state’s action clear and credible.
- [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) — shows how to reveal complexity only when users need it.

## Agent skill

- **Primary command:** `/productfeeling states` — classify absence and offer the smallest useful next step
- **Related commands:** `/productfeeling jobs`, `/productfeeling friction`, `/productfeeling map`, `/productfeeling delight`
- **When the agent should load this TTP:** "empty state", "no results", "first use", "blank screen", "nothing here yet"
- **Companion handoff:** Impeccable — empty-state layout, examples, and primary action craft; none — unless the absence type needs product-policy capture
- **Feeling north star this TTP serves:** clarity in absence, orientation without overwhelm
- **Anti-goals:** generic no-items copy, fake loading or personalisation, promotional quiet states, decorative noise
- **Reference path:** `skill/reference/states.md`
