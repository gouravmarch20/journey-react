import React, { useState } from "react"
import { data } from "../../data/data"
const DropDown = () => {
  const [selectedState, setSelectedState] = useState("")
  const handleChange = (e) => {
    setSelectedState(e.target.value)
  }
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "1rem",
        marginTop : "1rem"
      }}
    >
      <h1>
        <select onChange={(e) => handleChange(e)}>
          {Object.keys(data)?.map((countryName) => (
            <>
              {
                <option value={`${countryName}`} key="">
                  {countryName}
                </option>
              }
            </>
          ))}
        </select>

        <select>
          {data?.[selectedState]?.map((countryName) => (
            <>
              {
                <option value={`${countryName.state}`} key="">
                  {countryName.state}
                </option>
              }
            </>
          ))}
        </select>
      </h1>
    </div>
  )
}

export default DropDown
