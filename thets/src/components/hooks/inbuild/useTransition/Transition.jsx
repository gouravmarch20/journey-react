"use client";
import React, { useState, useTransition } from "react";

const UseTransitionDemo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Use transition for heavy update
    startTransition(() => {
      const fakeList = [];
      for (let i = 0; i < 5000; i++) {
        fakeList.push(`${value} - Item ${i + 1}`);
      }
      setList(fakeList);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">useTransition Demo</h1>

      <input
        type="text"
        className="border p-2 mb-4 w-full"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />

      {isPending && <p className="text-blue-500">Loading list...</p>}

      <ul className="h-64 overflow-auto border p-2 bg-gray-50">
        {list.map((item, index) => (
          <li key={index} className="text-sm text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitionDemo;
