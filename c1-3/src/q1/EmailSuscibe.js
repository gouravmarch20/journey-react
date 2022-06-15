import React, { useState } from 'react'
import { emailData } from './data'
const EmailSuscibe = () => {
  const [userEmailList, setUserEmailList] = useState(emailData)
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setUserEmail(e.target.value)
    if (message) {
      setMessage('')
    }
  }
  const addEmail = e => {
    const isEmailExits = userEmailList.find(email => email.mail === userEmail)
    if (isEmailExits) {
      setMessage('email already exits')
    }
    if (!isEmailExits) {
      setUserEmailList(prev =>
        prev.concat({ id: Math.random, mail: userEmail })
      )
      setMessage('email added ')
    }

    setUserEmail('')
  }
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type='email'
          name=''
          id=''
          onChange={handleChange}
          value={userEmail}
        />
        <button type='submit' onClick={addEmail}>
          Sumit
        </button>
      </form>

      {message && <h2>{message}</h2>}
    </div>
  )
}

export default EmailSuscibe
