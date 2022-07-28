import React, { useState } from 'react'

const Todo = () => {
  const todos = [
    {
      id: 1,
      title: 'NeoG assignments',
      completed: false
    },
    {
      id: 2,
      title: 'Pair programming session',
      completed: true
    },
    {
      id: 3,
      title: 'Project submission',
      completed: false
    },
    {
      id: 4,
      title: 'Coding practice',
      completed: true
    }
  ]
  const [todoTask, setTodoTask] = useState(todos)
  const filterTodoTask = filterText => {
    switch (filterText.toLowerCase()) {
      case 'all': {
        setTodoTask(todos)
        break
      }

      case 'complete': {
        const tempFilterTodo = todos.filter(todo => todo.completed === true)
        setTodoTask(tempFilterTodo)
        break
      }
      case 'pending': {
        const tempFilterTodo = todos.filter(todo => todo.completed === false)

        setTodoTask(tempFilterTodo)
        break
      }
      default:
        setTodoTask(todos)
        break
    }
  }

  return (
    <div>
      <button type='submit' onClick={() => filterTodoTask('all')}>
        All
      </button>
      <button type='submit' onClick={() => filterTodoTask('complete')}>
        Complete
      </button>
      <button type='submit' onClick={() => filterTodoTask('pending')}>
        Pending
      </button>

      <hr />
      {todoTask.map(todo => {
        return (
          <div key={todo.id}>
            <h5>{todo.title}</h5>
            <p>{todo.completed}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Todo
