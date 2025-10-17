import React from "react";
import Tile from "./Tile";

const Board = ({ board, boardSize }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${boardSize}, 70px)`,
    gridGap: "10px",
    margin: "20px auto",
    width: `${boardSize * 70 + (boardSize - 1) * 10}px`,
  };

  return (
    <div className="board" style={gridStyle}>
      {board.map((row, rIndex) =>
        row.map((value, cIndex) => (
          <Tile key={`${rIndex}-${cIndex}`} value={value} />
        ))
      )}
    </div>
  );
};

export default Board;
