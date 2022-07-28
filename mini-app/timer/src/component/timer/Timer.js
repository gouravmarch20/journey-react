import React, { useState, useEffect } from 'react'
import './timer.css'
const Timer = () => {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  var timer
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(prev => prev + 1)
      if (seconds === 59) {
        setMinutes(prev => prev + 1)
        setSeconds(0)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds, minutes])
  const resetTimer = () => {
    setSeconds(0)
    setMinutes(0)
  }
  const stopTimer = () => {
    clearInterval(timer)
  }
  return (
    <div className='timer'>
      <div className='container'>
        <div className='timer-container'>
          <h1>
            {minutes < 10 ? '0' + minutes : minutes} :
            {seconds < 10 ? '0' + seconds : seconds}
          </h1>
          <button className='restart' onClick={resetTimer}>
            Restart{' '}
          </button>
          <button className='stop' onClick={stopTimer}>
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer
