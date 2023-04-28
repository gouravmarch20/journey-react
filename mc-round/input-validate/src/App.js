import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [lists, setLists] = useState([])
  const [userInput, setUserInput] = useState("")
  const [isFormSubmit, setIsFormSubmit] = useState(false)
  const [isTextRed, setIsTextRed] = useState(false)

  const isDataValid = () => {
    return +userInput === +userInput ? false : true
  }
  const handleBtnSubmit = () => {
    setIsFormSubmit(true)
    if (userInput === 'red') {
      setIsTextRed(true)
    }

    if (isDataValid()) {
      setLists([...lists, { name: userInput, index: lists.length }])
      setUserInput("")
      setIsFormSubmit(false)
    }

  }
  const handleOnChange = (e) => {
    setUserInput(e.target.value)
  }
  return (
    <div>
      <p>if user type number type stop him to add & show red</p>
      <p>if user type red all text red colr</p>
      <div className='container'>

        <div>

          <input type="text" value={userInput} className={isFormSubmit && +userInput === +userInput && 'show-error'} onChange={(e) => {
            handleOnChange(e)

          }} />
          <button onClick={() => {
            handleBtnSubmit()
          }}>sumit

          </button>
        </div>

        <div >
          {
            lists.map((list) => (
              <h1 className={isTextRed ? 'red' :''} key={list.index}> {list.name} ,  {list.index} </h1>
            ))
          }
        </div>
      </div></div>
  )
}

export default App