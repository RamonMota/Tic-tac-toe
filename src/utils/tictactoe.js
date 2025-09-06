function normalizeBoard(board) {
  if (Array.isArray(board) && board.length === 9) return board;
  if (
    Array.isArray(board) &&
    board.length === 3 &&
    board.every((row) => Array.isArray(row) && row.length === 3)
  ) {
    return [
      board[0][0],
      board[0][1],
      board[0][2],
      board[1][0],
      board[1][1],
      board[1][2],
      board[2][0],
      board[2][1],
      board[2][2],
    ];
  }
  throw new Error("Invalid board shape: expected length 9 array or 3x3 matrix");
}

export const WINNING_LINES = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(board) {
  const cells = normalizeBoard(board);
  for (const [a, b, c] of WINNING_LINES) {
    const v = cells[a];
    if (v && v === cells[b] && v === cells[c]) return v;
  }
  return null;
}

export function getWinningLine(board) {
  const cells = normalizeBoard(board);
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    const v = cells[a];
    if (v && v === cells[b] && v === cells[c]) return line;
  }
  return null;
}

export function isDraw(board) {
  const cells = normalizeBoard(board);
  return !calculateWinner(cells) && cells.every((v) => v === "X" || v === "O");
}

export function checkGameState(board) {
  const cells = normalizeBoard(board);
  const winner = calculateWinner(cells);
  const winningLine = winner ? getWinningLine(cells) : null;
  return { winner, isDraw: !winner && isDraw(cells), winningLine };
}

export default calculateWinner;
