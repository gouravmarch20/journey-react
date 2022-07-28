import React, { useState } from 'react'
import AddCar from './AddCar'
import { data } from './data'

const CarR = () => {
  const [carData, setCarData] = useState(data)
  return (
    <div>
      <AddCar setCarData={setCarData} />
      {console.log(carData)}
      {carData.length >= 1 &&
        carData.map(car => {
          return (
            <div key={car.id}>
              <p>{car.brand}</p>
              <p>{car.model}</p>
              <p>{car.make}</p>
              <hr />
            </div>
          )
        })}
    </div>
  )
}

export default CarR
