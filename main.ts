// gta6-clipper-01 entry program.
//
// It does exactly one thing: copy VIDEO.json from this repository into the
// output directory, so the house can read the entry's YouTube video address
// from there. Node 22, standard library only: no network, no clock, no
// files outside the repository, and the same bytes out on every run.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository root: the directory the harness points at, or the folder
// this file lives in when it runs on its own.
const repoDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));

// Where the copy goes: the harness output directory, or ./out by default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "out");

const sourcePath = join(repoDir, "VIDEO.json");

// Parse it first, so a malformed VIDEO.json fails loudly here instead of
// silently handing the grader a broken file.
const parsed = JSON.parse(readFileSync(sourcePath, "utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("VIDEO.json must hold a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("VIDEO.json must hold a url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, join(outDir, "VIDEO.json"));
