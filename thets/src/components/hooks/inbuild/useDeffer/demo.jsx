"use client";
import React, { useState, useDeferredValue, useMemo } from "react";

const UseDeferredValueDemo = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  // Simulate expensive filtering with delay
  const filteredList = useMemo(() => {
    console.log("⏳ Filtering started with:", deferredInput);

    // Heavy CPU-blocking loop (fake delay)
    const start = performance.now();
    while (performance.now() - start < 500) {
      // Simulate blocking work for 500ms
    }

    const list = [];
    for (let i = 0; i < 5000; i++) {
      const item = `Item ${i}`;
      if (item.includes(deferredInput)) {
        list.push(item);
      }
    }

    console.log("✅ Filtering done");
    return list;
  }, [deferredInput]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">useDeferredValue Demo</h1>

      <input
        type="text"
        className="border p-2 mb-4 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />

      {deferredInput !== input && (
        <p className="text-yellow-600">Updating results...</p>
      )}

      <ul className="h-64 overflow-auto border p-2 bg-gray-50">
        {filteredList.map((item, index) => (
          <li key={index} className="text-sm text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseDeferredValueDemo;
