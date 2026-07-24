# Interview Method

How to ask so you get evidence—not politeness, predictions, or a pitch meeting. This page is the *how* that runs through [Who](01-ideal-customer-and-users.md), [Why now](02-need-states.md), [Workflow](03-how-customers-work-today.md), and [Talk / search / buy](04-how-customers-talk-search-buy.md).

## What it is

**Discovery interviews** test hypotheses about problems, workflows, and decisions by listening to **past behaviour in real context**. The compact standard is Rob Fitzpatrick’s *The Mom Test*: ask about their life, not your idea; prefer the past over the hypothetical; talk less, listen more. You are not validating a pitch deck. You are reconstructing episodes—what happened, what they tried, what hurt, what they paid (time, money, attention) to make the pain stop.

A good interview has a simple arc: open on a concrete episode → walk the sequence (trigger, tools, people, failures) → harvest emotion and workarounds → only then, if ever, mention your idea. Anything that reverses that order contaminates the data.

## Why it works

People are generous with predictions (“I would definitely use that”) and honest about the past (“last quarter I exported to Sheets and emailed it”). Compliments feel like validation and are almost worthless: friends, moms, and polite strangers will praise your idea to end the conversation kindly. Pitching mid-interview trains them to flatter you and trains *you* to hear what you hoped to hear.

Evidence from concrete episodes is what personas, need states, and voice-of-customer (VoC) are built from—and what agents can later load without inventing customers. Hypothesis-driven discovery (Steve Blank’s customer development) means you walk in with assumptions to kill, not a blank slate and not a feature vote. Focus groups and “would you use…” surveys fail here for the same reason: they elicit opinions about the future instead of behaviour from the past.

## Going deeper

Craft that separates evidence from noise:

1. **Open on an episode, not a category.** “Walk me through the last time this happened” beats “How do you feel about expense tracking?” The last real instance recovers trigger, circumstance, tools, and emotion; the abstract question recovers a persona they wish they were.
2. **Stay in the past tense.** “What did you do next?” and “When did that break?” outperform “Would you want…?” and “How important is…?” Importance without a paid or endured cost is theatre.
3. **Mine the four fields every time.** Capture **trigger** (why that day), **emotion words** (verbatim), **workaround** (what they built or endured), and **switching stakes** (what a move would put at risk). Those four fields feed the other discovery pages directly.
4. **Defer the pitch.** If they ask what you are building, park it: “I’ll show you at the end—I don’t want to bias the story.” Showing early turns the rest of the call into a demo review.
5. **Match the person to the question.** Recent buyers and switchers carry buy-journey truth; practitioners who do the job weekly carry workflow truth. Interviewing only founders’ friends, colleagues, or people outside the Ideal Customer Profile (ICP) and calling it discovery is recruiting theatre.
6. **Watch when you can.** Contextual inquiry—seeing the work in its environment—beats recollection for routines people have stopped noticing. Pair episode interviews with observation when the job is habitual and invisible.

## For builders and agents

Treat interviews as a pipeline into durable docs, not as vibes stored in chat. With consent, record or take near-verbatim notes; tag by segment and need state so synthesis can cluster. Keep raw session notes ephemeral (for example `.productfeeling/sessions/`); graduate only **validated** claims into `docs/` via [Synthesis](06-synthesis.md).

Agents must not invent customers. Before `/productfeeling persona` or `jobs`, load what discovery already wrote—or run interviews and synthesis first. When an agent helps prep a call, have it generate **past-tense prompts** and a capture card, not a pitch script. When it summarises a transcript, force the four fields (trigger, emotion, workaround, stakes) and flag every compliment and future-tense promise as non-evidence.

Red flags that the session was a pitch, not discovery: you talked more than they did; the notes are mostly about your product; the only “proof” is “they said they’d buy.”

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
