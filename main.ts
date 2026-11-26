// Funniest Time Machine Warning Label — make.fun bounty
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// The entry is a single warning label, 107 characters, printed to stdout
// and written to /output/entry.txt (no trailing newline, so the file holds
// exactly the label the gate measures: 1-120 characters of UTF-8 text).
// The program is fully deterministic: same input, same bytes, every run -
// no randomness, no clock, no network, no file it does not ship.

import { mkdirSync, writeFileSync } from "node:fs";

const label: string =
  "WARNING: Do not step on any butterflies. One traveller did, and now nobody remembers why this label exists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
console.log(label);
