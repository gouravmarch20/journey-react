import React, { useState } from 'react'
import explorer from './data/folderData'

const App = () => {
  const [data, setData] = useState(explorer)
  return (
    <div>App</div>
  )
}

export default App
