# Calibrated Confidence


When the product uses AI, show how sure it is—so people know when to trust the output and when to check it.

## What it is

Calibrated Confidence is the discipline of making an AI system's interface tell the truth about what it actually knows. It shows up as hedged language that tracks real accuracy rather than a house style of false certainty, visible sources or reasoning where they help someone judge a claim, and a review or confirmation step before an output is allowed to act on the user's behalf. It answers the question every probabilistic feature raises the moment it ships: how much should the person looking at this screen believe it?

This is a different job from Fail Safe, which protects against irreversible mistakes in deterministic systems—a delete button, a payment, a send. Calibrated Confidence is specifically about epistemic honesty on a system that can produce a fluent, wrong answer with exactly the same confident tone as a correct one. A support-triage assistant that says “likely a billing issue, but I’m not certain—here’s what I based that on” is practising this; one that states the same guess in a flat, authoritative voice is not, even when the model underneath is identical.

## Why it works

The underlying mechanism is [Calibrated Trust](../concepts/11-calibrated-trust.md): trust in a system should match its actual reliability, not exceed or undershoot it. Over-trust is invisible while it's happening—a wrong answer stated with confidence gets absorbed as the user's own mistake rather than the system's, because nothing on screen signalled doubt. Under-trust is the quieter failure: a genuinely useful feature gets ignored because the interface never earned the right to be believed. Calibrated Confidence is the lever that moves an interface toward informed reliance and away from both silent failure modes.

Skip it and you get precision theatre: percentages and assured phrasing the model's actual performance cannot support, which works fine until the one moment it's confidently wrong in a context that matters—and users calibrate on that worst error, not the average accuracy that preceded it. Overdo it and you get the opposite failure: hedge every sentence until "I'm not sure" becomes background noise the user has learned to ignore, which is functionally the same as never having said it. The craft is matching the hedge to the actual eval, not to a house style of caution or bravado.

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
