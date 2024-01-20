import React, { useState, useEffect } from 'react'

const W1 = () => {
  const options = ['cricket', 'football', 'hockey']
  const days = ['weekday', 'weekend']
  const [sport, setSport] = useState('')
  let no = 66
  useEffect(() => {
    no = 5555
    no++;
    console.log("ki");
  }, [no,sport])

  return (
    <div>
      {console.log(no)}
      <h1>Which game you want to play </h1>
      {options.map(option => {
        return (
          <div>
            <input
              type='radio'
              value={sport}
              name='sports'
              id={option}
              onChange={e => {
                setSport(e.target.value)
              }}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        )
      })}
    </div>
  )
}

export default W1
