// l1 : showTodos ==> setTodos() direct set whole array
//l2 ! can be used in filter task just opposte ==> true ka false , false ka true
//*** */ l3 : onClick do not require annomys function if no params --< as varible we can call
// l4 : return keyword avoided in map by () mai wrap
//l5 : if id is given then give same id
import React, { useState } from 'react'
import { todoData } from './data'
const Todos = () => {
  const [todos, setTodos] = useState(todoData)
  const completedTodos = () => {
    const filterTodos = todoData.filter(todo => todo.completed)
    setTodos(filterTodos)
  }
  const incompleteTodo = () => {
    const filterTodos = todoData.filter(todo => !todo.completed)
    setTodos(filterTodos)
  }
  const showTodos = () => {
    setTodos(todoData)
  }
  return (
    <div>
      <h1>Todo</h1>
      <button type='submit' onClick={completedTodos}>
        Show completed todos
      </button>
      <button type='submit' onClick={incompleteTodo}>
        Show incomplete todos
      </button>
      <button type='submit' onClick={() => showTodos}>
        Show All
      </button>
      {todos &&
        todos.map(todo => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>Complete : {todo.completed ? '✅' : '❌'}</p>
          </div>
        ))}
    </div>
  )
}

export default Todos
