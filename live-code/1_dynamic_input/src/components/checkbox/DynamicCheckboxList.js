import React, { useState } from "react"

const DynamicCheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
    // Add more checkboxes as needed
  ])

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    )
  }

  return (
    <div style={{
      border : "2px solid blue" ,
      marginTop : "1rem",
      padding :"1rem"
    }}>
      <h2>Dynamic Checkbox List</h2>
      <div
        style={{
          background: "lightblue",
          display: "flex",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id}>
            <input
              type="checkbox"
              id={checkbox.id}
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            <label htmlFor={checkbox.id}>{checkbox.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DynamicCheckboxList
