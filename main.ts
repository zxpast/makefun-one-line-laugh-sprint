// One-Line Laugh Sprint.
//
// One original funny line about everyday life. The line is a single fixed
// string, so the program is deterministic: same bytes every run, no clock,
// no randomness, no network, no external files.
//
// The laugh: the setup promises self-improvement, the middle concedes it
// worked, and the punchline reframes the win as a loss — the reward for
// becoming a morning person is two extra hours a day to be furious.
import * as fs from "node:fs";
import * as path from "node:path";

// The line, built from three parts so the turn lands in order:
// the setup promises self-improvement, the middle concedes it worked,
// and the punchline lands on the last words — the prize is extra hours
// of being furious, not a better morning.
const SETUP = "I set my alarm for 6 a.m. to become a morning person;";
const TURN = "it worked —";
const PUNCH = "now I get to be furious two hours earlier every day.";
const LINE = `${SETUP} ${TURN} ${PUNCH}`;

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
