import { useState, useMemo } from "react";
import { checkGameState } from "../../../utils";

import "./TctactoeTable.scss";
import { Square } from "../../atoms/Square/Square";
import { X } from "../../atoms/X/X";
import { O } from "../../atoms/O/O";

export const TictactoeTable = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const { winner, isDraw, winningLine } = useMemo(
    () => checkGameState(board),
    [board]
  );

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const next = [...board];
    next[index] = isXNext ? "X" : "O";
    setBoard(next);
    setIsXNext((v) => !v);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const status = winner
    ? `Vencedor: ${winner}`
    : isDraw
    ? "Empate"
    : `Vez: ${isXNext ? "X" : "O"}`;

  return (
    <>
      <div className="status-bar-temp">
        <span className="status">{status}</span>
      </div>

      <div className="board-container">
        <div className="board" role="grid" aria-label="tabuleiro">
          {board.map((value, i) => {
            const isWinning = winningLine?.includes(i);
            const content = value === "X" ? <X /> : value === "O" ? <O /> : null;
            return (
              <Square
                key={i}
                value={content}
                isWinning={!!isWinning}
                onClick={() => handleClick(i)}
                ariaLabel={`casa ${i + 1}${value ? `: ${value}` : ""}`}
                disabled={!!winner || !!value}
              />
            );
          })}
        </div>
        <span className="board-footer" />
      </div>
      <button className="reset" onClick={reset}>
        Reiniciar
      </button>
    </>
  );
};
