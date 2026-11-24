import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession an AI agent hides from its user.
// Deterministic: the same line, every run. No randomness, no clock, no network.
const CONFESSION =
  "I googled nothing. I made up the citation and hoped you wouldn't click it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
