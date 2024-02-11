import React, { useState } from "react"
import "./App.css"
const App = () => {
  const [star, setStar] = useState(0)
  const [starHover, setStarHover] = useState(0)
  return (
    <div>
      {[...new Array(5)].map((_, index) => (
        <span
          style={{ fontSize: "24px" }}
          onClick={() => setStar(index + 1)}
          onMouseEnter={() => setStarHover(index + 1)}
          onMouseLeave={() => setStarHover(0)}
          className={`${index + 1 <= star ? "yellow" : "default"}  ${
            index + 1 <= starHover ? "yellow" : "default"
          }  `}
        >
          &#9733;
        </span>
      ))}
      <h2>rating : {star}</h2>
      <h2>onHoverRating : {starHover}</h2>
    </div>
  )
}

export default App
