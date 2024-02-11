import React, { useState } from "react"

const CheckBox = () => {
  const options = ["cricket", "football", "hockey"]
  const days = ["weekday", "weekend"]
  const [sport, setSport] = useState("football")
  const [selectedDay, setSelectedDay] = useState("weekday")

  return (
    <div style={{
      border : "2px solid red" ,
      padding :"1rem"

    }}>
      <h2>Which game you want to play </h2>

      <div
        style={{
          display: "flex",
          padding: "1rem",
        }}
      >
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
                checked={option === sport}
              />
              <label for={option}>{option}</label>
            </div>
          )
        })}
      </div>

      <div
        style={{
          display: "flex",
          padding: "1rem",
        }}
      >
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
                checked={currVal === selectedDay}
              />
              <label htmlFor={currVal}>{currVal}</label>
            </>
          )
        })}
      </div>

      <h2>
        you will play {sport} on {selectedDay}
      </h2>
    </div>
  )
}

export default CheckBox
