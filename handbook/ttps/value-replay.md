# Value Replay


Bring a user’s meaningful progress back into view, only where and when they have chosen to receive it.

## What it is

Value Replay is a consented, cross-channel resurfacing of a user's own progress, results, or unfinished work—delivered to a place they've chosen (an inbox, a notification, a System Widget) so they can decide for themselves whether returning is worth it right now. It's the outward-reaching half of a pair completed by Effort Moat: Effort Moat preserves and reflects a user's investment when they come back on their own; Value Replay is the case where the product proactively reaches out instead of waiting to be revisited. What makes it genuine rather than generic is specificity: "you're two lessons from finishing Unit 4" is a replay of real progress; "we miss you" is a template wearing progress's clothes.

A language app emailing a learner exactly how close they are to finishing a unit they already started is Value Replay; the same app sending a vague "come back and keep learning!" nudge to everyone who hasn't opened the app in a week is not—even though both arrive in an inbox.

## Why it works

Investment and Continuity frames replay as continuity made visible: the effort a user has already put in needs to be reflected back to them, or it might as well not have happened, and that visibility is what turns accumulated effort into felt attachment rather than a private ledger nobody sees. The mechanism that keeps this from tipping into manipulation is the same cue-ownership distinction Habit Formation draws between earned and rented attention: a replay is legitimate specifically because the user chose its channel and cadence, which is what separates a resumed story from an interruption.

The failure mode this TTP prevents is real progress quietly evaporating from memory, so effort a user already spent goes unclaimed. The failure mode it must never become is the same structure pointed the other way: streak-loss guilt, manufactured FOMO, or a message arriving somewhere the user never agreed to receive it—at which point a replay stops being a service the user asked for and starts feeling like being watched.

## When to use it

- For summaries users have asked for or can easily configure
- When progress, results, or an upcoming decision has genuine user value
- To help people resume long-running work without reconstructing context

## Do

- Use specific, accurate progress or outcome information
- Offer frequency, timing, and channel controls before increasing contact
- Deep-link to the exact item, decision, or next useful action

## Don't

- Send generic “we miss you” messages disguised as user progress
- Use sensitive activity, streak loss, or social comparison to create pressure
- Contact people through a channel they have not chosen or cannot easily mute

## Founder Tip

A replay should help the user pick up their story—not make them feel monitored by yours.

## Make It Yours

1. What progress would users genuinely appreciate seeing again?
2. Which channel and cadence have they chosen for that information?
3. Is the summary accurate, understandable, and useful without opening the product?
4. What is the smallest relevant next action, if any?
5. Can users pause, edit, or stop this replay without penalty?


## Related concepts

- [Investment and Continuity](../concepts/13-investment-and-continuity.md)
- [Habit Formation](../concepts/10-habit-formation.md)
- [User Agency](../concepts/12-user-agency.md)

## Further reading

- [Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications) — Apple guidance for timely, useful, and respectful notification design.
- [Guidelines 3.10: Wellbeing-Supportive Design](https://selfdeterminationtheory.org/wp-content/uploads/2022/08/2022_Peters_WellbeingSupportiveDesign.pdf) — Grounds reminders in autonomy and meaningful progress.
- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800+Dark+Patterns+Report+9.14.2022+-+FINAL.pdf) — Useful boundary-setting for manipulative engagement techniques.

## Agent skill

- **Primary command:** `/productfeeling peaks-ends` — design consented progress summaries that restore continuity without pressure
- **Related commands:** `/productfeeling feel`, `/productfeeling states`, `/productfeeling anti-patterns`
- **When the agent should load this TTP:** "progress email", "re-engagement summary", "unfinished work reminder", "cross-channel replay", "resume notification"
- **Companion handoff:** Impeccable — summary content, channel controls, and deep links; DocSlime — contact and frequency policy
- **Feeling north star this TTP serves:** resumable story the user chose to receive
- **Anti-goals:** generic "we miss you" messages, streak-loss pressure, unchosen channels, sensitive comparison tactics
- **Reference path:** `skill/reference/peaks-ends.md`
