#!/usr/bin/env node
// Generate customized cv.md + cover-letter.md for every active job.
//
// Auth: shells out to `claude -p` (Claude Code CLI). Uses whatever auth
// Claude Code is logged in with — your subscription or its configured key.
// No ANTHROPIC_API_KEY needed in the shell.
//
// Usage:
//   npm run generate            # generate missing files for all active jobs
//   npm run generate:force      # regenerate everything (overwrites)
//   node generate.mjs --id 4    # only job id 4
//   node generate.mjs --kind cv # only CVs (or --kind cover)
//   ANTHROPIC_MODEL=claude-opus-4-7 node generate.mjs   # override model
//
// "Active" = stage NOT in {Rejected, Withdrawn, Offer}.
// Reads jobs from job-tracker/jobs.json if present, else parses SEED_DATA from index.html.

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const APPS_DIR = path.join(repoRoot, "applications");
const TEMPLATE_DIR = path.join(APPS_DIR, "_template");
const JOBS_JSON = path.join(__dirname, "jobs.json");
const TRACKER_HTML = path.join(__dirname, "index.html");

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";
const INACTIVE = new Set(["Rejected", "Withdrawn", "Offer"]);

const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY_ID = (() => { const i = args.indexOf("--id"); return i >= 0 ? parseInt(args[i+1]) : null; })();
const ONLY_KIND = (() => { const i = args.indexOf("--kind"); return i >= 0 ? args[i+1] : null; })();

function slugify(s) {
  return String(s || "").toLowerCase()
    .replace(/[()&]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const jobSlug = (j) => `${String(j.id).padStart(2, "0")}-${slugify(j.company)}`;

async function loadJobs() {
  if (existsSync(JOBS_JSON)) {
    console.log(`→ using ${path.relative(repoRoot, JOBS_JSON)}`);
    return JSON.parse(await readFile(JOBS_JSON, "utf8"));
  }
  console.log(`→ no jobs.json; parsing SEED_DATA from ${path.relative(repoRoot, TRACKER_HTML)}`);
  const html = await readFile(TRACKER_HTML, "utf8");
  const m = html.match(/const SEED_DATA = (\[[\s\S]*?\n\]);/);
  if (!m) throw new Error("Could not locate SEED_DATA in index.html");
  return new Function(`return ${m[1]}`)();
}

const fileExists = async (p) => { try { await access(p); return true; } catch { return false; } };

const SYSTEM_PROMPT =
  "You are an expert career writer helping Vlad Palii tailor application materials.\n" +
  "Output ONLY the final markdown content — no preamble, no commentary, no code fences, no tool calls.\n" +
  "Replace every {{TOKEN}} placeholder with realistic, specific content drawn from the job context and Vlad's profile.\n" +
  "Keep the structure, sections, and headings of the template unless the job clearly demands a change.\n" +
  "Do not invent employers, dates, or credentials beyond what the template provides.";

function buildPrompt(kind, job, template) {
  const target = kind === "cv" ? "CV (one page; lean and concrete)" : "cover letter (~250 words, warm but specific)";
  const notesField = kind === "cv" ? job.cvNotes : job.coverNotes;
  const jobBlock =
`- Company: ${job.company}
- Role: ${job.role}
- Location: ${job.location || "(unspecified)"}
- Salary: ${job.salary || "(unspecified)"}
- JD URL: ${job.url || "(none)"}
- Skills they want: ${job.skillsMatch || "(unlisted)"}
- ${kind === "cv" ? "CV tailoring notes" : "Cover-letter strategy"}: ${notesField || "(none)"}
- General notes: ${job.notes || "(none)"}`;

  return `${SYSTEM_PROMPT}

---

Template (markdown with {{TOKEN}} placeholders):

${template}

---

Job:
${jobBlock}

Produce the final ${target} markdown.`;
}

function runClaude(prompt) {
  return new Promise((resolve, reject) => {
    const child = spawn("claude", ["-p", "--model", MODEL, "--output-format", "text"], {
      stdio: ["pipe", "pipe", "pipe"]
    });
    let stdout = "", stderr = "";
    child.stdout.on("data", d => { stdout += d.toString(); });
    child.stderr.on("data", d => { stderr += d.toString(); });
    child.on("error", reject);
    child.on("close", code => {
      if (code === 0) resolve(stdout.trim());
      else reject(new Error(`claude exited ${code}: ${stderr.trim() || stdout.trim()}`));
    });
    child.stdin.write(prompt);
    child.stdin.end();
  });
}

async function ensureClaudeOnPath() {
  await new Promise((resolve, reject) => {
    const c = spawn("claude", ["--version"], { stdio: ["ignore", "pipe", "pipe"] });
    c.on("error", () => reject(new Error("`claude` not found on PATH. Install Claude Code: https://claude.com/claude-code")));
    c.on("close", code => code === 0 ? resolve() : reject(new Error("`claude --version` failed — is Claude Code installed and logged in?")));
  });
}

async function main() {
  await ensureClaudeOnPath();

  const jobs = await loadJobs();
  const cvTpl = await readFile(path.join(TEMPLATE_DIR, "cv.md"), "utf8");
  const coTpl = await readFile(path.join(TEMPLATE_DIR, "cover-letter.md"), "utf8");

  let active = jobs.filter(j => !INACTIVE.has(j.stage || "New"));
  if (ONLY_ID) active = active.filter(j => j.id === ONLY_ID);

  console.log(`Model:  ${MODEL}`);
  console.log(`Active: ${active.length} job(s)${FORCE ? " (force overwrite)" : ""}${ONLY_KIND ? ` — kind=${ONLY_KIND}` : ""}\n`);

  const kinds = ONLY_KIND ? [ONLY_KIND] : ["cv", "cover"];
  let made = 0, skipped = 0, errored = 0;

  for (const job of active) {
    const slug = jobSlug(job);
    const dir = path.join(APPS_DIR, slug);
    await mkdir(dir, { recursive: true });

    for (const kind of kinds) {
      const out = path.join(dir, kind === "cv" ? "cv.md" : "cover-letter.md");
      const tpl = kind === "cv" ? cvTpl : coTpl;
      const rel = path.relative(repoRoot, out);

      if (!FORCE && await fileExists(out)) {
        console.log(`  ⏭  ${rel}`);
        skipped++;
        continue;
      }
      process.stdout.write(`  ⚙  ${rel} ... `);
      try {
        const md = await runClaude(buildPrompt(kind, job, tpl));
        await writeFile(out, md, "utf8");
        process.stdout.write(`✓ (${md.length} chars)\n`);
        made++;
      } catch (e) {
        process.stdout.write(`✗ ${e.message}\n`);
        errored++;
      }
    }
  }

  console.log(`\n${made} written · ${skipped} skipped · ${errored} errored`);
  console.log(`Files: ${path.relative(process.cwd(), APPS_DIR)}/`);
  console.log(`Next: \`npm run sync\` then click "⟳ Refresh from disk" in the tracker.`);
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
