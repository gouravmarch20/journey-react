import React, { useState, useMemo, useEffect } from "react"
import "./a1.css"
export const A1Use = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const noRender = useMemo(() => {
    return (
      <div>
        <h1>
          {" "}
          {name} - render counter <span className="useMemo-h1"> {count}</span>
        </h1>
        <h1 className="">
          {" "}
          if useMemo depany change the only render it code {}
        </h1>
      </div>
    )
  }, [name])
  useEffect(() => {
    console.log("useEffect")
  }, [count])

  const handleBothState = () => {
    setName((prev) => (prev === "goku" ? "vegeta" : "goku"))

  }
  return (
    <div>
      {/* limit render */}
      {noRender}
      {/*  */}
      {name}
      <h1>Render always {count} </h1>

      <button onClick={() => setCount((prev) => prev + 1)}>useeffect on count run</button>
      <button onClick={() => handleBothState()}>
        usememo on name change run{" "}
      </button>
    </div>
  )
}
