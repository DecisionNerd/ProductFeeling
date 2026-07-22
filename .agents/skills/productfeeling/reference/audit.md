# Audit Flow

Structured emotion audit across a surface or multi-step flow. `audit` is the **mechanical-completeness** command: cover *everything*, using proper method, so nothing emotional ships unexamined. If `critique` asks "is this great?", `audit` asks "did we check all of it, correctly?"

## Method (do not skip steps)

1. **Define scope explicitly** — list every screen, flow, and surface in the target. If scope is unclear, enumerate what you *can* see and name what's missing.
2. **Confirm the feeling contract** — primary feeling + never-feel list, from `docs/` (strategy/experience) or provided context. Label inferred vs stated.
3. **State matrix (mandatory coverage).** For each surface, walk all five states — **empty, loading, error, success, recovery** — and mark each: present / missing / unexamined. Missing states are findings, not omissions.
4. **Dimension scorecard.** Score each step/state 1–5 for: **clarity, trust, energy, belonging, control.** Every score needs evidence (a concrete observation), not a vibe.
5. **Valence walk.** Trace the feeling across the flow; flag **valence cliffs** (sharp anxiety spikes) and **dead flats** (a moment that should peak but doesn't).
6. **Contract contradictions.** List conflicts with brand, `docs/` feeling/strategy context, or legacy FEELING.md.
7. **Accessibility floor.** Confirm feeling choices never override clarity, contrast, or reduced-motion. A11y issues are P0.
8. **Coverage check.** Before finishing, state what was covered and what remains unaudited. An audit with blind spots must say so.
9. **Prioritize.** P0 emotion blockers, P1 dilution, P2 polish.

## Output

```markdown
## Emotion audit: [target]

### Scope & coverage
- Surfaces audited: ...
- Not yet covered: ...

### State matrix
| Surface | Empty | Loading | Error | Success | Recovery |
|---------|-------|---------|-------|---------|----------|

### Scorecard
| Dimension | Score | Evidence |
|-----------|-------|----------|
| Clarity | /5 | |
| Trust | /5 | |
| Energy | /5 | |
| Belonging | /5 | |
| Control | /5 | |

### Valence cliffs
...

### Dead flats
...

### Accessibility floor
...

### P0 / P1 / P2
...
```

Persist to `.productfeeling/reviews/<slug>-audit.md` when available.
