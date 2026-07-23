# Calibrated Confidence


When the product uses AI, show how sure it is—so people know when to trust the output and when to check it.

## What it is

Honest communication of AI capability and uncertainty: plain-language confidence signals, hedged phrasing that matches real system performance, visible sources or reasoning where they help, and easy paths to review, correct, or reject an output before it takes effect.

## Why it works

Probabilistic systems are sometimes wrong, and users know it. The goal is *calibrated* trust—not maximum trust: over-trust produces silent errors users absorb as their own mistakes; under-trust makes the feature dead weight. Matching the interface’s stated confidence to actual performance, and keeping the human in charge of consequential actions, is what makes AI feel like a competent collaborator instead of a confident liar.

## When to use it

- AI-generated answers, summaries, classifications, and recommendations
- Automation that acts on the user’s behalf (drafts, edits, transactions)
- Low-confidence or high-stakes outputs where a wrong result costs real money, time, or trust
- Anywhere the model can fail silently and the user would not notice

## Do

- Set expectations up front: what the system is good at, and where it is unreliable
- Match language precision to real performance—hedge honestly (“this may be wrong”) rather than implying false certainty
- Show sources, inputs, or brief reasoning when they help the user judge the output
- Keep consequential actions behind explicit confirmation; make edit, reject, and flag one tap away
- Fail gracefully: when confidence is low, say so and offer the manual path

## Don't

- Display precise percentages the model cannot actually support
- Let automation act irreversibly without review where errors are costly
- Bury “AI can make mistakes” in legal copy while the UI radiates certainty
- Blame the user, or the model, when a correction is needed—just make correcting effortless
- Treat every output the same regardless of stakes

## Founder Tip

Users calibrate on your worst confident error, not your average accuracy. One assertive hallucination in a serious context costs more trust than fifty honest “I’m not sure” moments.

## Make It Yours

1. Where can your AI be wrong in ways users would not notice—and what happens next?
2. For each AI surface, what confidence signal fits: hedged language, labels, sources, or review gates?
3. Which actions need human confirmation because the cost of a wrong output is high?
4. How does a user correct the system, and does the correction visibly improve anything?
5. Does your interface’s certainty match the numbers in your evals?


## Related concepts

- [Calibrated Trust](../concepts/11-calibrated-trust.md)
- [User Agency](../concepts/12-user-agency.md)
- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)

## Further reading

- [People + AI Guidebook (Google PAIR)](https://pair.withgoogle.com/guidebook/) — Trust calibration, explainability, and feedback loops for human-centred AI.
- [Guidelines for Human-AI Interaction (Microsoft HAX Toolkit)](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) — 18 evidence-based guidelines, including making clear how well the system can do what it does.
- [Explainability + Trust chapter (Google PAIR)](https://pair.withgoogle.com/chapter/explainability-trust/) — When and how to show model confidence so it informs decisions.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — Governance framing for trustworthy AI beyond the interface.
- [Are Model Predictions Probabilities? (Google PAIR explorable)](https://pair.withgoogle.com/explorables/uncertainty-calibration/) — Interactive look at what calibration means and why raw model scores mislead.

## Agent skill

- **Primary command:** `/productfeeling trust` — match AI certainty to real capability and keep humans in charge of consequential actions
- **Related commands:** `/productfeeling feel`, `/productfeeling anti-patterns`, `/productfeeling states`
- **When the agent should load this TTP:** "AI feature", "model confidence", "hallucination", "AI trust", "automation review"
- **Companion handoff:** Impeccable — AI output UI, review gates, and low-confidence states; DocSlime — when reliability or limitation claims become durable product requirements
- **Feeling north star this TTP serves:** informed reliance, collaborative control, honesty about limits
- **Anti-goals:** false certainty, silent automation errors, precision theatre, burying disclaimers
- **Reference path:** `skill/reference/trust.md`
