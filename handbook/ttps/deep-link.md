# Deep-link


Drop users into the exact moment, feature, or context that matters.

## What it is

A link (or notification payload) that opens a specific screen, object, or flow inside the product—bypassing generic home navigation. Includes same-session deep links, cross-channel links (email → app, web → app), and deferred deep links that preserve destination across an install.

## Why it works

It keeps the promise of the tap. When the message says “your invite” or “continue lesson 3,” landing on that context reduces search cost and protects attention. Broken promises (generic home, wrong account, dead content) feel like bait—and erode Trust Building faster than a slow load.

## When to use it

- Returning users resuming unfinished work
- Sharing, Referral, and invite flows that name a specific object or room
- Lifecycle messages (email, push, SMS) that claim a concrete destination
- Install or re-engagement campaigns where the destination must survive the store (deferred deep link)—when you can keep that promise reliably

## Do

- Match the landing screen to the CTA’s promise; pass enough context to render the right object
- Handle logged-out, new-install, and wrong-account states: queue the destination, auth if needed, then route—or offer a clear recovery path
- Bridge channels deliberately (web ↔ app) with Universal Links / App Links (or equivalent) tested on real clients
- Fail soft: expired, deleted, or unresolvable links fall back to a useful place with an honest explanation—not a blank error
- Persist intended destination across onboarding when appropriate; resolve before dumping people on a generic first-run home

## Don't

- Dump users on a generic home after promising something specific
- Use deep links as cloaked marketing traps (promise value, deliver a paywall or unrelated upsell)
- Ignore logged-out, expired-session, or content-deleted edge cases
- Block first open on flaky deferred-link resolution with endless spinners; time out to normal onboarding
- Assume every platform preserves install context equally—design for “best effort” deferred cases

## Founder Tip

A deep link is a promise with a URL. If you cannot keep it after install, auth, or overnight, do not make it. Precision beats clever attribution theatre.

## Make It Yours

1. To define destinations:
   - Which screens are worth a one-tap shortcut from email, push, or share?
   - What objects are commonly named in support and growth messages?
   - Where do returning users actually need to land—not where marketing wishes they would?
2. To keep the promise:
   - Does the entry match the CTA word-for-word in spirit?
   - What happens if they are logged out, on a new device, or in the wrong workspace?
   - Can the destination wait through signup without being lost?
3. To harden edge cases:
   - Expired sessions, deleted content, revoked invites, outdated app versions—what do they see?
   - How do in-app browsers and OS link handlers behave for your top links?
   - What is the fallback when deferred matching fails?
4. To protect trust:
   - Does this feel like a personal shortcut or a bait-and-switch?
   - Are you routing to action, or only to a billboard?
   - Would you be comfortable explaining the landing page to a sceptical user?
5. To measure:
   - Tap → correct destination rate (not just “app opened”)
   - Task completion from deep-linked sessions vs organic
   - Where drop-off happens after click-in (auth wall, empty state, paywall)


## Related concepts

- [Surfaces, Flows, and States](../concepts/03-surfaces-flows-states.md)
- [Friction](../concepts/04-friction.md)
- [Calibrated Trust](../concepts/11-calibrated-trust.md)

## Further reading

- [Allowing apps and websites to link to your content (Apple)](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content) — Universal Links fundamentals for keeping web→app promises.
- [Handle Android App Links](https://developer.android.com/training/app-links) — Official App Links guidance for verified HTTPS→app routing.
- [Mobile Deep Linking (Nielsen Norman Group)](https://www.nngroup.com/articles/mobile-deep-linking/) — UX framing: deep links reduce navigation cost when destinations match intent.
- [Play Install Referrer API (Android Developers)](https://developer.android.com/google/play/installreferrer) — Platform mechanism often used when destination must survive install on Android.
- [Firebase Dynamic Links deprecation FAQ](https://firebase.google.com/support/dynamic-links-faq) — Why legacy deferred-link stacks need an explicit replacement plan post-FDL.

## Agent skill

- **Primary command:** `/productfeeling map` — route taps to the promised screen and preserve context across channels
- **Related commands:** `/productfeeling states`, `/productfeeling trust`, `/productfeeling anti-patterns`, `/productfeeling brief`
- **When the agent should load this TTP:** "deep link", "open to screen", "deferred link", "email to app", "notification landing"
- **Companion handoff:** Impeccable — destination UI, auth gates, and fallback states; DocSlime — link routing, deferred matching, and cross-channel requirements
- **Feeling north star this TTP serves:** respected intent, continuity, low effort
- **Anti-goals:** bait-and-switch landings, auth dead-ends, endless deferred spinners
- **Reference path:** `skill/reference/map.md`
