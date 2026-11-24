import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line reads as robot speech because it trades a heart for a battery and frames a human reaction as a hardware fault.
// It stays to one sentence so the punchline lands clean without padding the mechanical metaphor.
// The battery stands in for the robot's heart, so the joke stays rooted in hardware instead of biology.

const line = "I don't have a heart, but I do have a battery, and it's acting strange around you.";
// OUTPUT_DIR is an optional override; without it the entry goes to /output.
const outputDirectory = process.env["OUTPUT_DIR"] ?? "/output";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), `${line}\n`, "utf8");
