import React, { useState, useMemo } from 'react'

export const A2Use = () => {
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
  const checkData = useMemo(() => {
    return countNumber(myNum)
  }, [myNum])

  return (
    <div>
      <button onClick={getValue} style={{ background: 'red' }}>
        Counter complex logic
      </button>
      <p>My new number {checkData}</p>
      <h2>
      seem less toogle
      </h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'simple toogle logic' : 'faster by optomise code'}
      </button>
    </div>
  )
}
