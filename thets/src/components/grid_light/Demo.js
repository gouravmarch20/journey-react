import React, { useState } from "react";

// Grid Lights Component
const GridLights = ({ size }) => {
  const [grid, setGrid] = useState(
    Array(size)
      .fill()
      .map(() => Array(size).fill(0))
  );

  // Function to toggle a light and its adjacent cells
  const toggleLight = (row, col) => {
    setGrid((prevGrid) => {
      // Create a deep copy of the grid
      const newGrid = prevGrid.map((row) => [...row]);

      // Toggle the clicked cell
      newGrid[row][col] = newGrid[row][col] === 0 ? 1 : 0;

      // Toggle adjacent cells (top, bottom, left, right)
      if (row > 0) newGrid[row - 1][col] = newGrid[row - 1][col] === 0 ? 1 : 0; // Top
      if (row < size - 1)
        newGrid[row + 1][col] = newGrid[row + 1][col] === 0 ? 1 : 0; // Bottom
      if (col > 0) newGrid[row][col - 1] = newGrid[row][col - 1] === 0 ? 1 : 0; // Left
      if (col < size - 1)
        newGrid[row][col + 1] = newGrid[row][col + 1] === 0 ? 1 : 0; // Right

      return newGrid; // Return the updated state
    });
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Grid Lights</h1>
      <div
        className={`grid gap-1 mt-5`}
        style={{ gridTemplateColumns: `repeat(${size}, 60px)` }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleLight(rowIndex, colIndex)}
              className={`w-15 h-15 text-white border-2 border-white cursor-pointer ${
                cell ? "bg-yellow-400" : "bg-black"
              }`}
            >
              {cell}
            </button>
          ))
        )}
      </div>
    </div>
  );
};
export default GridLights;
