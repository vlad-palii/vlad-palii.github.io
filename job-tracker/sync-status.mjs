#!/usr/bin/env node
// Scan applications/ and emit jobs-status.json mapping {jobId: {cvStatus, coverStatus}}
// based on which files actually exist on disk. The tracker imports this to flip statuses.
//
// Usage:
//   node sync-status.mjs           # writes job-tracker/jobs-status.json
//   node sync-status.mjs --print   # also prints to stdout

import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const APPS_DIR = path.join(repoRoot, "applications");
const TRACKER_HTML = path.join(__dirname, "index.html");
const OUT = path.join(__dirname, "jobs-status.json");

function slugify(s) {
  return String(s || "").toLowerCase()
    .replace(/[()&]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
const jobSlug = (j) => `${String(j.id).padStart(2, "0")}-${slugify(j.company)}`;
const fileExists = async (p) => { try { await access(p); return true; } catch { return false; } };

async function loadJobs() {
  const html = await readFile(TRACKER_HTML, "utf8");
  const m = html.match(/const SEED_DATA = (\[[\s\S]*?\n\]);/);
  if (!m) throw new Error("Could not locate SEED_DATA in index.html");
  return new Function(`return ${m[1]}`)();
}

const out = {};
const jobs = await loadJobs();
for (const j of jobs) {
  const dir = path.join(APPS_DIR, jobSlug(j));
  const cv = await fileExists(path.join(dir, "cv.md"));
  const co = await fileExists(path.join(dir, "cover-letter.md"));
  if (cv || co) {
    out[j.id] = {
      cvStatus: cv ? "Draft" : "None",
      coverStatus: co ? "Draft" : "None"
    };
  }
}

await writeFile(OUT, JSON.stringify(out, null, 2), "utf8");
if (process.argv.includes("--print")) console.log(JSON.stringify(out, null, 2));
console.log(`Wrote ${Object.keys(out).length} entries to ${path.relative(process.cwd(), OUT)}`);
