import React from 'react'
import { useState } from 'react'

const QuestionOne = () => {
  const [input, setInput] = useState('')
  const [mirrorText, setMirrorText] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('object')
    console.log(input)
    const str = input
      .split('')
      .reverse()
      .join('')

    console.log(str)
    setMirrorText(str)
  }
  return (
    <div>
      <form>
        <input
          type='text'
          onChange={e => (
            setInput(e.target.value), setMirrorText(e.target.value)
          )}
          value={input}
        />
        <h1>{mirrorText}</h1>
        <button onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default QuestionOne
