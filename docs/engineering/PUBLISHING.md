# Publishing

Verified changes reach users as a **GitHub-hosted skill package** (consumed via skills CLI, project CLI, or Claude plugin) and as a **GitHub Pages documentation site**. There is no container or app server to promote. Maintainers bump SemVer, update the changelog, push `main`, and consumers pull the skill from the repo.

## Artifacts and destinations

| Artifact | Destination | Versioned by | Owner |
|---|---|---|---|
| Agent skill (`skill/` + built provider copies) | GitHub repo `DecisionNerd/ProductFeeling`; installed via `npx skills add` / project CLI / Claude plugin | `package.json` / `skill/SKILL.md` SemVer (kept in sync by `version:set`) | Maintainers |
| npm-published package fields | GitHub (`github:DecisionNerd/ProductFeeling`) — primary install path today | Same SemVer | Maintainers |
| Claude plugin manifests | `.claude-plugin/` in repo | Same SemVer | Maintainers |
| ChatGPT instructions + knowledge stubs | `chatgpt/` (also under `dist/chatgpt` on build) | Repo commit / release tag | Maintainers |
| Documentation site | GitHub Pages (`site/` from Astro build) | Commit on `main` (deploy workflow) | Maintainers |
| Handbook + developer docs sources | `handbook/`, `docs/` (staged into the site) | Repo commit | Maintainers |

## Suggested versioning and change history

**Current practice:**

- **Semantic Versioning** is already used (`package.json`, plugin manifests, skill frontmatter). Use `npm run version:set -- <x.y.z>` to bump them together, then update [`CHANGELOG.md`](../../CHANGELOG.md) before calling a release.
- Changelog is manual, sectioned by version (see `0.1.0`).
- Commit message style is not enforced; Conventional Commits remain optional.

**Compatibility intent (skill package):** treat breaking changes to command names, context contract, or install paths as candidates for `MAJOR`; new commands/capabilities as `MINOR`; fixes and docs as `PATCH` — judgment call until a sharper public API is declared.

## Build and continuous delivery

Local / release prep:

```sh
npm ci
npm test                 # version check + CLI install + docs site
npm run version:set -- <x.y.z>
# edit CHANGELOG.md
npm run build            # refresh provider copies + dist/
git commit && git push origin main
```

Automation:

- **Test** — [`.github/workflows/test.yml`](../../.github/workflows/test.yml) runs `npm test` on PRs and `main`.
- **Docs deploy** — [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml) runs `npm run docs:site` and publishes `site/` to GitHub Pages on `main`.

Skill distribution to end users is **pull-based** (they run `npx skills add` / `update` or reinstall). Pushing `main` (and optional git tags) is the publish step — no separate registry promote job today.

## Environments and promotion

| From | To | Required evidence / approval |
|---|---|---|
| Branch / PR | `main` | Green **Test** workflow; maintainer merge |
| `main` | GitHub Pages (docs) | Successful **Deploy documentation** workflow |
| `main` | Consumer installs | Users run skills CLI / project CLI against the repo (optionally pin a tag/commit) |

No staging app environment. Docs preview is local (`npm run docs:dev`) or PR review of source; production docs are Pages from `main`.

## Deployment verification

- **Test workflow green** on the merge commit (version, CLI install smoke, docs site pages).
- **Pages deploy** job succeeds; spot-check live guide/handbook URLs.
- **Manual skill smoke:** in a harness, install/update ProductFeeling, run `/productfeeling library` or a scoped `feel` on a sample surface — confirms host load (not automated).

“Deployed” (code on `main` / Pages uploaded) ≠ “verified” until Test (+ optional harness smoke) passes.

## Rollback and recovery

| Case | Trigger | Mechanism |
|---|---|---|
| Bad docs site | Broken Pages content | Revert the offending commit on `main` and let deploy re-run; or `workflow_dispatch` after fix |
| Bad skill behavior | Harmful instruction change | Revert commit on `main`; consumers run `npx skills update` (or reinstall). No server-side kill switch |
| Bad version bump | Mismatched manifests | Fix with `version:set` / commit; `version:check` must pass in Test |

No data migrations. Consumers on an old install keep working until they update — communicate breaking changes in CHANGELOG.

## Official references

- [Semantic Versioning 2.0.0](https://semver.org/)
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) (optional)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Astro GitHub Pages action](https://github.com/withastro/action)
- [open agent skills CLI](https://github.com/vercel-labs/skills)
