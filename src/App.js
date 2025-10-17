import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import Controls from "./Components/controls";
import {
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
  addRandomTile,
  isGameOver,
} from "./Utils/utils";
import "./App.css";

const minBoardSize = 3;
const maxBoardSize = 8;

const initBoard = (size) => {
  let board = Array(size)
    .fill()
    .map(() => Array(size).fill(0));
  board = addRandomTile(board);
  return addRandomTile(board);
};

const App = () => {
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState(initBoard(boardSize));
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setBoard(initBoard(boardSize));
    setGameOver(false);
    setGameWon(false);
  }, [boardSize]);

  const handleKeyDown = (e) => {
    if (gameOver) return;

    let newBoard;
    switch (e.key) {
      case "ArrowLeft":
        newBoard = slideLeft(board);
        break;
      case "ArrowRight":
        newBoard = slideRight(board);
        break;
      case "ArrowUp":
        newBoard = slideUp(board);
        break;
      case "ArrowDown":
        newBoard = slideDown(board);
        break;
      default:
        return;
    }
    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      newBoard = addRandomTile(newBoard);
      setBoard(newBoard);
      if (isGameOver(newBoard)) setGameOver(true);
      if (newBoard.flat().includes(2048)) setGameWon(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [board, gameOver]);

  const handleGuiMove = (direction) => {
    if (gameOver) return;

    let newBoard;
    if (direction === "left") newBoard = slideLeft(board);
    if (direction === "right") newBoard = slideRight(board);
    if (direction === "up") newBoard = slideUp(board);
    if (direction === "down") newBoard = slideDown(board);

    if (newBoard && JSON.stringify(newBoard) !== JSON.stringify(board)) {
      newBoard = addRandomTile(newBoard);
      setBoard(newBoard);
      if (isGameOver(newBoard)) setGameOver(true);
      if (newBoard.flat().includes(2048)) setGameWon(true);
    }
  };

  const restartGame = () => {
    setBoard(initBoard(boardSize));
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="game-container">
      <h1>2048 Game</h1>
      <label>
        Select Board Size:{" "}
        <select
          value={boardSize}
          onChange={(e) => setBoardSize(Number(e.target.value))}
        >
          {[...Array(maxBoardSize - minBoardSize + 1)].map((_, i) => {
            const size = i + minBoardSize;
            return (
              <option key={size} value={size}>
                {size} x {size}
              </option>
            );
          })}
        </select>
      </label>
      <Controls onMove={handleGuiMove} disabled={gameOver} />
      {gameWon && <div className="message">You Win!</div>}
      {gameOver && <div className="message">Game Over!</div>}
      <Board board={board} boardSize={boardSize} />
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default App;
