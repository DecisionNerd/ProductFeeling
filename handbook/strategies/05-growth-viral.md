# Growth & Viral


Help satisfied users invite and share so growth compounds from real value—never from contact spam or coerced invites.

**Prerequisite:** [Customer Discovery](../discovery/index.md) (especially [Talk, Search, and Buy](../discovery/04-how-customers-talk-search-buy.md)). Core concept: [Social Transmission](../concepts/14-social-transmission.md). Also [User Agency](../concepts/12-user-agency.md), [Retention](03-retention.md).

- [Referral](../ttps/referral.md): Help satisfied users invite people who will genuinely benefit, with a clear and respectful path for everyone
- [Shareability](../ttps/shareability.md): Help users share a meaningful outcome when they want to tell its story
- [Contact Bridge](../ttps/contact-bridge.md): Connect users to people they already know—without turning their address book into a growth hack
- [Deep-link](../ttps/deep-link.md): Drop users into the exact moment, feature, or context that matters
- [Success Moments](../ttps/success-moments.md): Mark meaningful progress with feedback that feels earned, then let users decide what comes next

## Supporting Tools, Techniques, and Practices (TTPs)

- [Gamified Progress](../ttps/gamified-progress.md): Make meaningful progress visible, achievable, and fully in the user’s control
- [Effort Moat](../ttps/effort-moat.md): Honour what people have built, so their progress remains useful and recognisable
- [Variable Reward](../ttps/variable-reward.md): Add optional novelty around reliable value, without making users chase uncertainty
- [System Widget](../ttps/system-widget.md): Put one timely, glanceable piece of user-chosen value where people already look
- [Spark Curiosity](../ttps/spark-curiosity.md): Offer a truthful glimpse of a useful outcome, then let users choose whether to explore it

## Insights & Metrics

Measure whether sharing and invites compound—and whether the users they bring stick.

1. Viral Coefficient (K-Factor)
   - Formula: Invitations sent per user × Invitation acceptance (conversion) rate
   - What it measures: Average new users each existing user brings through the invite/share loop
   - Why it matters: K > 1 is rare; even modest K with strong retention still lowers acquisition cost. A high K with poor retention is a leaky loop
2. Viral Cycle Time
   - Formula: Median time from a user’s first invite-eligible moment to their first successful referral (invitee activates)
   - What it measures: How fast one generation of the loop completes
   - Why it matters: Shorter cycles compound more at any K; speeding empty prompts without value usually hurts quality
3. Organic Share of New Users
   - Formula: (New organic users in period ÷ Total new users in period) × 100
   - What it measures: How much acquisition comes from word-of-mouth, shares, and unpaid discovery vs paid
   - Why it matters: Rising paid dependence with flat organic share often means the loop is weak or prompts feel extractive
4. Referral Programme return on investment (ROI)
   - Formula: ((Revenue attributable to referred users − Referral costs) ÷ Referral costs) × 100
   - What it measures: Whether incentives and programme ops pay back
   - Why it matters: Profitable only if referred users activate and retain—not if rewards buy one-off signups
5. Network Density (where connections are the product)
   - Formula: (Connected user pairs ÷ Total possible pairs) × 100
   - What it measures: How interconnected the graph is for collaboration and invitation paths
   - Why it matters: Density without mutual value is vanity; useful density predicts when invites feel natural rather than forced

## Behind the Data

Diagnose whether people *want* to invite or share—and what blocks a respectful loop.

### Loop quality & timing

- Which Success Moments produce shares or invites that convert—and which prompts get dismissed or reported?
- Does earlier ask raise invite volume but lower acceptance, activation, or trust?
- Where do Deep-links land invitees, and does that context match the story the sharer told?

### Network & value

- At what connected-group size does the product feel clearly better for the user?
- Which collaborative or multiplayer features create invites that help both sides?
- Do Contact Bridge suggestions feel useful and optional, or like harvesting an address book?

### Channel & incentive health

- Which share/referral channels bring users with the best activation and retention—not just the most clicks?
- How do organic vs incentivised referrals differ on quality, and when do rewards attract mercenary invites?
- What shareable artefacts convert without pressuring the user to broadcast?

## Further reading

- [Lessons Learned – Viral Marketing (David Skok)](https://www.forentrepreneurs.com/lessons-learnt-viral-marketing/) — Canonical K-factor and why cycle time often dominates growth math.
- [Why the best way to drive viral growth is to increase retention (Andrew Chen)](https://andrewchen.com/more-retention-more-viral-growth/) — Retention as the foundation of durable viral loops.
- [16 Ways to Measure Network Effects (a16z)](https://a16z.com/16-ways-to-measure-network-effects/) — Practical metrics across acquisition, engagement, and economics—not just vanity K.
- [The Network Effects Manual (NFX)](https://www.nfx.com/post/network-effects-manual) — Taxonomy of network-effect types so “viral” is not treated as one lever.
- [The Dynamics of Network Effects (a16z)](https://a16z.com/the-dynamics-of-network-effects/) — How network value evolves—and why early loops can weaken without care.

## Agent skill

- **Primary command / sequence:** `/productfeeling sequence` — `jobs → peaks-ends → trust → anti-patterns → review`
- **Core TTPs to load:** Referral, Shareability, Contact Bridge, Deep-link, Success Moments
- **Supporting TTPs:** Gamified Progress, Effort Moat, Variable Reward, System Widget, Spark Curiosity
- **When the agent should use this strategy:** "referral programme", "invite flow", "share sheet", "viral loop", "organic growth", "network invite"
- **Companion handoff:** Impeccable — share sheets, invite flows, deep-link landing states, and referral UI; DocSlime — when growth-loop definitions or referral economics belong in `docs/strategy/`; RedTeam — before contact-import prompts, incentive structures, or pre-value invite walls (`/redteam assumptions` on who benefits and who bears cost)
- **Feeling north star this strategy serves:** pride worth sharing through helpful invitation
- **Anti-goals:** address-book spam, forced invites before value, dark-pattern share walls, incentive bait that harms invitees, manufactured FOMO
- **Reference path:** `skill/reference/sequence.md`
