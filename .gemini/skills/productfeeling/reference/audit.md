# Audit Flow

Structured emotion audit across a surface or multi-step flow.

## Steps

1. Define scope (screen, flow, or whole product slice).
2. Confirm primary feeling + never-feel list.
3. Walk each step/state; score alignment 1–5 for: clarity, trust, energy, belonging, control.
4. Flag valence cliffs (sharp anxiety spikes) and dead flats (where feeling should peak but doesn't).
5. List contradictions with brand or FEELING.md.
6. Prioritize fixes: P0 emotion blockers, P1 dilution, P2 polish.

## Output

```markdown
## Emotion audit: [target]

### Scope
...

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

### P0 / P1 / P2
...
```

Persist to `.productfeeling/reviews/<slug>-audit.md` when available.
