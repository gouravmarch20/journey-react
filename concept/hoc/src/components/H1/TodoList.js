import React, { useEffect, useState } from "react"
import H1 from "../../HOC/H1Search"

const TodoList = ({ data }) => {

  return (
    <div>
      <div>
        {data.map((todo) => {
          return (
            <div key={todo.userId}>
              <p>
                <strong>{todo.title}</strong>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const SearchTodos = H1(TodoList, "todos")
