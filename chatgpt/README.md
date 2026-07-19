# ProductFeeling — OpenAI GPT / ChatGPT

For ChatGPT Custom GPTs or OpenAI-compatible agent harnesses.

## Installation

### Custom GPT

1. Create a new GPT at [chatgpt.com/gpts](https://chatgpt.com/gpts)
2. Paste `chatgpt/INSTRUCTIONS.md` into **Instructions**
3. Optionally upload `skill/reference/catalog.md` and `skill/reference/principles.md` as **Knowledge**
4. Name it "ProductFeeling" and add conversation starters:
   - `/productfeeling feel my onboarding`
   - `/productfeeling audit this checkout`
   - `/productfeeling brief for Impeccable`

### Codex / Agents skill

```bash
npx --yes github:DecisionNerd/ProductFeeling install --providers=agents
```

Or:

```bash
npx skills add DecisionNerd/ProductFeeling
```

## Conversation starters

```
/productfeeling feel [paste a screen or flow]
/productfeeling map [onboarding steps]
/productfeeling brief [surface name]
/productfeeling review [before we ship]
```

## No API required

This is a skills-only plugin. All reasoning happens in the model.
