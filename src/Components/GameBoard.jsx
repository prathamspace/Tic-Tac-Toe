import React, { useState } from "react";

const intialPlayerBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectedSquare ,activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(intialPlayerBoard);
  function handleGameBoard(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerGameBoard) => [...innerGameBoard]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });
    onSelectedSquare();
  }
  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleGameBoard(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </div>
  );
};

export default GameBoard;
