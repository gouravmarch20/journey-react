"use client";
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <Child onClick={handleClick} />
      <h1 className="p-4 text-blue-400">
        ✅ Here, Child won’t re-render when count changes .. in each render ...
        handleClick function doesn’t get recreated .
      </h1>
    </div>
  );
};
export default Parent;
