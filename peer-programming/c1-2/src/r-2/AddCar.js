import React, { useState } from 'react'

const AddCar = ({ setCarData }) => {
  const [newCar, setNewCar] = useState({
    model: '',
    brand: '',
    make: '',
    id: null
  })
  // TODO: NOT CLEAN --> REASON 
  const resetAddCar = () => {
    setNewCar({ model: '', brand: '', make: '', id: null })
  }
  const addCar = () => {
    if (newCar.brand && newCar.model && newCar.make) {
      const tempCar = { ...newCar, id: Math.random() }
      resetAddCar()
      setCarData(prev => [...prev, tempCar])

    }
  }
  return (
    <div>
      <form action='' onClick={e => e.preventDefault()}>
        <input
          type='text'
          placeholder='model'
          onChange={e =>
            setNewCar(prev => ({ ...prev, model: e.target.value }))
          }
        />
        <input
          type='text'
          placeholder='brand'
          onChange={e =>
            setNewCar(prev => ({ ...prev, brand: e.target.value }))
          }
        />
        <input
          type='text'
          placeholder='make'
          onChange={e => setNewCar(prev => ({ ...prev, make: e.target.value }))}
        />

        <button onClick={addCar}>Sumit</button>
      </form>
    </div>
  )
}

export default AddCar
