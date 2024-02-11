import React from "react"
import SimpleSearch from "./pages/SimpleSearch"
import ProSearch from "./pages/ProSearch"
const App = () => {
  return (
    <div>
      <SimpleSearch />
      <div
        style={{
          border: "2px solid green",
          marginTop: ".5rem",
          padding: "1rem",
        }}
      >
        <ProSearch />
      </div>
    </div>
  )
}

export default App
