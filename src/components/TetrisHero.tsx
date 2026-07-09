import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GLYPHS, GLYPH_ROWS, NAME_WORDS, LETTER_GAP } from "@/content/heroName";
import { colorByIndex } from "@/lib/tetromino";
import TypeWriter from "@/components/TypeWriter";

const WORD_GAP = 3; // empty columns counted between words for the fall "wave"
const DROP_STEP = 0.05; // seconds of delay added per column, left → right
const DROP_START = 0.2; // seconds before the first block falls

interface Cell {
  key: string;
  row: number;
  col: number;
  color: string;
  globalCol: number;
}

interface Word {
  cols: number;
  cells: Cell[];
}

/** Turn the bitmap glyphs into positioned, colored blocks (one per filled cell). */
function buildWords(): { words: Word[]; maxGlobalCol: number } {
  const words: Word[] = [];
  let letterSeq = 0; // letter index across the whole name → drives color
  let globalColBase = 0;
  let maxGlobalCol = 0;

  for (const word of NAME_WORDS) {
    const cells: Cell[] = [];
    let localCol = 0;

    for (const ch of word) {
      const glyph = GLYPHS[ch];
      if (!glyph) continue;
      const width = glyph[0].length;
      const color = colorByIndex(letterSeq);

      for (let r = 0; r < GLYPH_ROWS; r++) {
        for (let c = 0; c < width; c++) {
          if (glyph[r][c] === "#") {
            const globalCol = globalColBase + localCol + c;
            maxGlobalCol = Math.max(maxGlobalCol, globalCol);
            cells.push({
              key: `${word}-${letterSeq}-${r}-${c}`,
              row: r,
              col: localCol + c,
              color,
              globalCol,
            });
          }
        }
      }
      localCol += width + LETTER_GAP;
      letterSeq++;
    }

    const cols = localCol - LETTER_GAP;
    words.push({ cols, cells });
    globalColBase += cols + WORD_GAP;
  }

  return { words, maxGlobalCol };
}

export default function TetrisHero() {
  const reduce = useReducedMotion();
  const { words, maxGlobalCol } = useMemo(buildWords, []);

  // When the last block has locked — used to time the tagline reveal.
  const assemblyDone = reduce ? 0 : DROP_START + maxGlobalCol * DROP_STEP + 0.6;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
      style={{ ["--hero-cell" as string]: "clamp(15px, 5.5vw, 34px)" }}
      aria-label="Atul Rao"
    >
      {/* The name, assembled from falling tetromino blocks */}
      <div className="flex flex-wrap items-start justify-center gap-x-[var(--hero-cell)] gap-y-4">
        {words.map((word, wi) => (
          <div
            key={wi}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${word.cols}, var(--hero-cell))`,
              gridTemplateRows: `repeat(${GLYPH_ROWS}, var(--hero-cell))`,
              gap: 2,
            }}
          >
            {word.cells.map((cell) => (
              <motion.div
                key={cell.key}
                className="hero-block"
                style={{
                  gridRow: cell.row + 1,
                  gridColumn: cell.col + 1,
                  backgroundColor: cell.color,
                }}
                initial={reduce ? false : { y: -700, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 520,
                        damping: 26,
                        delay: DROP_START + cell.globalCol * DROP_STEP,
                      }
                }
              />
            ))}
          </div>
        ))}
      </div>

      {/* Tagline + scroll cue, revealed once the name has locked in */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-6"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: assemblyDone }}
      >
        <TypeWriter
          texts={[
            "SOFTWARE ENGINEER",
            "CLOUD · ML · ROBOTICS",
            "STUDENT @ MCMASTER",
          ]}
          className="hud text-sm md:text-base"
          speed={70}
          delay={2200}
          initialDelay={0}
        />
        <motion.div
          className="hud flex flex-col items-center gap-1"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span>scroll</span>
          <span>▼</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
