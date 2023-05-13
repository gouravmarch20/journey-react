import React, { useState } from 'react'

export const A2Need = () => {
  const [myNum, setMyNum] = useState(0)
  const [show, setShow] = useState(true)

  const getValue = () => {
    return setMyNum(myNum + 1)
  }

  const countNumber = num => {
    console.log('countNumber function heavy calcution', num)
    for (let i = 0; i < 2000000000; i++) {}
    return num
  }
  const checkData = countNumber(myNum)

  return (
    <div>
      <button onClick={getValue} style={{ background: 'red' }}>
        Counter complex logic
      </button>
      <p>My new number {checkData}</p>
      <h2>this btn have simple toogle logic but still taking time  due to above function</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'simple toogle logic' : 'but still taking time in toggle'}
      </button>
    </div>
  )
}
