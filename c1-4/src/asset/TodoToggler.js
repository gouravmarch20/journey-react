import React, { useState } from 'react'
import { data } from './data'
const TodoToggler = () => {
  const [todoData, setTodoData] = useState(data)
  const [addTodo, setAddTodo] = useState(data)
  const handleChange = e => {
    const tempTodo = { title: e.target.value, id: Math.random() }
    setAddTodo(tempTodo)
  }
  const handleSumit = e => {
    e.preventDefault()
    console.log(addTodo)
    setTodoData(prev => [...prev, addTodo])
  }
  return (
    <div>
      <input type='text' onChange={handleChange} />
      <button onClick={handleSumit}>sumit</button>
      <hr />
      {todoData.map(todo => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoToggler
