import React, { useState, useEffect } from "react"

const W1 = () => {
  const options = ["cricket", "football", "hockey"]
  const days = ["weekday", "weekend"]
  const [sport, setSport] = useState("football")
  const [selectedDay, setSelectedDay] = useState("weekday")

  return (
    <div>
      <h1>Which game you want to play </h1>
      {options.map((option) => {
        return (
          <div>
            <input
              type="radio"
              value={option}
              name="sport"
              id={option}
              onChange={(e) => {
                setSport(e.target.value)
              }}
              checked={option === sport }
            />
            <label for={option}>{option}</label>
          </div>
        )
      })}

      {days.map((currVal) => {
        return (
          <>
            <input
              type="radio"
              id={currVal}
              name="day"
              value={currVal}
              onClick={(e) => {
                setSelectedDay(e.target.value)
              }}
              checked={currVal == selectedDay }

            />
            <label htmlFor={currVal}>{currVal}</label>
          </>
        )
      })}

      <h1>
        you will play {sport} on {selectedDay}
      </h1>
    </div>
  )
}

export default W1
