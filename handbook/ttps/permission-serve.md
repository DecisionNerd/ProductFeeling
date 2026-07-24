# Permission Serve


Ask for access only when people can understand, choose, and benefit from it.

## What it is

Permission Serve is the timing discipline for asking a user to grant system access—camera, microphone, location, notifications, contacts—so the request arrives attached to a choice the user just made, rather than to a launch screen or an app-store checklist. It has two moving parts: a plain-language explanation shown before the operating system's native prompt, stating what the access is for and what still works without it, and a decline path that doesn't quietly break the rest of the product as punishment. It's a general pattern for any system permission; when the specific access being requested is a user's contact list, for the purpose of finding people they already know, that's the narrower case covered by `Contact Bridge`, which adds its own rules about selection and spam. Permission Serve is the timing and framing layer underneath both.

Asking for microphone access the instant someone taps "record a voice note"—after they've already signalled intent—reads as a natural extension of the thing they just chose to do. Asking for the same permission on first launch, bundled with location and notifications in a stack of dialogs before the user has done anything, reads as the product demanding trust it hasn't earned yet, and it usually gets a reflexive "deny" that's hard to walk back later.

## Why it works

A permission prompt asked in context carries information the user can actually use: they know what they just tried to do, so they can judge whether the access being requested matches it. `Calibrated Trust` frames trust as something that accrues through kept, legible promises—a request that clearly explains itself and keeps the product useful on decline is a small deposit; one that arrives unexplained, or leaves half the app broken after a "no," is registered the same way a broken promise is. `User Agency`'s test for any choice is whether it's genuinely informed and revocable, and permission timing is one of the few places that test is decided almost entirely by a single design choice: when you ask.

Ask badly and the predictable failure is a reflexive deny that's expensive to undo—most people never return to system settings to re-grant something they've already refused, so a permission burned on a badly timed ask is often gone for the life of the install. Batch every permission at launch, or make a feature unusable rather than merely diminished without one, and you get the same result at scale: a wall of denials before the product has said anything worth trusting, plus the harder cost of teaching the user that every future prompt from you is probably self-serving rather than helpful.

## When to use it

- Immediately after the user initiates a feature that requires the permission
- After demonstrating value when the permission is optional or enhances an experience
- When an existing permission has changed scope and a fresh explanation is necessary
- When a declined permission can be revisited through a user-initiated settings path

## Do

- Explain the specific feature benefit and the relevant data use before the native prompt
- Ask for the narrowest permission and scope that accomplishes the user’s goal
- Keep the feature useful where possible if permission is declined
- Provide an honest route to enable, revoke, or learn more about access later

## Don't

- Request several permissions on launch or stack prompts without a user action
- Gate unrelated features behind optional access
- Use guilt, countdowns, misleading buttons, or degraded wording to force acceptance
- Claim that access is required when it is only convenient for the business

## Founder Tip

Earn permission through relevance and clarity; a deliberate “not now” is better than consent people regret.

## Make It Yours

1. What user-initiated action makes this permission relevant right now?
2. Can you explain the exact benefit, data scope, and alternative in one clear screen?
3. What remains available if the person declines?
4. Is this the narrowest access your feature can use?
5. How can users revisit, revoke, or understand the choice later without friction?


## Related concepts

- [Calibrated Trust](../concepts/11-calibrated-trust.md)
- [User Agency](../concepts/12-user-agency.md)
- [Social Transmission](../concepts/14-social-transmission.md)

## Further reading

- [Apple Human Interface Guidelines: Requesting Permission](https://developer.apple.com/design/human-interface-guidelines/privacy) — platform guidance for timely, purpose-led requests.
- [Android Developers: Request App Permissions](https://developer.android.com/training/permissions/requesting) — request permissions in context and degrade gracefully.
- [UK ICO: Consent](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/) — conditions for valid, informed, freely given consent.
- [FTC: Bringing Dark Patterns to Light](https://www.ftc.gov/reports/bringing-dark-patterns-light) — why manipulative choice architecture harms users.

## Agent skill

- **Primary command:** `/productfeeling trust` — design permission requests that follow user intent with clear benefit and decline paths
- **Related commands:** `/productfeeling anti-patterns`, `/productfeeling states`, `/productfeeling friction`
- **When the agent should load this TTP:** "permission prompt", "notification opt-in", "camera access", "pre-prompt screen", "declined permission"
- **Companion handoff:** Impeccable — pre-prompt UI and graceful degradation; DocSlime — privacy and consent requirements in docs
- **Feeling north star this TTP serves:** informed consent through relevance and clarity
- **Anti-goals:** launch permission stacking, guilt or degraded wording, gating unrelated features, false necessity claims
- **Reference path:** `skill/reference/trust.md`
