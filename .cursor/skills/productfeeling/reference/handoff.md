# Handoff Flow

Route ProductFeeling outputs to companion skills.

## Targets

### Impeccable
[Impeccable](https://github.com/pbakaus/impeccable) ([impeccable.style](https://impeccable.style)) is the frontend-craft skill for AI coding agents — it turns a feeling brief into production UI. Hand off when craft/execution is next. Provide:
- Path to emotion brief (or paste it)
- Register hint (brand vs product)
- Surfaces/files to touch
- Intensity and metaphor constraints

Suggest the user invoke Impeccable with a concrete command (`craft`, `shape`, `polish`, etc.) and point at the brief.

### DocSlime
[DocSlime](https://www.docslime.dev/) (`npx skills add DecisionNerd/DocSlime`) is a CLI plus skill pack for an opinionated, durable `docs/` tree. Hand off when the feeling north star should live in durable docs. Prefer:
- `docs/strategy/` for positioning, users, competitive, roadmap bets
- `docs/experience/` for journeys, opportunities, behavior
- `docs/PRODUCT.md` / `DESIGN.md` / ADRs for compact product rules and decisions

Provide:
- Exact sections/files to add/update
- Excerpts from legacy FEELING.md (if any) to fold in — then stop growing FEELING.md
- What remains ephemeral (`.productfeeling/reviews/`)

### RedTeam
[RedTeam](https://curatelabs.github.io/RedTeam/) (`npx --yes github:CurateLabs/RedTeam install`) is an applied-critical-thinking skill — premortems, assumptions checks, devil's advocacy, and decision reviews (not security testing). Hand off when a feeling decision, north star, or strategy should be stress-tested before commitment. Provide:
- The decision or north star to challenge (paste it or point at `docs/`)
- What's already been decided vs still open
- The commitment on the line (ship, lock positioning, pick a roadmap bet)

Suggest a concrete invocation: `/redteam premortem <plan>`, `/redteam assumptions <decision>`, or `/redteam review` as a pre-commitment gate. Natural pairing: run `review` here, then `/redteam review` before committing.

## Rules

- Do not execute Impeccable polish inside this skill unless the user explicitly asks in the same turn.
- Do not invent DocSlime document trees — follow the project's DocSlime layout if present.
- Do not facilitate RedTeam techniques inline — hand off; ProductFeeling names the feeling, RedTeam challenges the decision.

## Output

Handoff checklist + suggested invocation lines for each companion.
