# Job Tracker

Local-only HTML job tracker + a small CLI that auto-generates customized CV + cover letter for every active job using the Anthropic API. Both live alongside the canonical CV (the React app at the repo root) but are **never deployed** — `npm run deploy` only ships `build/` to `gh-pages`.

## One-time setup

`generate.mjs` shells out to `claude -p` (Claude Code CLI), so it uses whatever auth you're already logged into Claude Code with — your subscription or its configured API key. **No `ANTHROPIC_API_KEY` env var required.**

```bash
claude --version              # confirm Claude Code is on your PATH
claude /login                 # only if not yet authenticated
```

No `npm install` needed — the script uses Node built-ins only.

## Run the tracker

Serve from the repo root so the tracker can fetch sibling files (`applications/*`, `jobs-status.json`):

```bash
cd ..                                    # repo root
python3 -m http.server 8000
# open http://localhost:8000/job-tracker/index.html
```

State persists in browser localStorage (`jt_jobs`). Use **Export CSV** for backup.

## Automated CV + cover-letter generation

```bash
cd job-tracker
npm run generate                  # generate missing files for every active job
npm run generate:force            # regenerate everything (overwrites)
node generate.mjs --id 4          # only job id 4
node generate.mjs --kind cv       # only CVs (not covers)
ANTHROPIC_MODEL=claude-opus-4-7 npm run generate   # override model (passed to `claude --model`)
```

Each generation is a fresh `claude -p` invocation — expect ~5–15 s per call.

What it does:

1. Loads jobs from `job-tracker/jobs.json` if present; otherwise parses `SEED_DATA` from `index.html`.
2. Picks "active" jobs — stage NOT in `Rejected`/`Withdrawn`/`Offer`.
3. For each active job, ensures `applications/{NN-company-slug}/` exists and writes `cv.md` and `cover-letter.md` if missing.
4. Each generation reads the template at `applications/_template/`, plus the job's company/role/JD URL/skills/notes, and asks Claude (Sonnet 4.6 by default) to fill in `{{TOKEN}}` placeholders.

Default model: `claude-sonnet-4-6`. Override via `ANTHROPIC_MODEL`.

## Sync statuses back to the tracker

After generating, refresh tracker statuses from disk:

```bash
cd job-tracker
npm run sync                      # writes jobs-status.json
```

Then in the tracker UI, click **⟳ Refresh from disk**. Statuses for jobs with new files flip from `None` → `Draft`. The `Final` status is preserved (you set that manually after reviewing).

## Per-job materials

`applications/{NN-company-slug}/`
- `cv.md` — markdown source
- `cover-letter.md` — markdown source
- (Optional) `cv.pdf`, `cover-letter.pdf` — generate via `pandoc` or print-to-PDF when sending

## Why customizations don't reach the deployed site

`npm run deploy` runs `gh-pages -d build`, which pushes only `build/` to the `gh-pages` branch (what GitHub Pages serves). `applications/` and `job-tracker/` aren't referenced from `src/` and aren't copied from `public/`, so they never end up in `build/`. They live on `master` only — visible on github.com, never on `vlad-palii.github.io`.

Verify after `npm run build` (at repo root):
```bash
ls build/   # should NOT contain applications/ or job-tracker/
```
