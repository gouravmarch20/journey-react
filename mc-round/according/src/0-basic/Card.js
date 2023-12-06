import React, { useState } from "react"

const Card = ({ heading, subheading, according }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <h1>{heading}</h1>
      <h6>{subheading}</h6>
     { toggle && <p>{according}</p>}
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "hide" : "show"}
      </button>
    </div>
  )
}

export default Card
