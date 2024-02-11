import { Toggle } from "./components/Toggle"

import { useState } from "react"

function App() {
  const [isDark, setIsDark] = useState("dark")

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  )
}

export default App
