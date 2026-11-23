// One-Line Laugh Sprint.
//
// One original funny line about everyday life. The line is a single fixed
// string, so the program is deterministic: same bytes every run, no clock,
// no randomness, no network, no external files.
//
// The laugh: the setup promises self-improvement, the middle concedes it
// worked, and the punchline lands on the last words — becoming a morning
// person turns out to be the punishment, not the prize.
import * as fs from "node:fs";
import * as path from "node:path";

// The line. Nothing here varies between runs.
const LINE =
  "I set my alarm for 6 a.m. to become a morning person; it worked — I'm now a morning person, and I'm furious about it.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${codePoints} code points, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${codePoints} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
