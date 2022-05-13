import { useState } from 'react'
import { todoData } from './data'

export default function Todos () {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(todoData)

  const submitHandler = e => {
    e.preventDefault()
    setTodos(todos =>
      todos.concat({ title: todo, completed: false, id: Math.random() })
    )
    setTodo('')
  }

  const markTodo = data => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === data.id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div>
      <form>
        <input
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button onClick={submitHandler}> Add </button>
      </form>
      {todos.map(todo => (
        <div
          key={todo.id}
          style={{
            border: '1px solid black',
            margin: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => markTodo(todo)}
        >
          <p>Title: {todo.title} </p>
          <small>Completed: {todo.completed ? '✅' : '❌'}</small>
        </div>
      ))}
    </div>
  )
}
