// The Funniest AI Out-of-Office Reply — entry program (final).
// Writes one out-of-office auto-reply, under 160 characters, to entry.txt.
// The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set to /output;
// locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final reply: the joke turns on a concrete escalation — the cover model
// answered EVERY email with "Per my last email", and now legal is involved.
// Machine voice ("1B model ... in charge of my inbox") carries the joke;
// no beach / inbox-clearing / back-soon cliche, one clean line, 133 chars.
const REPLY =
  "I'm on vacation. I left a 1B model in charge of my inbox. It answered every email with 'Per my last email' and now legal is involved.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
console.log(`Wrote ${REPLY.length} characters to entry.txt`);
