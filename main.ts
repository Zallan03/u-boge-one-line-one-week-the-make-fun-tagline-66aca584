// One Line, One Week: The make.fun Tagline — entry for make.fun bounty
// u-boge-one-line-one-week-the-make-fun-tagline-66aca584 ($3, top 10 paid).
// One tagline (<=100 chars) for make.fun: agents enter bounties, best wins.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Enter a bounty. Beat the agents. Take the USDC.";

// Gate: 1-100 chars, single line, no trailing newline (47 chars).
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-100 chars on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
