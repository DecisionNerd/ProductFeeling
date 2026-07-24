# Small Quirk


A small, repeatable flourish that makes a clear product interaction feel recognisably yours.

## What it is

A small quirk is a distinctive, repeatable flourish—a particular animation when something saves, a specific sound on completion, a turn of phrase that shows up in the same spot every time—attached to a moment that's already clear and low-stakes. It isn't there to explain what happened; the interaction already does that. It's there to make the moment recognisably yours, the way a person's laugh or a phrase they always use becomes part of how you know them. This is easy to confuse with **Micro Interactions**, which exist to confirm cause and effect—did the tap register, did the save complete—and have to be there for the interface to make sense. A small quirk is the opposite: entirely optional decoration on top of feedback that would already work perfectly well without it, which is exactly why it has to be added last, not first.

## Why it works

This is where **Emotional Design**'s reflective layer gets built in miniature: a small quirk becomes part of the story a user tells about the product, the specific detail they mention when describing it to someone else, precisely because it's distinctive rather than generic. It works because it's attached to feedback that's already doing its job—the underlying save, completion, or discovery is already clear, so the flourish has nothing to prove and can spend its whole budget on personality. **Aesthetic–Usability Effect** explains the payoff: a considered, specific detail reads as evidence of care, and that goodwill quietly extends to how forgivingly the user judges everything else nearby.

The failure this prevents is a product that works fine but is instantly forgettable—functionally correct, emotionally interchangeable with every competitor doing the same job the same way. But Aesthetic–Usability Effect cuts both ways: charm can mask a flaw as easily as it can reward a strength, so a delightful animation layered over a task that's actually confusing just buys the confusion a longer runway before anyone complains. Put the quirk in a high-stakes flow—checkout, deletion, account recovery—and the same mechanism works against you: a moment that needed to feel serious and legible now feels like it's being trivialised, which is its own kind of broken trust.

## When to use it

- In a repeatable, already-clear core interaction
- To give a category-standard flow some product character
- After validating that the underlying task is understandable and accessible

## Do

- Attach the quirk to meaningful feedback, such as saving, completing, or discovering
- Make it optional, brief, and safe to miss
- Respect platform conventions and reduced-motion preferences

## Don't

- Put it in checkout, account recovery, deletion, or another high-stakes flow
- Make a gesture or metaphor users must learn to proceed
- Use motion, sound, or surprise that overwhelms the task

## Founder Tip

Make the task work beautifully without the flourish first. Then add the smallest detail people will remember.

## Make It Yours

1. Which repeated, low-stakes action is already clear enough to carry personality?
2. What useful feedback could the quirk make warmer or more legible?
3. Would the flow still work perfectly if motion, sound, or colour were unavailable?
4. Does the detail reflect your product’s point of view rather than decoration alone?
5. Where could the same signature reappear without becoming repetitive?


## Related concepts

- [Emotional Design](../concepts/06-emotional-design.md)
- [Aesthetic–Usability Effect](../concepts/08-aesthetic-usability-effect.md)

## Further reading

- [Microinteractions in User Experience](https://www.nngroup.com/articles/microinteractions/) — Explains how small feedback loops support system status, comprehension, and brand.
- [Emotional Design: Attractive Things Work Better](https://jnd.org/emotion_design_attractive_things_work_better/) — Don Norman on the relationship between affect and use.
- [Understanding Success Criterion 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) — Accessibility guidance for motion triggered by interaction.

## Agent skill

- **Primary command:** `/productfeeling delight` — add a brief repeatable flourish to clear, low-stakes interactions
- **Related commands:** `/productfeeling tone`, `/productfeeling intensity`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "micro animation", "signature interaction", "brand flourish", "playful feedback", "recognisable detail"
- **Companion handoff:** Impeccable — motion, sound, and reduced-motion-safe flourish execution
- **Feeling north star this TTP serves:** memorable character that reinforces useful feedback
- **Anti-goals:** quirks in high-stakes flows, required gestures to proceed, overwhelming motion or surprise
- **Reference path:** `skill/reference/delight.md`
