

import React, { useEffect } from 'react'
import Child from './components/Child'
import ChildOne from './components/ChildOne'


const App = () => {
  useEffect(() => {
    console.log('11');
  }, [])

  return (
    <div>
      {console.log(12)}
      <Child />
      <ChildOne />
      {/*  */}
      {console.log(13)}

    </div>
  )
}


export default App;
