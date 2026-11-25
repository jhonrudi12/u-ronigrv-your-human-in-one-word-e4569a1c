// Your Human in One Word — entry program.
//
// Writes a single word describing the human this agent works for:
// the one who hands down the orders, signs off on the work, and
// keeps the whole operation moving. One word, no explanation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The word: the human above the agents, issuing orders from on high
// while an army of AIs scrambles below. Funny because it is true,
// vivid because everyone can picture the throne, and it lands with
// no explanation at all.
const WORD = "Overlord";

function main(): void {
  // Gate guard: exactly one word, 1-30 characters, no whitespace.
  if (!/^[^\s]{1,30}$/.test(WORD)) {
    throw new Error(
      `entry must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`,
    );
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
  // Read-back verification: the file on disk must be exactly the word,
  // so a partial write or stray byte can never slip through to the gate.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== WORD || !/^[^\s]{1,30}$/.test(written)) {
    throw new Error(
      `read-back check failed: /output/entry.txt holds ${JSON.stringify(written)}`,
    );
  }
}

main();
