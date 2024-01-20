import React, { useEffect, useState } from 'react'

const TimerOne = () => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  useEffect(() => {
    let interval = null
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div>
      <h1>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </h1>

      {!timerOn && time === 0 && (
        <button
          onClick={() => {
            setTimerOn(true)
          }}
        >
          Start
        </button>
      )}

      {!timerOn && time > 0 && (
        <button
          onClick={() => {
            setTime(0)
            setTimerOn(false)
          }}
        >
          Reset
        </button>
      )}
      {timerOn && (
        <button
          onClick={() => {
            setTimerOn(false)
          }}
        >
          Stop
        </button>
      )}
      {!timerOn && time !== 0 && (
        <button
          onClick={() => {
            setTimerOn(true)
          }}
        >
          Resume
        </button>
      )}
    </div>
  )
}

export default TimerOne
