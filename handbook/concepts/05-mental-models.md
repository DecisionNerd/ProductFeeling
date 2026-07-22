# Mental Models and Affordances

A mental model is the user's private theory of how your product works. They act on the theory, not on your implementation—and the gap between the two is where confusion, fear, and "this app is broken" live.

## Definition

- A **mental model** (Norman, *The Design of Everyday Things*) is the internal simulation a user runs to predict what an action will do: "if I delete this here, it's gone everywhere," "drafts save automatically," "the back button is safe." Models are built from prior products, partial evidence, and guesswork—never from your architecture docs.
- An **affordance** is what an object actually allows a person to do; a **signifier** (Norman's later refinement) is the perceivable cue that communicates it—the shadow that says "button," the underline that says "link," the drag handle that says "reorder." Users cannot use what nothing signifies.
- **Jakob's Law** (Nielsen) is the population-level consequence: users spend most of their time in *other* products, so they arrive carrying the conventions of the whole ecosystem. Your product inherits their expectations whether it wants them or not.

## Why it matters

Emotionally, a matched mental model *is* the feeling of competence: predictions keep coming true, so the user moves with confidence and credits themselves. A violated model produces the sharpest negative feelings software can generate—not mere confusion but betrayal ("it deleted everything," "I thought that was saved"), because the product broke a promise the user didn't know was only in their head. Most "user error" is a model mismatch the interface invited.

## Deep dive

Three working rules:

1. **Spend novelty where you differentiate; spend convention everywhere else.** Following convention is not a lack of imagination—it is respecting the user's installed base of predictions ([Pattern Alignment](../ttps/pattern-alignment.md)). Break a convention only where your product's core value requires it, and then over-signify the difference.
2. **The model is built from feedback, so feedback is model-maintenance.** Every acknowledgement ([Micro Interactions](../ttps/micro-interactions.md)), honest wait ([Loading Feedback](../ttps/loading-feedback.md)), and clear system status is a sentence in the user's ongoing theory of the product. Silence forces them to guess—and they will guess something you didn't build.
3. **Reveal complexity along the model's growth curve.** A novice's model is small; dumping full capability on it produces fear, not power. [Progressive Disclosure](../ttps/progressive-disclosure.md) sequences the interface so the model can grow one accurate layer at a time.

The dark-pattern connection: manipulation is often a deliberately induced *false* mental model—interface elements disguised as content, "sneak into basket," consent dialogs whose visual grammar misleads. That is why model honesty is an [agency](12-user-agency.md) issue, not just a usability one.

## For engineers and agents

- This is the principle of least astonishment applied to users instead of API consumers. The same instinct you use on function names and return types—"what would a caller assume?"—applies to buttons, sync behaviour, and deletion semantics.
- Destructive and irreversible operations deserve model-first design: does the user's likely theory ("archive means I can get it back") match the implementation (hard delete after 30 days)? If not, the fix is in copy and confirmation semantics, not in a lawyer's tooltip.
- Distributed-systems realities—eventual consistency, offline queues, optimistic UI, background sync—are exactly where user models break, because the interface shows a state the system hasn't reached. Decide deliberately what story the UI tells about unsynced state, and keep it honest ([Calibrated Trust](11-calibrated-trust.md)).
- Naming is model-building: the words in navigation, settings, and events teach users (and support staff, and future agents) a theory of the system. A rename that clarifies the model is product work, not cosmetics ([JTBD Copywriting](../ttps/jtbd-copywriting.md)).
- When reviewing a surface, an agent should ask: what will a user predict each control does, based only on what is visible? Any control whose actual behaviour differs from the convention-based prediction needs a signifier, a confirmation, or a redesign.

## Where it shows up

- [Pattern Alignment](../ttps/pattern-alignment.md) is the direct TTP; [Progressive Disclosure](../ttps/progressive-disclosure.md) and [Micro Interactions](../ttps/micro-interactions.md) maintain the model over time.
- [Trust Building](../strategies/09-trust-building.md) depends on models holding under stress: permissions, payments, recovery.

## Further reading

- [Mental Models (Nielsen Norman Group)](https://www.nngroup.com/articles/mental-models/) — The concept and its consequences for design and research.
- [Signifiers, not affordances (Don Norman)](https://jnd.org/signifiers-not-affordances/) — Why perceivable cues, not raw capabilities, are the designer's material.
- [Jakob's Law (Laws of UX)](https://lawsofux.com/jakobs-law/) — Users' expectations are set by everyone else's products.
- [The Design of Everyday Things (Don Norman)](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things) — The origin text for mental models, affordances, and feedback in design.
