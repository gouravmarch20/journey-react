import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  const getApidetail = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    setData(data)
  }
  useEffect(() => {
    getApidetail()
  }, [])

  return (
    <div>
      <h1>di</h1>
      {data.length > 0 &&
        data.map(user => {
          return (
            <div key={user.email} >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <hr />
            </div>
          )
        })}
    </div>
  )
}

export default App
