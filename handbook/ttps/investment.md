# Investment


Help users build something that becomes more useful because they shaped it.

## What it is

Investment is a meaningful contribution of time, choices, or creation that a user makes into a product: setting preferences, saving real work, organising a library, teaching a workflow, adding data that visibly improves what happens next. It is the *asking* half of a pair described in [Investment and Continuity](../concepts/13-investment-and-continuity.md); the *honouring* half—what the product does with the contribution afterwards—is a separate TTP, [Effort Moat](effort-moat.md). Confusing the two produces a common mistake: a product that keeps asking users to set things up and organise their content, while never quite proving that any of that effort made the next visit noticeably better.

It is also easy to mistake for a retention trap, and the difference is the entire point of the card. A retention trap manufactures busywork so that leaving feels costly—the effort exists to raise switching costs, full stop. Investment only earns its name when the product returns visible value for the contribution: a better next session, a genuinely useful record, stronger defaults, progress the user can actually keep and take with them. If removing the ask would leave the user no worse off, it was never investment.

## Why it works

People tend to value things more once they have put real effort into shaping them—the completed, self-made result feels like *theirs* in a way a default configuration never does, which is what turns a generic tool into "my workspace." [Investment and Continuity](../concepts/13-investment-and-continuity.md) is explicit that this is the same psychological terrain as the endowment effect, and that the ethical line running through it is utility and portability on one side, sunk-cost pressure on the other.

The concrete failure mode this TTP prevents is the generic-feeling product: one that never asks anything of the user and, as a result, never becomes distinctly theirs—every session looks like every other user's session, so there is nothing personal to return to. The failure mode on the other side is what happens when this pattern is overdone or timed wrong: asking for contribution before any value has been shown produces busywork that feels like a toll rather than an investment, and describing existing effort as a "sunk cost" to pressure a purchase converts a legitimate psychological tendency into exactly the kind of manipulation [User Agency](../concepts/12-user-agency.md) exists to catch.

## When to use it

- A small setup choice materially improves the first useful outcome
- User-created content, collections, preferences, or history make future sessions better
- A workflow benefits from saved defaults or cumulative progress
- Returning users can see and build on value they have already created

## Do

- Ask for input after showing enough value to justify it
- Save work reliably and show how it improves the next visit
- Make ownership visible: a collection, history, preference, draft, or reusable output
- Let users review, edit, export, and delete their contribution
- Pair with **Value Replay**, **Personalisation**, **Time to Value**, and **Progressive Disclosure**

## Don't

- Create busywork solely to increase switching costs
- Describe effort as a “sunk cost” or use it to pressure a purchase
- Lock user-created data behind a paywall without a clear, fair policy
- Reset, lose, or hide meaningful work without recovery options

## Founder Tip

Ask for the smallest contribution that makes the next experience noticeably better, then prove that improvement quickly.

## Make It Yours

1. **Find meaningful contributions**
   - What do users already create, choose, save, or refine?
   - Which contribution improves their own experience rather than just your data set?

2. **Earn the ask**
   - What value can users see before supplying this information?
   - Can the request wait until its purpose is immediate and clear?

3. **Close the loop**
   - What changes on the next visit because of this contribution?
   - Can the user see, edit, or reuse what they built?

4. **Protect ownership**
   - Can users export, delete, and recover their work?
   - What happens if they change plan, device, or account?

5. **Measure durable value**
   - Do invested users complete meaningful work more successfully?
   - Is return behaviour accompanied by satisfaction, not just accumulated lock-in?


## Related concepts

- [Investment and Continuity](../concepts/13-investment-and-continuity.md)
- [User Agency](../concepts/12-user-agency.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)

## Further reading

- [The IKEA Effect: When Labor Leads to Love](https://www.hbs.edu/faculty/Pages/download.aspx?name=norton+mochon+ariely.pdf) — primary research on why completed self-made work can increase perceived value.
- [Self-Determination Theory](https://selfdeterminationtheory.org/theory/) — a durable framework for autonomy, competence, and relatedness in motivation.
- [GOV.UK Service Manual: Make the service simple to use](https://www.gov.uk/service-manual/design/making-your-service-simple-to-use) — practical guidance for reducing unnecessary user effort.
- [ICO: Right to data portability](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/) — why user data should remain meaningfully accessible to the person who created it.

## Agent skill

- **Primary command:** `/productfeeling jobs` — elicit the smallest contribution that improves the user's next session
- **Related commands:** `/productfeeling trust`, `/productfeeling friction`, `/productfeeling anti-patterns`, `/productfeeling delight`
- **When the agent should load this TTP:** "user contribution", "setup payoff", "saved preferences", "build your library", "meaningful setup"
- **Companion handoff:** Impeccable — setup, autosave, and ownership UI; DocSlime — export, deletion, and data-rights requirements; RedTeam — when contribution mainly raises switching costs
- **Feeling north star this TTP serves:** my workspace through earned value, not lock-in
- **Anti-goals:** busywork for retention, sunk-cost pressure, paywalled user data, lost work without recovery
- **Reference path:** `skill/reference/jobs.md`
