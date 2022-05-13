import React from 'react'
import { useState } from 'react'
// l1 : if if if mai all run , if else if else if --> any one run
const QuestionTwo = () => {
  const todosData = [
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
  const [data] = useState(todosData)
  const [todos, setTodos] = useState(data)
  const displayTask = (e, action) => {
    if (action === 'All') {
      setTodos(data)
    } else if (action === 'completed') {
      const filterTodos = data.filter(todo => todo.completed)
      setTodos(filterTodos)
    } else if (action === 'incompleted') {
      const filterTodos = data.filter(todo => !todo.completed)
      setTodos(filterTodos)
    }
  }
  return (
    <div>
      {todos.map(todo => (
        <div>
          <p>{todo.title}</p>
          <p>{todo.completed ? '✅' : '❌'}</p>
        </div>
      ))}

      <button onClick={e => displayTask(e, 'completed')}>complete</button>
      <button onClick={e => displayTask(e, 'incompleted')}>incomplete</button>
      <button onClick={e => displayTask(e, 'All')}>all</button>
    </div>
  )
}

export default QuestionTwo
