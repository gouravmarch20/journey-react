import React, { useEffect, useState } from "react";
import H1 from '../../HOC/H1Search'

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

export const SearchTodos = H1(TodoList, "todos");

