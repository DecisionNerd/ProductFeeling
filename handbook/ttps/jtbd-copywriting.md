# JTBD Copywriting


Jobs-to-be-Done (JTBD) copy: write from the progress the user is trying to make, not the feature your product wants to describe.

## What it is

JTBD Copywriting frames interface language around a user's circumstance, desired progress, and next action, rather than the feature the engineering team built. Instead of "Enable auto-categorisation", it says "Keep your expenses organised automatically"—the same capability, described from the side of the screen the user is actually standing on. It does not mean inventing an emotional outcome the product cannot deliver; it means making the real outcome, the real trade-off, and the real next action legible in the words the user would use for them, drawn from [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)'s three-part shape of circumstance, progress, and outcome.

It is worth distinguishing from Product Voice, its neighbour on the copy shelf: Product Voice decides *how* the product sounds—its personality, its tone at a win versus a failure—while JTBD Copywriting decides *what* the product actually says. A button can be perfectly on-voice and still fail this TTP if it describes a feature instead of naming the progress it enables; the two are meant to operate together, not substitute for each other.

## Why it works

People hire products to make progress in a specific situation, and copy that names that progress directly lets users recognise relevance and act with confidence without first translating feature-speak into their own terms—a translation step that costs real cognitive effort at exactly the moments, onboarding and paywalls among them, where patience is thinnest. This is also where [Mental Models and Affordances](../concepts/05-mental-models.md) meets copy: a label that matches what the user is trying to do reinforces their working theory of the product, while a label built from internal feature names forces them to guess, and a wrong guess is where "this app is confusing" comes from even when nothing is technically broken.

The concrete failure mode this TTP prevents is copy that is accurate but useless—correct about what the system does, silent about what it means for the person reading it. What goes wrong when this is overdone or faked is a different failure: promising an outcome the product cannot reliably deliver, or reaching for urgency and vague aspiration instead of a real, specific promise, borrows credibility it has not earned and spends down the same trust that [Feeling North Star](../concepts/01-feeling-north-star.md) asks every surface to protect.

## When to use it

- Calls to action, onboarding choices, and setup steps
- Empty states, feature introductions, and upgrade explanations
- Error states, confirmations, and permissions
- Moments where users must choose between options or understand a trade-off

## Do

- Start with the user’s situation and desired outcome
- Use concrete verbs that describe the next action and its result
- State costs, limits, and prerequisites plainly when they matter
- Use the language customers use in interviews, support requests, and research
- Pair with **Intent Mirroring**, **Time to Value**, and **Permission Serve**

## Don't

- Lead with internal feature names, technical jargon, or company slogans
- Promise an outcome the product cannot reliably deliver
- Use fear, false urgency, or vague aspiration to force action
- Default to “Continue”, “Submit”, or “Learn more” when the next step can be named

## Founder Tip

Write the button after you can finish this sentence: “The user is here because they want to ___.” If the button does not help complete that thought, it is probably feature-centred.

## Make It Yours

1. **Name the job**
   - What progress is the user trying to make on this screen?
   - What situation brought them here now?

2. **Separate outcome from mechanism**
   - What does the feature enable in the user’s world?
   - Which system terms can be replaced with plain language?

3. **Write the next action**
   - Does the call to action say what will happen after it is selected?
   - Is the action precise enough to distinguish it from nearby choices?

4. **Make the promise honest**
   - What limit, cost, permission, or waiting period should be stated now?
   - Would the copy still feel fair if the user chooses not to continue?

5. **Learn from real language**
   - What phrases recur in research, reviews, support tickets, or sales calls?
   - Can you test comprehension and task completion alongside conversion?


## Related concepts

- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [Mental Models and Affordances](../concepts/05-mental-models.md)
- [Feeling North Star](../concepts/01-feeling-north-star.md)

## Further reading

- [Jobs to Be Done Theory](https://www.christenseninstitute.org/theory/jobs-to-be-done/) — a canonical introduction to progress, circumstance, and the forces behind choice.
- [GOV.UK Service Manual: Content design](https://www.gov.uk/service-manual/user-centred-design/content-design) — practical, user-centred standards for useful service content.
- [Nielsen Norman Group: How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) — durable research on scannable, task-focused web writing.
- [W3C Web Content Accessibility Guidelines: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) — why controls need clear, useful labels and instructions.

## Agent skill

- **Primary command:** `/productfeeling jobs` — write from the progress users are trying to make, not internal feature names
- **Related commands:** `/productfeeling tone`, `/productfeeling trust`, `/productfeeling states`, `/productfeeling friction`
- **When the agent should load this TTP:** "button copy", "CTA wording", "onboarding copy", "empty state copy", "outcome-led messaging"
- **Companion handoff:** Impeccable — microcopy, labels, and scannable control text; none — unless copy changes need durable voice or policy docs
- **Feeling north star this TTP serves:** clear progress, honest promises, lower cognitive effort
- **Anti-goals:** jargon-led copy, undeliverable outcomes, fear or false urgency, vague Continue buttons
- **Reference path:** `skill/reference/jobs.md`
