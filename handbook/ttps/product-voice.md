# Product Voice


One recognisable voice, with a tone that adapts to the user’s moment—celebratory at wins, plain and calm at failures.

## What it is

Product voice is the decision to give everything a product says one recognisable personality, built from two layers: a stable *voice*, which is who the product is and barely changes, and a situational *tone*, which is how that same character speaks in a given moment. The label on a button, the copy in an empty state, a payment failure, and a release note should all sound like they came from the same considerate person—not because every message uses identical words, but because a reader could recognise the author across all of them. This is different from JTBD Copywriting, which decides *what* a message should say by starting from the user's job and outcome; Product Voice takes that content and decides how it sounds once the words are chosen.

It's also different from Small Quirk, which is a single repeatable flourish attached to one low-stakes moment, like a saving animation. Voice is the language running underneath every surface a product uses; a quirk is a decoration that sits on top of it and could be removed without the product losing its identity. Picture a playful onboarding tooltip and a subscription-cancellation email: if they read like two different companies wrote them—one breezy, one legalistic—the product has fragmented copywriting, not a voice, however charming either message is in isolation.

## Why it works

Voice operates at the reflective level of Emotional Design: not the split-second visceral read or the moment-to-moment feel of using the product, but the character a user remembers and describes to other people afterwards. A product that sounds like the same considerate person everywhere accumulates recognition the way a person's manner of speaking does—users start predicting how it will react before it reacts, which is itself a form of trust. Tone also does real emotional work in the moment: the right register at a Success Moment amplifies the win, while the same enthusiasm inside an error or a bill reads as a company that hasn't noticed what's actually happening to the user.

Skip this work and copy fragments by default, because every team, feature, and now every AI agent writing microcopy will default to its own register unless a shared voice constrains it—the result is a product that feels assembled from parts, which quietly erodes the sense that anyone is home. Overdo it and voice becomes a liability instead of an asset: a joke in an error state, or warmth wrapped around an unfair price change, reads as a company using charm to manage a user's feelings rather than address their problem—exactly the move the reflective layer punishes hardest, because it's remembered as evasion, not care.

## When to use it

- Defining or refreshing product copy standards across surfaces
- High-emotion moments: errors, waits, wins, payments, goodbyes
- Scaling writing across a team (or agents) without the voice fragmenting
- Differentiating in a category where every competitor sounds the same

## Do

- Position your voice on the four tone dimensions—funny–serious, formal–casual, respectful–irreverent, enthusiastic–matter-of-fact—and write it down with do/don’t examples
- Adapt tone to the user’s likely emotional state; keep the voice constant
- Get plainer and calmer as stakes rise: errors, money, privacy, deletion
- Test tone with real users; predictions about “what our users find charming” are usually wrong
- Give the voice guide to everyone (and every agent) who writes product copy

## Don't

- Joke in error states, payment failures, or anything the user experiences as loss
- Let personality tax clarity—charm never substitutes for saying what happened
- Ship five surfaces with five personalities
- Copy another product’s voice; borrowed quirk reads as costume
- Use warmth to soften a message that is actually unfair (that is a dark pattern wearing a friendly tone)

## Founder Tip

Write your error messages and your celebration copy on the same day. If they could not plausibly come from the same character, you have a tone system, not a voice.

## Make It Yours

1. In five adjectives, who is your product when it speaks—and which adjective would users actually assign today?
2. Where are your highest-emotion messages, and does the current tone match the user’s state in each?
3. Which surfaces sound like different companies wrote them?
4. What is your equivalent of a calm voice for bad news—and is it documented?
5. Can a new writer (or agent) produce on-voice copy from your guide alone, without imitating old strings?


## Related concepts

- [Emotional Design](../concepts/06-emotional-design.md)
- [Jobs-to-be-Done](../concepts/09-jobs-to-be-done.md)
- [Feeling North Star](../concepts/01-feeling-north-star.md)

## Further reading

- [The Four Dimensions of Tone of Voice (Nielsen Norman Group)](https://www.nngroup.com/articles/tone-of-voice-dimensions/) — A practical framework for planning and auditing tone.
- [The Impact of Tone of Voice on Users' Brand Perception (NN/g)](https://www.nngroup.com/articles/tone-voice-users/) — Evidence that tone shifts perceived friendliness, trust, and desirability.
- [Tone-of-Voice Words (NN/g)](https://www.nngroup.com/articles/tone-voice-words/) — A working vocabulary for defining and testing your voice profile.
- [Mailchimp Content Style Guide: Voice and Tone](https://styleguide.mailchimp.com/voice-and-tone/) — A canonical public example of one voice adapting tone by user context.
- [Designing for Emotion (Aarron Walter)](https://abookapart.com/products/designing-for-emotion) — Product personality as an emotional design layer, not decoration.

## Agent skill

- **Primary command:** `/productfeeling tone` — define one recognisable voice with situational tone across surfaces
- **Related commands:** `/productfeeling feel`, `/productfeeling jobs`, `/productfeeling anti-patterns`, `/productfeeling brief`
- **When the agent should load this TTP:** "voice and tone", "copy guide", "microcopy", "product personality", "sounds robotic"
- **Companion handoff:** Impeccable — copy execution across surfaces; DocSlime — voice guide as a repo document
- **Feeling north star this TTP serves:** recognisable warmth, calm at high stakes, coherent character
- **Anti-goals:** jokes at the user's expense, charm masking unfairness, personality over clarity, tonal whiplash
- **Reference path:** `skill/reference/tone.md`
