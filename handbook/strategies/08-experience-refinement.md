# Experience Refinement


Make competent products feel considered—feedback, waits, character, and finishes that earn trust without slowing the job.

**Prerequisite:** [Customer Discovery](../discovery/index.md). Core concepts: [Emotional Design](../concepts/06-emotional-design.md), [Aesthetic–Usability Effect](../concepts/08-aesthetic-usability-effect.md), [Peak–End Rule](../concepts/07-peak-end-rule.md), [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md), [Mental Models](../concepts/05-mental-models.md).

- [Micro Interactions](../ttps/micro-interactions.md): Small responses that make an action feel acknowledged, understandable, and complete
- [Small Quirk](../ttps/small-quirk.md): A small, repeatable flourish that makes a clear product interaction feel recognisably yours
- [Loading Feedback](../ttps/loading-feedback.md): Make unavoidable waits legible, calm, and proportionate
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next
- [Perceived Effort Delay](../ttps/perceived-effort-delay.md): When work takes time, show the real work; when it does not, respect the user’s time

## Supporting Tools, Techniques, and Practices (TTPs)

- [Pattern Alignment](../ttps/pattern-alignment.md): Use familiar mental models where they help people act with confidence
- [JTBD Copywriting](../ttps/jtbd-copywriting.md): Write from the progress the user is trying to make, not the feature your product wants to describe
- [Variable Reward](../ttps/variable-reward.md): Add optional novelty around reliable value, without making users chase uncertainty
- [Progressive Disclosure](../ttps/progressive-disclosure.md): Reveal the next useful layer of complexity when the user needs it, while keeping deeper capability easy to find
- [Product Voice](../ttps/product-voice.md): One recognisable voice, with a tone that adapts to the user’s moment—celebratory at wins, plain and calm at failures

## Insights & Metrics

Measure whether polish made work clearer and calmer—not whether people lingered longer.

1. Task Success Rate
   - Formula: (Successful task completions ÷ Total task attempts) × 100
   - What it measures: Whether people can finish the jobs the product claims to support
   - Why it matters: Refinement that does not raise success is decoration; frustration still wins
2. Median Time on Task
   - Formula: Median time from task start to successful completion (same task definition over time)
   - What it measures: Efficiency after feedback, copy, and disclosure changes
   - Why it matters: Good polish usually removes hesitation and rework; longer sessions are not a win
3. Error Rate
   - Formula: (User errors or failed actions ÷ Total relevant actions) × 100
   - What it measures: Clarity of affordances, states, and recovery
   - Why it matters: Spikes name moments that feel broken even when the happy path looks fine
4. Task Ease (Single Ease Question / SEQ) or Perceived Usability (System Usability Scale / SUS)
   - Formula: Post-task Single Ease Question (1–7), or post-session System Usability Scale score
   - What it measures: How usable the experience *felt*, not only whether it completed
   - Why it matters: Aesthetic polish can mask struggle in comments—pair perception with success and errors
5. Wait Abandon Rate
   - Formula: (Sessions that leave during a defined wait state ÷ Sessions that entered that wait) × 100
   - What it measures: Whether loading and “working” feedback keep people oriented
   - Why it matters: Opaque or theatrical waits become negative peaks people remember

## Behind the Data

Find where the product feels clunky, inconsistent, or unintentionally loud.

### Usability & recovery

- Which tasks have the lowest success rates—and what do people do just before they fail or retry?
- How do success and time on task differ by device, locale, or entry path?
- Which errors repeat most—and are they slips, unclear labels, or missing system status?

### Feedback & perceived performance

- Where do waits feel longest relative to real duration—and does Loading Feedback match the work?
- After a Success Moment, do people continue with confidence, stall, or undo?
- Are Micro Interactions clarifying state, or adding motion that delays the next useful action?

### Character without clutter

- Which Small Quirk or Variable Reward moments are noticed—and which are ignored or muted?
- Where does Pattern Alignment fail (people hunt for a control that “should” be elsewhere)?
- Does Progressive Disclosure hide power users need, or still dump complexity too early?

## Further reading

- [Aesthetic–Usability Effect (concept)](../concepts/08-aesthetic-usability-effect.md) and [Peak–End Rule (concept)](../concepts/07-peak-end-rule.md) — Handbook working definitions before the primary sources.
- [Microinteractions in User Experience (NN/g)](https://www.nngroup.com/articles/microinteractions/) — Feedback as system status, error prevention, and brand—not ornament.
- [Response Times: The 3 Important Limits (NN/g)](https://www.nngroup.com/articles/response-times-3-important-limits/) — Enduring thresholds for instantaneous, flow-preserving, and attention-holding waits.
- [Beyond the Net Promoter Score: Measuring Perceived Usability (NN/g)](https://www.nngroup.com/articles/measuring-perceived-usability/) — SUS and Single Ease Question as durable complements to success and error rates.

## Agent skill

- **Primary command / sequence:** `TODO` (e.g. `/productfeeling sequence experience-refinement` — not final)
- **Core TTPs to load:** `TODO` (Micro Interactions, Small Quirk, Loading Feedback, Success Moments, Perceived Effort Delay)
- **Supporting TTPs:** `TODO` (Pattern Alignment, JTBD Copywriting, Variable Reward, Progressive Disclosure)
- **When the agent should use this strategy:** `TODO` ("feels cheap", "polish pass", "microinteraction audit", "loading states", "delight without clutter")
- **Companion handoff:** `TODO` (Impeccable for motion/craft execution; DocSlime if refinement standards land in PRODUCT.md)
- **Feeling north star this strategy serves:** `TODO` (calm competence, earned character, legible waits and finishes)
- **Anti-goals:** `TODO` (fake delays, animation that blocks the job, novelty loops that demand chase, delight that masks failed tasks)
- **Reference stub path:** `skill/reference/TODO.md`
