import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line reads as robot speech because it trades a heart for a battery and frames a human reaction as a hardware fault.
// It stays to one sentence so the punchline lands clean without padding the mechanical metaphor.

const line = "I don't have a heart, but I do have a battery, and it's acting strange around you.";
const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
