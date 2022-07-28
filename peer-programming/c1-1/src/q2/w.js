// m1 : true pass as string ==> required as boolean
import React, { useState } from 'react'
import './App.css'
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
const App = () => {
  const [task, setTask] = useState(todos)
  const completeTask = status => {
    const data = todos.filter(todo => {
      return todo.completed == status
    })
    setTask(data)
  }
  const displayAll = () => {
    const tempData = todos.map(todo => todo)
    setTask(tempData)
  }
  return (
    <div>
      <h2>Todo list </h2>
      <button
        type='submit'
        onClick={() => {
          completeTask(true)
        }}
      >
        complete
      </button>
      <button
        type='submit'
        onClick={() => {
          completeTask(false)
        }}
      >
        incomplete
      </button>
      <button
        type='submit'
        onClick={() => {
          displayAll()
        }}
      >
        all
      </button>
      <hr />
      {task &&
        task.map((t, index) => {
          return (
            <div>
              <h1 key={index}>{t.title}</h1>
              <p>Complete : {t.completed ? '✅' : '❌'}</p>
            </div>
          )
        })}
    </div>
  )
}

export default App
