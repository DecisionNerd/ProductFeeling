# System Widget


Put one timely, glanceable piece of user-chosen value where people already look.

## What it is

A System Widget is an ambient, glanceable surface—home screen, lock screen, desktop, or another system-level slot—that shows one current, useful piece of the product without requiring the app to open. It answers a single recurring question (what's my status, what's next, how much progress) in the time it takes to glance at a phone, and nothing more. That's what distinguishes it from a notification: a notification interrupts, arriving on the product's schedule and demanding a decision; a widget sits quietly in a place the user was already going to look, for their own reasons, and simply has an answer waiting when they get there.

Consider a delivery app's live ETA sitting on the lock screen, or a fitness app's completion ring on the home screen: neither requires opening the app, and both exist purely to answer the one question the user is likely to have at that moment—without asking for anything in return.

## Why it works

Habit Formation draws a sharp line between cues the user owns—their own context, routines, and glances—and cues the product owns, like a push-notification schedule; the first earns a place in someone's life, the second rents attention that compounds into resentment over time. A widget is the clearest example of the first kind: it anchors to a screen the user already visits on their own terms (unlocking their phone, glancing at the desktop) rather than inventing a reason to interrupt them, which is also why it collapses the ordinary Friction of opening an app, navigating, and waiting for a screen to render into something closer to zero.

The failure mode this TTP heads off is the temptation to treat that earned, high-trust real estate as inventory: turning the glance into an advertising slot, padding it with a dense mini-dashboard, or using badges and alerts to manufacture urgency the user never asked for. Any of those choices spends down the very trust that made the widget worth building in the first place, and once a widget starts lying or nagging, users remove it rather than tolerate it.

## When to use it

- When value changes over time: status, progress, schedules, live activity, or rituals
- When a single glance can help users decide whether to act
- When users return to the same information frequently

## Do

- Design for one clear question per size and context
- Let users choose content, refresh behaviour, and any sensitive detail shown
- Deep-link to the exact relevant place when a tap is useful

## Don't

- Turn the widget into an advertising slot or engagement counter
- Show dense dashboards, stale information, or private data by default
- Use alerts or badges to manufacture urgency

## Founder Tip

A widget is a promise: every glance should save time or provide reassurance.

## Make It Yours

1. What is the one question users repeatedly ask between app sessions?
2. Can a glance answer it accurately in the available space?
3. What information would feel useful in public, and what must remain private?
4. Which choices should the user make about content and refresh frequency?
5. What would cause someone to keep, remove, or recommend this widget?


## Related concepts

- [Habit Formation](../concepts/10-habit-formation.md)
- [Friction](../concepts/04-friction.md)

## Further reading

- [Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets) — Apple guidance for context-aware, system-integrated widget design.
- [App widgets overview](https://developer.android.com/develop/ui/views/appwidgets/overview) — Android guidance on widget use cases and constraints.
- [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/SupportingNotificationsinYourApp.html) — Useful principles for permission, relevance, and actionable system surfaces.

## Agent skill

- **Primary command:** `/productfeeling feel` — design glanceable surfaces that answer one user-chosen question between sessions
- **Related commands:** `/productfeeling states`, `/productfeeling jobs`, `/productfeeling friction`
- **When the agent should load this TTP:** "home screen widget", "lock screen glance", "desktop widget", "live activity", "glanceable status"
- **Companion handoff:** Impeccable — widget layout, privacy controls, and deep-link destinations
- **Feeling north star this TTP serves:** timely reassurance or saved time at a glance
- **Anti-goals:** advertising slots, stale or dense dashboards, private data by default, manufactured urgency badges
- **Reference path:** `skill/reference/feel.md`
