# Contact Bridge


Connect users to people they already know—without turning their address book into a growth hack.

## What it is

Contact Bridge is a permissioned bridge from a user's existing network—phone contacts, calendar guests, an org directory—into the product, used to find people already there, suggest who to invite, or autofill names the user already intends to include. It's one of three tools [Social Transmission](../concepts/14-social-transmission.md) distinguishes and that this handbook refuses to collapse into each other: Shareability lets a user broadcast an artefact or result; Referral invites a specific person the user names; Contact Bridge reads a list the user already has and turns it into recognisable matches. The difference matters because contacts access is a much higher-trust ask than either of the other two—you're not asking to post something, you're asking to see who someone knows.

Done well, it looks like a messaging app that says "3 people from your contacts are already here" and lets you message them—nothing more. Done badly, it's the same permission dialog used to silently harvest an entire address book and text everyone in it an invite the user never wrote, which is the friend-spam pattern this card exists to prevent.

## Why it works

The mechanism is straightforward: people join and stay where they recognise someone. A short list of familiar names replaces the cold, empty "find friends" screen with actual social proof, and—per Social Transmission—the reflective feeling of belonging is what makes people transmit value onward in the first place. But the mechanism only fires when the match feels earned rather than surveilled; the same technical capability that produces "oh, Sam's here too" can just as easily produce "how does this app know I know Sam", and the emotional read flips from delight to unease in the same instant.

That's why timing and consent do most of the work. Ask before the user understands the benefit, or bundle the permission into a vague "improve your experience" purpose string, and Contact Bridge reads as surveillance rather than connection—eroding the [Calibrated Trust](../concepts/11-calibrated-trust.md) the rest of the product is trying to build, on one of the highest-stakes data types a phone holds. Overdo it—auto-inviting the whole book, pre-ticking "invite all"—and you've stopped bridging contacts and started renting them out, the specific failure [User Agency](../concepts/12-user-agency.md) calls an asymmetry: entering was one tap, and the people on the other end never got a choice at all.

## When to use it

- Social, collaboration, community, or multiplayer products where other people are the product
- After the user understands why connections help (not as the first cold permission)
- In invite or Referral flows where selecting known people beats typing emails by hand
- When a task already implies people (share a doc, split a bill, plan an event)—then the ask feels earned

## Do

- Ask in context, with a specific benefit (“See who’s already here” / “Invite people on this trip”)
- Pair with Permission Serve: purpose string matches what you do next; skip is equal and shame-free
- Prefer limited or pick-and-choose access when the platform offers it; support deny and “maybe later”
- Show immediate value after grant (matches, suggestions)—then stop; do not silently keep scraping
- Let users choose whom to invite; default to none selected; send invites they authored or explicitly confirmed
- Minimise what you store and for how long; be clear if contact data leaves the device

## Don't

- Demand contacts before value, or block the product when they refuse
- Hide intent behind vague lines (“Improve your experience”)
- Auto-blast invites, SMS, or email to the whole book in the user’s name (friend spam / contact harvesting)
- Pre-tick “invite all,” bury Skip, or guilt them for protecting their address book
- Treat third parties’ phone numbers and emails as free marketing inventory—they did not opt into your product
- Assume full address-book access forever; design for limited access and empty/partial match states

## Founder Tip

Contact sync is a trust event, not a growth lever. If the best growth tactic is spamming someone else’s friends, you do not have a network product—you have a liability.

## Make It Yours

1. To decide if you need it at all:
   - Is “people I know” core to activation, or a vanity social layer?
   - What empty-state problem does Contact Bridge solve that search or codes cannot?
   - Would a directory, link invite, or QR code be more honest for your context?
2. To time and frame the ask:
   - Have you earned trust enough for this permission?
   - What sentence states the exact benefit and the next screen they will see?
   - Where does Skip live, and does it cost them anything real?
3. To design after grant:
   - Can you show recognisable matches within seconds?
   - How do you handle zero matches without making the grant feel wasted?
   - Do suggestions encourage conversation—or invite spam?
4. To protect privacy and agency:
   - Can users pick contacts instead of uploading everything?
   - Is invite confirmation explicit for every recipient?
   - What do you delete, and can they revoke access and wipe synced data?
5. To test without fooling yourself:
   - What % who sync take a meaningful next step (message, join, collaborate)?
   - Do connected users retain more—or did only high-intent users sync?
   - Where do people bounce: permission dialog, post-grant list, or after an unexpected invite went out?


## Related concepts

- [Social Transmission](../concepts/14-social-transmission.md)
- [User Agency](../concepts/12-user-agency.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [3 Design Considerations for Effective Mobile-App Permission Requests (Nielsen Norman Group)](https://www.nngroup.com/articles/permission-requests/) — Timing, cost–benefit, and why purpose copy for contacts access changes grant rates.
- [Meet the Contact Access Button (WWDC24, Apple)](https://developer.apple.com/videos/play/wwdc2024/10121/) — Limited contacts access and incremental sharing patterns platforms now expect.
- [Integrate privacy into your development process (WWDC25, Apple)](https://developer.apple.com/videos/play/wwdc2025/246/) — Ask in context, set expectations early, treat permission as a trust moment.
- [Guidelines on dark patterns in social media platform interfaces (EDPB)](https://www.edpb.europa.eu/system/files/2022-03/edpb_03-2022_guidelines_on_dark_patterns_in_social_media_platform_interfaces_en.pdf) — Regulatory framing of manipulative consent and onboarding patterns under GDPR.
- [Friend Spam / Contact Harvesting (darkpatterns.org via Brignull taxonomy)](https://www.deceptive.design/types/friend-spam) — Named anti-pattern: access sold as connection, used to spam contacts in the user’s name.

## Agent skill

- **Primary command:** `/productfeeling trust` — contact access is a consent and privacy moment, not a growth hack
- **Related commands:** `/productfeeling anti-patterns`, `/productfeeling states`, `/productfeeling handoff`, `/productfeeling brief`
- **When the agent should load this TTP:** "find friends", "sync contacts", "address book invite", "contact permission", "invite from contacts"
- **Companion handoff:** Impeccable — permission pre-prompt, match list, and skip-equal UI; DocSlime — privacy, consent, and data-retention requirements
- **Feeling north star this TTP serves:** belonging, familiar connection, earned trust
- **Anti-goals:** friend spam, forced sync, vague purpose, third-party PII as growth fuel
- **Reference path:** `skill/reference/trust.md`
