import React, { useState } from 'react'
//
const AddEdit = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [editIndexActive, setEditIndexActive] = useState(false)
  const handleSaveInfo = () => {
    if (!name && !email) {
      setStatus(false)
    } else {
      setStatus(true)
      setEditIndexActive(true)
    }
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor=''>
          Name
          <input
            type='text'
            value={name}
            placeholder='enter'
            readOnly={
              editIndexActive ? (editIndex === 'name' ? false : true) : false
            }
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <button onClick={() => setEditIndex('name')}>Edit</button>
          <div>
            <button type='sumit' onClick={handleSaveInfo}>
              Sumit
            </button>
          </div>
        </label>
      </form>

      {status === true && <p>Data Saved</p>}
      {status === false && <p>Error in saving</p>}
    </div>
  )
}

export default AddEdit
