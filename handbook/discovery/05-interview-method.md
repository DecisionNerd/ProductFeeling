# Interview Method

How to ask so you get evidence—not politeness, predictions, or a pitch meeting.

## What it is

Discovery interviews test hypotheses about problems, workflows, and decisions by listening to **past behaviour in real context**. The compact standard is Rob Fitzpatrick’s *The Mom Test*: ask about their life, not your idea; prefer the past over the hypothetical; talk less, listen more. This page is the *how* that runs through [Who](01-ideal-customer-and-users.md), [Why now](02-need-states.md), [Workflow](03-how-customers-work-today.md), and [Talk / search / buy](04-how-customers-talk-search-buy.md).

## Why it works

People are generous with predictions (“I would definitely use that”) and honest about the past (“last quarter I exported to Sheets and emailed it”). Pitching in the interview contaminates the data and trains them to flatter you. Evidence from concrete episodes is what personas, need states, and VoC are built from—and what agents can later load without inventing customers.

## When to use it

- Before locking ICP, north star, or a major surface
- When feedback is loud but unsegmented
- When you only have opinions (“users want…”) and no episode
- Continuously—discovery is not a one-time phase

## Do

- Open with a real episode: “Walk me through the last time this happened”
- Ask about **what they did**, tools used, who else was involved, what failed
- Capture **trigger**, **emotion words**, **workaround**, and **switching stakes** every time
- Stay in their world; if they ask what you are building, defer until after the story
- Prefer recent buyers/switchers for buy-journey truth; prefer practitioners for workflow truth
- Record (with consent) or take near-verbatim notes; tag by segment and need state

## Don't

- Pitch the product mid-interview or ask “Would you use a tool that…?”
- Lead with your category jargon or feature list
- Treat compliments as validation
- Interview only friends, colleagues, or people outside the ICP and call it discovery
- Confuse a sales demo with a discovery interview

## Founder Tip

If you leave talking more than they did, you ran a pitch—not an interview.

## Make It Yours

1. **Hypothesis list** — three assumptions you will try to kill this week.
2. **Episode script** — five prompts that stay in the past (trigger → steps → fail → emotion → next time).
3. **Capture card** — fields: segment, trigger, emotion words, workaround, stakes, awareness cue.
4. **Stop rule** — what evidence would make you change ICP or kill a proto-persona.

## Insights & Metrics

1. **Episode yield** — Interviews with a full capture card ÷ Interviews run.
2. **Hypothesis kill rate** — Assumptions falsified or revised ÷ Assumptions tested (healthy discovery kills guesses).
3. **ICP hit rate** — Interviews that match ICP criteria ÷ Total interviews (low hit rate = recruiting problem).

## Behind the Data

- Are you still collecting compliments instead of episodes?
- Which hypothesis has survived three interviews without evidence?
- Are session notes stuck in chat while nothing durable landed in `docs/`?

## Related concepts

- [Feeling North Star](../concepts/01-feeling-north-star.md), [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md), [User Agency](../concepts/12-user-agency.md)
- Feeds: all other [Customer Discovery](index.md) pages; [Synthesis](06-synthesis.md)

## Further reading

- [The Mom Test (Rob Fitzpatrick)](https://www.momtestbook.com/) — Evidence over politeness.
- [User Interviews 101 (Nielsen Norman Group)](https://www.nngroup.com/articles/user-interviews/) — Structure, probing, bias.
- [Customer Development is Not a Focus Group (Steve Blank)](https://steveblank.com/2009/11/30/customer-development-is-not-a-focus-group/) — Hypotheses, not feature voting.
- [Contextual Inquiry (NN/g)](https://www.nngroup.com/articles/contextual-inquiry/) — When watching beats asking.

## Agent skill

- **Primary command:** `/productfeeling init` — capture what is already known and where durable findings will live; do not invent customers in chat
- **Related commands:** `/productfeeling persona`, `/productfeeling jobs`, `/productfeeling sequence` (Customer discovery)
- **When the agent should load this page:** "interview", "Mom Test", "discovery call", "talk to users", "validate assumption"
- **Companion handoff:** DocSlime — only **validated** findings graduate to `docs/`; raw session notes may stay in `.productfeeling/sessions/`. Never an external discovery skill. Impeccable out of scope during interviews. RedTeam optional on stubborn assumptions after synthesis.
- **Feeling north star this practice serves:** grounded clarity from evidence, not vibes
- **Anti-goals:** pitching in interviews, compliment-as-validation, non-ICP recruiting theatre
- **Reference path:** `skill/reference/init.md`
- **Durable DocSlime targets:** validated findings only → `docs/strategy/` and `docs/experience/` via [Synthesis](06-synthesis.md); sessions → `.productfeeling/sessions/` until graduated
