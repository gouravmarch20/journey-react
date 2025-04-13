"use client";
import React, { useState } from "react";

const ToastContainer = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (board: string[][], player: string): boolean => {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      )
        return true;
      // Check columns
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      )
        return true;
    }
    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;
    return false;
  };

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== "" || winner) return; // Prevent overwriting cells or playing after a win

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setWinner(currentPlayer);
      alert(`${currentPlayer} wins!`);
    } else if (newBoard.flat().every((cell) => cell !== "")) {
      // Check for a draw
      setWinner("Draw");
      alert("It's a draw!");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // Switch players
    }
  };

  const resetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>

      {board.map((row, i) => (
        <div className="flex" key={i}>
          {" "}
          {/* Ensure rows align horizontally */}
          {row.map((tic, j) => (
            <div
              className="w-16 h-16 flex justify-center items-center bg-white text-amber-700 border border-gray-300 cursor-pointer text-2xl font-bold"
              key={`${i}-${j}`}
              onClick={() => handleCellClick(i, j)}
            >
              <span>{tic}</span>
            </div>
          ))}
 
        </div>
      ))}
      {winner && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

export default ToastContainer;
// 00 - 11 - 22
//20 - 11 -- 02
