// f1 : e.target.name
//f2 : [name] -> dynamic key
//f3 : input field mai name attibute
import React, { useState } from 'react'
import { data } from './data'
const A2 = () => {
  const [carList, setCarList] = useState(data)
  const [userData, setUserData] = useState({})
  const handleChange = e => {
    const value = e.target.value
    const name = e.target.name
    setUserData(prev => ({ ...prev, [name]: value }))
  }
  console.log(userData)
  const sumitHandler = e => {
    e.preventDefault()
    setUserData(prev => (prev.id = Math.random()))
    setCarList(prev => [...prev, userData])
    setUserData(prev => ({ ...prev, brand: '', make: '', model: '' }))
  }
  return (
    <div>
      <form action=''>
        <input
          type='text'
          placeholder='brand'
          name='brand'
          value={userData.brand}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='make'
          name='make'
          value={userData.make}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          value={userData.model}
          placeholder='model'
          name='model'
          onChange={e => handleChange(e)}
        />
        <button onClick={sumitHandler}>submit</button>
      </form>
      <hr />
      {carList &&
        carList.map(list => (
          <div key={list.id}>
            <p>{list.brand}</p>
            <p>{list.make}</p>
            <p>{list.model}</p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default A2
