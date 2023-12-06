import React from 'react'
import   './App.css'
import LiveChat from './components/LiveChat'
const App = () => {
  return (
    <div>
      <h1 className='font-sans text-4xl	 text-green-700 bg-red-50'>hello</h1>

      <div className="w-7/12 ">
        <LiveChat />
      </div>
    </div>
  )
}

export default App