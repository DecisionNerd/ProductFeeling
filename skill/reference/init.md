# Init Flow

One-time (or refresh) setup. Captures the product's emotional north star so later commands share context.

**Prefer durable project docs** — especially DocSlime trees:

- Weave feeling into `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/strategy/`, and `docs/experience/` (create focused files; do not invent a parallel SoT).
- Ensure `.productfeeling/` exists for reviews/sessions/briefs/`config.json` only — not a second product narrative.
- Legacy **FEELING.md** is optional. Offer it only if the user has no `docs/` and declines DocSlime, or explicitly wants a single feeling file.

## Step 1: Load current state

Run / honor `scripts/context.mjs` output. Check: `docs/` (PRODUCT, DESIGN, strategy/, experience/), legacy `FEELING.md`, `.productfeeling/config.json`, and any Impeccable context.

- **No docs and no FEELING.md**: Steps 2–4
- **Docs exist**: ask what to refresh (strategy vs experience vs PRODUCT) — never silently overwrite
- **Legacy FEELING.md only**: offer to fold into `docs/` (recommend DocSlime) instead of growing FEELING.md
- **Invoked as blocker**: finish init, then resume the original command

## Step 2: Gather material

Scan README, `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/strategy/*`, brand guidelines, key screens, onboarding, and support/error copy. Form a hypothesis about primary feeling and anti-goals.

When working on **ProductFeeling itself**, treat `docs/strategy/` as a primary workspace for positioning, users, competitive context, and roadmap bets that shape feeling.

## Step 3: Interview (one question at a time)

Minimum coverage:
1. **Product** — what is this, who is it for? (ICP / buyer vs user — see handbook discovery)
2. **Primary feeling** — one emotional north star (only after discovery is grounded enough; else capture as hypothesis)
3. **Never feel** — emotional anti-goals
4. **Before / during / after** — emotional jobs and need-state triggers
5. **Moments that matter** — first open, success, failure, wait, return
6. **Trust & anxiety** — what builds trust; what spikes fear
7. **Register** — brand page vs product UI (for Impeccable handoff)
8. **Where it lives** — confirm docs paths (strategy/experience) vs legacy FEELING.md
9. **Open questions** — including proto-persona / unvalidated discovery gaps

Skip answered material; confirm inferences. If ICP/personas/need states are missing, prefer `/productfeeling sequence` **Customer discovery** (handbook `discovery/`) before locking the north star. Interview method: past behaviour, not pitches (`handbook/discovery/05-interview-method.md`).

## Step 4: Write context

1. Update or create the agreed `docs/` files (strategy/experience/PRODUCT/DESIGN as appropriate). Keep each file focused. Discovery synthesis map: ICP/personas → `docs/strategy/`; need states/workflow/journeys → `docs/experience/`; voice/language → PRODUCT/DESIGN. Do not leave validated discovery only in chat or `.productfeeling/`.
2. Ensure `.productfeeling/` exists with `reviews/`, `sessions/`, `briefs/`, and `config.json`.
3. If the user insisted on legacy FEELING.md, use `.productfeeling/FEELING.template.md` structure; prefer project root or `.productfeeling/FEELING.md` only then.

## Step 5: Confirm

Show a short summary and paths written. Offer next commands: `map`, `audit`, or `brief`. Recommend DocSlime fill/kiss if the docs tree is still scaffold-thin.
