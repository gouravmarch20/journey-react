import React from "react"

const HocBlue = (props) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width : "100px",
      }}
    >
      <h1>{props.msg}</h1>
      <props.cmp />
    </div>
  )
}

export default HocBlue
