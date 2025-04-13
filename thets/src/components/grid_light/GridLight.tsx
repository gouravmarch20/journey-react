"use client";
import React, { useState } from "react";

const GridLightContainer = () => {
  const gridSize = 5;
  const [board, setBoard] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const toggleLight = (row: number, col: number) => {
    const toDo = board[row][col] == "on" ? "" : "on";
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((r) => [...r]); // Deep copy of the board
      const toggle = (r: number, c: number, toDo: string) => {
        if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
          //   newBoard[r][c] = newBoard[r][c] === "on" ? "" : "on";
          newBoard[r][c] = toDo;
        }
      };

      toggle(row, col, toDo); // Toggle clicked cell
      toggle(row - 1, col, toDo); // Up
      toggle(row + 1, col, toDo); // Down
      toggle(row, col - 1, toDo); // Left
      toggle(row, col + 1, toDo); // Right

      return newBoard;
    });
  };

  return (
    <div>
      GridLightContainer
      {board.map((row, i) => (
        <div className="flex" key={i}>
          {" "}
          {/* Ensure rows align horizontally */}
          {row.map((tic, j) => (
            <div
              className={`w-16 h-16 flex justify-center items-center bg-white text-amber-700 border border-gray-300 cursor-pointer text-2xl font-bold ${
                board[i][j] == "on" ? "bg-amber-600" : ""
              } `}
              key={`${i}-${j}`}
              onClick={() => toggleLight(i, j)}
            >
              <span>{tic}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridLightContainer;
