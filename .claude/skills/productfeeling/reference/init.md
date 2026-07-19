# Init Flow

One-time setup. Captures the product's emotional north star so later commands share context.

Writes:
- **FEELING.md** — primary feeling, anti-goals, moments that matter
- **`.productfeeling/config.json`** — project metadata (if missing)

## Step 1: Load current state

Check: `FEELING.md` (root, `.productfeeling/`, `.agents/context/`, `docs/`), `.productfeeling/config.json`, and any `PRODUCT.md` / Impeccable context.

- **No FEELING.md**: Steps 2–4
- **Exists**: ask refresh vs append — never silently overwrite
- **Invoked as blocker**: finish init, then resume the original command

## Step 2: Gather material

Scan README, PRODUCT.md, DESIGN.md, brand guidelines, key screens, onboarding, and support/error copy. Form a hypothesis about primary feeling and anti-goals.

## Step 3: Interview (one question at a time)

Minimum coverage:
1. **Product** — what is this, who is it for?
2. **Primary feeling** — one emotional north star
3. **Never feel** — emotional anti-goals
4. **Before / during / after** — emotional jobs
5. **Moments that matter** — first open, success, failure, wait, return
6. **Trust & anxiety** — what builds trust; what spikes fear
7. **Register** — brand page vs product UI (for Impeccable handoff)
8. **Open questions**

Skip answered material; confirm inferences.

## Step 4: Write FEELING.md

Use the structure in `.productfeeling/FEELING.template.md`. Prefer project root `FEELING.md` unless the user prefers `.productfeeling/FEELING.md`.

Ensure `.productfeeling/` exists with `reviews/`, `sessions/`, `briefs/`, and `config.json`.

## Step 5: Confirm

Show a short summary. Offer next commands: `map`, `audit`, or `brief`.
