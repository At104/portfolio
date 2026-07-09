/**
 * The hero name, drawn as a 5-row bitmap "font". Each glyph is 5 strings of
 * equal width; "#" = a filled cell (a block), anything else = empty.
 *
 * To change the name shown in the hero: edit NAME_WORDS (and add any missing
 * letters to GLYPHS below). Nothing else needs to change.
 */
export const GLYPH_ROWS = 5;

export const GLYPHS: Record<string, string[]> = {
  A: [
    ".##.",
    "#..#",
    "####",
    "#..#",
    "#..#",
  ],
  T: [
    "####",
    ".##.",
    ".##.",
    ".##.",
    ".##.",
  ],
  U: [
    "#..#",
    "#..#",
    "#..#",
    "#..#",
    "####",
  ],
  L: [
    "#...",
    "#...",
    "#...",
    "#...",
    "####",
  ],
  R: [
    "###.",
    "#..#",
    "###.",
    "#.#.",
    "#..#",
  ],
  O: [
    ".##.",
    "#..#",
    "#..#",
    "#..#",
    ".##.",
  ],
};

/** Words that make up the name; each renders on its own line when space is tight. */
export const NAME_WORDS = ["ATUL", "RAO"];

/** Columns of empty space between adjacent letters within a word. */
export const LETTER_GAP = 1;
