# Feel Flow

General emotion review when the user wants "how does this feel?" without naming a technique.

## Steps

1. **Restate the target** and intended primary feeling (from FEELING.md or inferred — label which).
2. **Immediate impression** — one-sentence felt experience as a first-time user.
3. **Fit check** — does the surface reinforce, dilute, or contradict the north star?
4. **Hotspots** — top 3 moments that strengthen or weaken the feeling.
5. **State gaps** — empty / error / loading / success not covered.
6. **Intensity** — too flat, about right, or too theatrical?
7. **Verdict** — reinforce / recalibrate / redesign moments.
8. **Follow-ups** — recommend 1–2 deeper commands.

## Output format

```markdown
## Feel: [target]

### Intended feeling
...

### Immediate impression
...

### Fit
**[reinforces | dilutes | contradicts]** — why

### Hotspots
| # | Moment | Effect | Note |
|---|--------|--------|------|

### State gaps
...

### Intensity
**[flat | right | theatrical]**

### Verdict
...

### Recommended follow-up
`/productfeeling <command>`
```

## Persistence

If `.productfeeling/` exists, write `.productfeeling/reviews/<slug>-feel.md`.
