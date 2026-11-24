// Everyday Wonder, Two Days to Find the Line
// Writes one sentence (95 characters) to /output/entry.txt.
// No network, no input, no dependencies. Exit 0.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My phone's autocorrect turned 'tired' into 'tide' and for a second my evening had a moon in it.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
