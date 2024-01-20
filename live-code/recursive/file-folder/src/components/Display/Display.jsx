import React from "react"
import explorer from "../../data/folderData"
import Folder from './Folder'

const Display = () => {
  
  return (
    <div className="App">
    <Folder  explorer={explorer} />
  </div>
  )
}

export default Display
