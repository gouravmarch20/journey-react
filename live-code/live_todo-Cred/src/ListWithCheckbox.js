import React, { useState } from "react"
import {todoTaskCustom} from './data/data'
const ListWithCheckbox = () => {
  const [todo, setTodo] = useState(todoTaskCustom)
  const handleCheckbox = (key) => {
    const newTodo = todo?.map((to) =>
      to.key === key ? { ...to, isDone: !to.isDone } : to
    )
    console.log(newTodo)
    setTodo(newTodo)
  }
  const handleDelete = (key) => {
    const newTodo = todo?.filter((to) =>to.key !== key )
    console.log(newTodo)
    setTodo(newTodo)
  }
  return (
    <div>
      {todo.map((to) => {
        return (
          <div style={{ display: "flex" }}>
            <p style={{ width: "100px" }}>{to?.todo}</p>
            <input
              type="checkbox"
              //   value={to.isDone}
              checked={to.isDone}
              onClick={() => handleCheckbox(to.key)}
            />
            {to.isDone && (
              <button onClick={() => handleDelete(to.key)}>delete</button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ListWithCheckbox
