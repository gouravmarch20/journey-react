import React, { useState } from "react"

const Card = ({ heading, subheading, according, isVisible, setShowConfig }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <h6>{subheading}</h6>
      {isVisible && <p>{according}</p>}
      <button onClick={() => setShowConfig()}>
        {isVisible ? "hide" : "show"}
      </button>
    </div>
  )
}

export default Card
