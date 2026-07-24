# Sandbox Experience


Let people experience a truthful slice of product value before asking them to commit.

## What it is

A sandbox is a bounded, honest space where someone can run a real workflow—not watch a demo of one—before creating an account or handing over sensitive information. It might use seeded example data, a temporary workspace that disappears at the session's end, or a deliberately narrowed slice of the product's real capability, but the workflow itself has to be genuine: the user should be able to do the actual thing the product is for, not click through a simulation of doing it. This is distinct from **Time to Value**, which shortens the path to a first outcome inside the real product, account and all; a sandbox removes the account requirement entirely, trading some completeness for zero commitment, which matters most when the ask to sign up—or to connect a bank account, a calendar, a codebase—is itself the barrier.

## Why it works

**Jobs-to-be-Done** explains why this beats a feature tour: people are held back from trying something new less by missing features than by anxiety—what if this doesn't actually work for my situation, what if I hand over access and regret it. A sandbox answers that anxiety with evidence instead of assurance, letting someone run their own version of the job before they've risked anything, which Jobs-to-be-Done names directly as more effective than adding capability. The alternative—asking for an account or a sensitive permission before any proof exists—puts the burden of trust entirely on the user's imagination, at the exact moment they have the least reason to extend it.

What makes the sandbox trustworthy rather than a bait-and-switch is the same test **Calibrated Trust** applies everywhere: every claim the interface makes has to be backed by what's actually true, so labelling what's sample data, what's temporary, and what disappears on sign-up is not a nice-to-have, it's the whole mechanism. Skip the sandbox and you're left asking people to commit on faith, which quietly filters out everyone who isn't already convinced. Fake it—present generated results as real customer activity, or make the trial narrower than the real product without saying so—and you get a worse version of the same failure: a confident first impression that the real product then contradicts, which is exactly the kind of broken promise trust doesn't recover from quickly.

## When to use it

- When the core value is easier to experience than explain
- When account creation or configuration is a material barrier before **Time to Value**
- When **Setup Defaults** or **Progressive Disclosure** can show a realistic first workflow safely

## Do

- Centre the sandbox on one representative outcome, not every feature
- Label sample, generated, and temporary data clearly
- Explain what signing up preserves, unlocks, or enables before asking for the next commitment

## Don’t

- Present fictional results, social proof, or generated data as real customer activity
- Make the experience so limited that it misrepresents the product’s actual constraints
- Use a surprise gate after someone has invested work without warning them what will happen

## Founder Tip

A good sandbox answers “will this help me?” before it asks “will you give us your details?”

## Make It Yours

1. To choose the proof:
   - What single action best demonstrates the product’s core value?
   - Can someone reach that moment without entering sensitive information?
2. To make it truthful:
   - Which data, results, or collaborators are simulated?
   - Are limits and non-persistent work visible before a user relies on them?
3. To guide without trapping:
   - What is the next helpful action after the first outcome?
   - Can users explore at their own pace without a countdown or forced sign-up?
4. To set the hand-off:
   - What does creating an account save, enable, or connect?
   - Can users understand that trade-off before they invest more work?
5. To validate the experience:
   - Do people reach a meaningful outcome, or only click through a demo?
   - Where does confusion reveal that the sandbox is not representative enough?


## Related concepts

- [Friction](../concepts/04-friction.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [Ten Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — supports visible system status, realistic feedback, and user control.
- [Human-Centred Design for Interactive Systems (ISO 9241-210)](https://www.iso.org/standard/77520.html) — durable principles for evaluating products through real user goals.
- [The Field Guide to UX Strategy](https://www.uxstrategy.com/) — practical framing for validating value before investing in broader product flows.
- [Time to Value: The Metric You Can’t Afford to Ignore](https://productschool.com/blog/product-strategy/time-to-value) — connects early product experience to a defined first outcome.

## Agent skill

- **Primary command:** `/productfeeling jobs` — centre a truthful try-before-commit slice on one core outcome
- **Related commands:** `/productfeeling states`, `/productfeeling friction`, `/productfeeling trust`
- **When the agent should load this TTP:** "try before signup", "demo mode", "guest experience", "sample data trial", "no-account preview"
- **Companion handoff:** Impeccable — sandbox UI, sample-data labelling, and sign-up hand-off; DocSlime — what persists versus simulated
- **Feeling north star this TTP serves:** evidence of value before commitment
- **Anti-goals:** fictional results as real, misrepresenting limits, surprise gates after invested work
- **Reference path:** `skill/reference/jobs.md`
