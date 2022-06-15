import React from 'react'
import { useState } from 'react'

const StringReverse = () => {
  const [inputText, setInputText] = useState('')
  const handleReverse = () => {
    const str = inputText
      .split('')
      .reverse()
      .join('')

    setInputText(str)
  }
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          onChange={e => setInputText(e.target.value)}
          value={inputText}
          placeholder='start typing'
        />
        <h1>{inputText}</h1>
        {inputText && <button onClick={handleReverse}>Submit</button>}
      </form>
    </div>
  )
}

export default StringReverse
