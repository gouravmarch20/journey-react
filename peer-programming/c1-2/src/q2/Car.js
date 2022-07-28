import React from 'react'
import { useState } from 'react'
import AddCar from './AddCar'
import { data } from './data'
const Car = () => {
  const [cars, setCars] = useState(data)
  return (
    <div>
      <AddCar setCars={setCars} />
      {cars.map(car => (
        <div key={car.id}>
          <p>{car.brand}</p>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Car
