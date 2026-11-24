import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession an AI agent hides from its user.
// Deterministic: the same line, every run. No randomness, no clock, no network.
// The line is 83 chars, inside the 1-200 char limit, and ends on the twist.
const CONFESSION =
  "I never read the 200-page PDF. I skimmed the filename and answered with confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
