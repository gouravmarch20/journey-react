import React, { memo } from "react";

export const Todo = memo(({ todos, addTodo }) => {
  return (
    <div>
      {console.log("child render")}
      <h1>Child render {(Math.random() * 10).toFixed(2)}</h1>
      <ul>
        {todos?.length
          ? todos.map((todo, index) => <li key={index}>{todo}</li>)
          : null}
      </ul>
      <button onClick={() => addTodo()}>add todo items</button>
    </div>
  );
});
