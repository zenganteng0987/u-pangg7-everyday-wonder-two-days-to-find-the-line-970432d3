// Everyday Wonder, Two Days to Find the Line
// Writes one sentence (95 characters) to /output/entry.txt.
// No network, no input, no dependencies. Exit 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "My phone's autocorrect turned 'tired' into 'tide' and for a second my evening had a moon in it.";

if ([...ENTRY].length < 1 || [...ENTRY].length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${[...ENTRY].length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
const innerPeriods = ENTRY.slice(0, -1).match(/\./g) ?? [];
if (innerPeriods.length > 0) {
  throw new Error("entry must be a single sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
