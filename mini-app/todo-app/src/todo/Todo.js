import React, { useEffect, useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    const temp = localStorage.getItem('todos')
    console.log("1")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])
  useEffect(() => {
    const temp = JSON.stringify(todos)
    console.log('2')
    localStorage.setItem('todos', temp)
  }, [todos])

  const handleSubmit = e => {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }
    // setTodos([...todos, newTodo])
    setTodos([...todos].concat(newTodo)) //pure fun
    setTodo('')
  }
  const deleteTodo = id => {
    const updateTodo = [...todos].filter(todo => todo.id !== id)
    setTodos(updateTodo)
  }
  const toggleTask = id => {
    const updatedTodo = [...todos].map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        // way 2 : require to store in todo by spread operatorr we had created whole new object
        // todo = todo.completed
        //   ? { ...todo, completed: false }
        //   : { ...todo, completed: true }
      }
      return todo
    })
    setTodos(updatedTodo)
  }
  const editTodo = id => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => {
            setTodo(e.target.value)
          }}
          value={todo}
        />
        <button type='submit'>Add todo</button>
      </form>
      {todos.length > 0 &&
        todos.map(todo => (
          <div key={todo.id}>
            {/* <h2>{todo.id}</h2> */}
            {todoEditing === todo.id ? (
              <input
                type='text'
                onChange={e => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div>{todo.text}</div>
            )}
            <h1>{todo.text}</h1>

            <button onClick={() => deleteTodo(todo.id)}>deletye</button>
            <input
              type='checkbox'
              onChange={() => toggleTask(todo.id)}
              checked={todo.completed}
            />

            {todoEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id)}>Submit edits </button>
            ) : (
              <button
                onClick={() => {
                  setTodoEditing(todo.id)
                }}
              >
                Edit todo
              </button>
            )}
          </div>
        ))}
    </>
  )
}

export default Todo
