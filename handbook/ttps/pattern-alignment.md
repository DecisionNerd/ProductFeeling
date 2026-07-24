# Pattern Alignment


Use familiar mental models where they help people act with confidence.

## What it is

Pattern alignment means building controls, layouts, and flows that behave the way your users already expect them to, because some other product or platform taught them the expectation first. It draws on Jakob's Law: people spend the overwhelming majority of their time in products you didn't build, so they arrive with a fully formed theory of how swipe, undo, sharing, and navigation should work, and they apply that theory to you whether you intended it or not. This is not the same as copying a competitor's screen wholesale—pattern alignment respects the convention underneath a pattern, the settled way of solving a task, not the specific visual choices a rival happens to have made, and it stops the moment you're reproducing their mistakes along with their conventions.

A photo app that uses pinch-to-zoom, a settings screen with the platform's standard toggle style, an undo that behaves like every other undo a user has met: none of these are creative choices, and that's the point. The craft is knowing which controls are load-bearing enough to demand convention—anything destructive, anything navigational, anything used every day—and which few moments are actually worth spending your novelty budget on instead.

## Why it works

A matched expectation is invisible: the user predicts correctly, acts, and moves on without noticing they predicted anything at all. `Mental Models and Affordances` explains why the payoff is disproportionate to how small each convention feels—every correct prediction is credited to the user's own competence, and competence compounds into confidence over a session. A broken expectation is the opposite of invisible; it's one of the sharpest negative feelings an interface can produce, because it doesn't register as confusion, it registers as betrayal—the product did something the user's own experience told them it wouldn't.

Skip pattern alignment and the cost usually shows up as hesitation that never reaches analytics as a clean drop-off: a pause before tapping, a back-and-forth between two controls, a support ticket asking whether something is "supposed to do that." Overdo it, and the risk flips—following a convention past the point it's earned, using it as an excuse never to test whether users actually understood it, or reaching for a familiar-looking pattern specifically because it will be misread, the way a fake close button or a cookie banner's visual grammar borrows trust rather than earning it. Familiarity is a tool for building trust quickly; it is never licence to borrow trust you haven't put in the work to deserve.

## When to use it

- During first use, onboarding, and high-frequency tasks
- When building on platform behaviours such as navigation, selection, sharing, or undo
- When users are migrating from a well-known workflow or tool
- Before introducing a novel interaction with a clear advantage over an established pattern

## Do

- Research the conventions your specific users bring from their tools and platform
- Follow platform guidance for common controls, labels, gestures, and accessibility
- Introduce novelty gradually, with visible affordances and useful feedback
- Pair unfamiliar flows with `Micro Interactions` and plain language that explain the result

## Don't

- Copy a competitor’s pattern without understanding the task it serves
- Break a convention merely to appear distinctive
- Mix conflicting mental models in the same flow
- Treat familiarity as permission to reproduce deceptive consent, subscription, or sharing patterns

## Founder Tip

Spend your novelty budget where your product is genuinely better; let everything else feel unsurprising.

## Make It Yours

1. What products, devices, and workflows have taught your audience how this should work?
2. Which controls must follow platform convention because errors would be costly?
3. Where are users pausing, backtracking, or trying the wrong action?
4. What benefit justifies any unfamiliar pattern, and how will users discover it?
5. Can you validate the pattern with representative users before making it a signature behaviour?


## Related concepts

- [Mental Models and Affordances](../concepts/05-mental-models.md)
- [Friction](../concepts/04-friction.md)

## Further reading

- [Mental Models](https://www.nngroup.com/articles/mental-models/) — Nielsen Norman Group’s introduction to designing around user expectations.
- [Jakob’s Law](https://lawsofux.com/jakobs-law/) — a concise explanation of why familiar conventions reduce learning cost.
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) — platform conventions for Apple experiences.
- [Material Design: Understanding Layout](https://m3.material.io/foundations/layout/understanding-layout/overview) — Android and web layout conventions.
- [ISO 9241-110: Interaction Principles](https://www.iso.org/standard/38009.html) — established principles for dialogue design.

## Agent skill

- **Primary command:** `/productfeeling trust` — evaluate familiar patterns that build confident action without deceptive conventions
- **Related commands:** `/productfeeling feel`, `/productfeeling friction`, `/productfeeling states`
- **When the agent should load this TTP:** "mental model", "platform convention", "familiar pattern", "learnability", "migration from another tool"
- **Companion handoff:** Impeccable — navigation, controls, and affordance execution
- **Feeling north star this TTP serves:** confident action through understandable conventions
- **Anti-goals:** copying competitors blindly, breaking conventions for novelty, conflicting models, deceptive consent patterns
- **Reference path:** `skill/reference/trust.md`
