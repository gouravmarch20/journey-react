import React, { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    setInterval(() => {
      setCount1((prev) => prev + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <h1>
        The effect of
        <span
          style={{
            color: "red",
          }}
        >
          StickMode
        </span>
        each time increase by two {count}
      </h1>
      <h1>
        {" "}
        <span
          style={{
            color: "red",
          }}
        >
          StickMode
        </span>{" "}
        no clean up of 
        <span
          style={{
            color: "green",
          }}
        >
          settimeInterval 
        </span>
         twice run each time  {count1}
      </h1>
    </div>
  )
}

export default App
