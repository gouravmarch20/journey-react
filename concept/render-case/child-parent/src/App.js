import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Child from './Child'


const App = () => {
  useEffect(() => {
    console.log('11');
  }, [])

  return (
    <div>
      {console.log(12)}
      <Child />
      {console.log(13)}

    </div>
  )
}


export default App;
