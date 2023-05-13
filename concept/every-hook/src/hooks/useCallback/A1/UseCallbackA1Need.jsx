import React, { useState } from "react";
import { Todo } from "./Todo";

export const UseCallbackA1Need = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos((prev) => [...prev, `new entry`]);
  };
  return (
    <div>
      <Todo todos={todos} addTodo={addTodo} />
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
