/**
 * The seven tetromino piece colors — the only source of color in the design.
 * Keys match the classic Tetris piece letters (I, O, T, S, Z, J, L).
 */
export const TETROMINO = {
  I: "#22d3ee", // cyan  — also the scrollbar
  O: "#facc15", // yellow
  T: "#a855f7", // purple
  S: "#22c55e", // green
  Z: "#ef4444", // red
  J: "#3b82f6", // blue
  L: "#f97316", // orange
} as const;

export type Piece = keyof typeof TETROMINO;

/** Stable ordering used when cycling colors across items. */
export const PIECES: Piece[] = ["I", "O", "T", "S", "Z", "J", "L"];

/** Color for a piece letter. */
export const pieceColor = (p: Piece): string => TETROMINO[p];

/** Cycle through the seven piece colors by index (for grids/lists). */
export const colorByIndex = (i: number): string =>
  TETROMINO[PIECES[i % PIECES.length]];
