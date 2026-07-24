# Deep-link


Drop users into the exact moment, feature, or context that matters.

## What it is

A deep link is a promise made in a message—an email, a push notification, a shared URL—about exactly where the tap will land: not the app's home screen, but the specific invite, lesson, order, or document the copy named. It covers same-session links, cross-channel links (an email that opens the app to the right object), and deferred deep links that have to survive an app-store install and still remember what the user clicked before they had the app at all. Distinguish it from generic navigation: a deep link is not just "a link into the app"—it's a link that names a destination and is judged entirely on whether it delivers that specific destination.

A calendar invite that opens straight to the event, with the right people already visible, is a deep link keeping its promise. The same invite that opens the app's generic dashboard and leaves the user to hunt for the event is a deep link that has technically fired and functionally failed.

## Why it works

The mechanism is [Friction](../concepts/04-friction.md) reduction at the point of highest intent: the user has already decided to act—that's why they tapped—so any distance between the tap and the named destination is pure search cost with no corresponding benefit, exactly the mechanical-friction Friction's taxonomy singles out as cheapest to remove and most punishing to leave in place. A deep link that works removes an entire navigation flow's worth of friction in one hop.

But a deep link is also a claim, in [Calibrated Trust](../concepts/11-calibrated-trust.md)'s sense: the message asserted a specific destination, and the tap is the user cross-examining that assertion. Landing anywhere else—a generic home, a login wall with no memory of what was promised, a dead link with no explanation—reads as a broken promise rather than a technical hiccup, and it erodes trust faster than an honest slow load would, because the failure is legible as a lie rather than as a delay. Skip careful handling of logged-out or expired states and every edge case becomes one of these small, cumulative betrayals; the fix costs little relative to the trust it protects.

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
