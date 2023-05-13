import React, { useState, useCallback } from "react";
import { Todo } from "./Todo";

export const UseCallbackA1Use = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    console.log(22);

    setTodos((prev) => [...prev, `new entry`]);
  };
 
  return (
    <div
      style={{
        background: "lightgreen",
      }}
    >
      <Todo todos={todos} addTodo={addTodo} />
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
