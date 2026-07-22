# How Customers Talk, Search, and Buy

Three behaviours complete the discovery picture: the language customers use for their problem, the channels they trust when they go looking for solutions, and the process by which they actually decide to pay. Get these from evidence, not assumption—each one shapes surfaces you will ship.

## Definition

- **Voice of the customer (VoC)** is the customer's own vocabulary for the problem, the solution category, and the outcome—captured verbatim from interviews, support tickets, sales calls, reviews, and community posts. It is data, not decoration: the exact phrases people use are how they recognise that a product is for them.
- **Solution-seeking behaviour** is where and how people look when a need state activates: search queries (in *their* words), communities and peers they trust, review sites, app stores, and—increasingly—questions put to artificial intelligence (AI) assistants. These are the "watering holes" where your ICP already gathers.
- The **buying journey** is the path from problem to payment: who is involved, what evidence they need, what they compare, what could get you disqualified, and what makes the risk feel survivable. In consumer products this may be minutes long and solo; in business products it is a **buying committee**—champion, economic buyer, end users, security review—each needing different reassurance.

## Why it matters

Each behaviour maps to surfaces with a feeling on the line:

- **Talk** → recognition. Copy that mirrors the customer's language produces the small, decisive feeling of *being understood* ("finally, someone gets it"); copy in your internal jargon produces the translation tax that [Friction](../concepts/04-friction.md) catalogues as cognitive cost. You cannot mirror language you never collected.
- **Search** → arrival state. The channel someone arrives from encodes their [awareness stage](02-need-states.md): a community recommendation arrives warmer than a cold search; a comparison-site click arrives evaluating. Designing one landing experience for all arrivals wastes what the channel already told you.
- **Buy** → [calibrated trust](../concepts/11-calibrated-trust.md) under risk. Buying is the moment doubt peaks: money, commitment, and the fear of choosing wrong converge. A checkout or upgrade [surface](../concepts/03-surfaces-flows-states.md) designed without knowing the buyer's real evaluation process—what they need to verify, whom they must convince, what burned them last time—will supply generic persuasion where specific reassurance was needed ([The Paywall](../ttps/the-paywall.md), [Trust Building](../strategies/09-trust-building.md), [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)).

## Deep dive

1. **Mine language before writing any.** Harvest verbatims from interviews, tickets, reviews of competitors, and community threads; cluster them by need state; note the words customers use *and the words they never use*. Your category jargon ("workflow orchestration") versus their words ("stop babysitting the hand-offs") is a measurable gap—close it in their favour ([JTBD Copywriting](../ttps/jtbd-copywriting.md), [Product Voice](../ttps/product-voice.md)).
2. **Follow the actual search, not the imagined one.** In interviews, reconstruct the last real search: what did they type, whom did they ask, which answer did they trust, why? Peer recommendation usually outranks content; a trusted community thread outranks your homepage. This ordains where [Referral](../ttps/referral.md) and [Shareability](../ttps/shareability.md) matter more than advertising.
3. **Map the decision, including its politics.** For each buyer persona: what evidence moves them (trial, case study, security documentation, a colleague's word), what disqualifies instantly, and who else must say yes. Then supply the champion with what *they* need to sell internally—the buying journey often ends in a meeting you are not in.
4. **De-risk rather than pressure.** The honest levers at the decision point are risk reversal and proof: trials ([Sandbox Experience](../ttps/sandbox-experience.md)), transparent pricing, easy exit ([Graceful Exit](../ttps/graceful-exit.md)—leavability is a purchase criterion), and truthful social proof. Manufactured urgency at the moment of peak doubt is the signature dark pattern of this stage ([User Agency](../concepts/12-user-agency.md)).

## For engineers and agents

- VoC is infrastructure: pipe support tickets, sales-call transcripts, and review text into one searchable place, tagged by segment and need state. Copy decisions, naming decisions, and search-engine-optimisation keywords should all be queries against this corpus, not brainstorms.
- Name things—features, navigation, events, documentation headings—in customer vocabulary. Users search your docs and your UI with the same words they typed into Google; internal jargon in a menu is a findability bug. (Increasingly, AI assistants answer from your docs: docs written in customer language are how you appear in those answers correctly.)
- Preserve arrival context through the funnel: the campaign, query, or referrer that brought a signup should shape their first-run experience and be visible in analytics cohorts ([Deep-link](../ttps/deep-link.md)). Stripping it at the front door discards discovery data your marketing already paid for.
- Instrument the buying surfaces like the sensitive instruments they are: pricing-page dwell and return visits, checkout abandonment step, trial-to-paid lag. Long lags and repeat pricing visits are doubt made visible—the fix is usually missing reassurance (proof, exit terms, security answers), not a bigger discount.
- For agents: before rewriting customer-facing copy, ask for (or mine) the VoC corpus and reflect its vocabulary; before reviewing a checkout or paywall, ask who the buyer is, what they must verify, and who else has to approve. Persuasion generated without that context defaults to pressure.

## Where it shows up

- [Monetisation](../strategies/06-monetisation.md) and [Conversion Optimisation](../strategies/07-conversion-optimisation.md) implement the buying journey in-product.
- [Growth & Viral](../strategies/05-growth-viral.md) depends on the talk and search behaviours: advocacy travels through the same channels discovery maps.

## Further reading

- [What is a Buyer Persona? (Buyer Persona Institute)](https://buyerpersona.com/what-is-a-buyer-persona) — Buying-insights research: interviewing recent buyers about how the decision actually happened.
- [The End of Solution Sales (Harvard Business Review)](https://hbr.org/2012/07/the-end-of-solution-sales) — How much of the buying journey completes before anyone talks to you.
- [User Interviews 101 (Nielsen Norman Group)](https://www.nngroup.com/articles/user-interviews/) — Technique for collecting language and decision narratives without leading the witness.
- [The Mom Test (Rob Fitzpatrick)](https://www.momtestbook.com/) — Reconstructing real searches and real purchases instead of hypothetical ones.
