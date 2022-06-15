import React, { useState } from 'react'

const Message = () => {
  const [userName, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const showMessage = e => {
    e.preventDefault()

    userName.length % 2 === 0
      ? setMessage(`hii ${message}`)
      : setMessage(`hello  ${message}`)
  }
  const handleInput = e => {
    setUserName(e.target.value)
    if (message) {
      setMessage('')
    }
  }
  return (
    <div>
      <input type='text' name='' onChange={handleInput} />
      <button onClick={showMessage}>Check message </button>
      {message && <h1>{message}</h1>}
    </div>
  )
}

export default Message
