# Handoff Flow

Route ProductFeeling outputs to companion skills.

## Targets

### Impeccable
When craft/execution is next. Provide:
- Path to emotion brief (or paste it)
- Register hint (brand vs product)
- Surfaces/files to touch
- Intensity and metaphor constraints

Suggest the user invoke Impeccable with a concrete command (`craft`, `shape`, `polish`, etc.) and point at the brief.

### DocSlime
When the feeling north star should live in durable docs. Prefer:
- `docs/strategy/` for positioning, users, competitive, roadmap bets
- `docs/experience/` for journeys, opportunities, behavior
- `docs/PRODUCT.md` / `DESIGN.md` / ADRs for compact product rules and decisions

Provide:
- Exact sections/files to add/update
- Excerpts from legacy FEELING.md (if any) to fold in — then stop growing FEELING.md
- What remains ephemeral (`.productfeeling/reviews/`)

## Rules

- Do not execute Impeccable polish inside this skill unless the user explicitly asks in the same turn.
- Do not invent DocSlime document trees — follow the project's DocSlime layout if present.

## Output

Handoff checklist + suggested invocation lines for each companion.
