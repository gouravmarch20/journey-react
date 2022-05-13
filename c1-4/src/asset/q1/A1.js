import React, { useState } from 'react'

const A1 = () => {
  const [userName, setUserName] = useState('')
  const [msg, setMsg] = useState('')
  const inputHandler = e => {
    setUserName(e.target.value)
  }
  const sumitHandler = e => {
    userName.length % 2 === 0
      ? setMsg(`hello ${userName}`)
      : setMsg(`hii ${userName}`)
  }
  return (
    <div>
      {msg && <p>{msg}</p>}
      <input type='text' name='' value={userName} onChange={inputHandler} />
      <button onClick={sumitHandler}>sumit</button>
    </div>
  )
}

export default A1
