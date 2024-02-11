import React from "react"

const HocRed = (props) => {
  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        width: 100,
      }}
    >
      <props.cmp />
      <h1>{props.msg}</h1>
    </div>
  )
}

export default HocRed
