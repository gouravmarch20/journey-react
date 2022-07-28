import React, { useState } from 'react'
// e preventDefalt
const AddCar = ({ setCars }) => {
  const [car, setCar] = useState({
    brand: '',
    make: '',
    model: ''
  })
  const addCar = e => {
    e.preventDefault()
    if (car.brand && car.make && car.model) {
      console.log(car)
      setCars(cars => cars.concat(car))
      setCar({ brand: '', make: '', model: '' })
    }
  }
  return (
    <div>
      {' '}
      <input
        type='text'
        name=''
        id=''
        onChange={e => setCar(car => ({ ...car, brand: e.target.value }))}
      />
      <input
        type='text'
        name=''
        id=''
        onChange={e => setCar(car => ({ ...car, make: e.target.value }))}
      />
      <input
        type='text'
        name=''
        id=''
        onChange={e => setCar(car => ({ ...car, model: e.target.value }))}
      />
      <button onClick={addCar}>sumit</button>
    </div>
  )
}

export default AddCar
