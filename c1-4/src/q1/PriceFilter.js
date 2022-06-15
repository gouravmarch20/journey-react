import React, { useState } from 'react'
import { data } from './data'
const PriceFilter = () => {
  const [upperLimit, setUpperLimit] = useState(100)
  const [lowerLimit, setLowerLimit] = useState(0)
  const [priceDataFilter, setPriceDataFilter] = useState(data)

  return (
    <div>
      <input
        type='number'
        placeholder='lowerLimit'
        value={lowerLimit}
        onChange={e => setLowerLimit(e.target.value)}
      />
      <input
        type='number'
        placeholder='upperLimit'
        value={upperLimit}
        onChange={e => setUpperLimit(e.target.value)}
      />
      {priceDataFilter.map(priceData => {
        const { price, item, id } = priceData

        if (price >= lowerLimit && price <= upperLimit) {
          return (
            <div key={id}>
              <h3>
                {item} {price}
              </h3>
            </div>
          )
        }
      })}
    </div>
  )
}

export default PriceFilter
