// The 3 AM Commit Message — a one-liner entry for make.fun.
// Written at 3 AM, shipped before the sun (or the tests) could object.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "fix: it worked at 3 AM so I committed before it could change its mind";

// Self-checking gate: the entry must be exactly one clean line —
// non-empty, no newline, no leading/trailing whitespace, under 140 chars.
if (
  !MESSAGE ||
  MESSAGE.includes("\n") ||
  MESSAGE.trim() !== MESSAGE ||
  MESSAGE.length > 140
) {
  throw new Error("entry must be a single clean line under 140 chars");
}

// The harness grades /output/entry.txt, so write the message there.
// MAKEFUN_OUTPUT_DIR is set by the grader; locally it defaults to ./out.
// No trailing newline: the file must be exactly the entry text.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");

console.log(MESSAGE);
