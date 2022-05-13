// m1: when ever filter task 2 state --> refence sai avoid change --> real change in db reverse not posible --> always filter to main data
import React, { useState, useEffect } from 'react'
import { data } from './data'
const PriceFilter = () => {
  const [priceData, setPriceData] = useState(data)
  const [filterPrice, setFilterPrice] = useState(priceData)

  const [priceLimit, setPriceLimit] = useState({
    lowerPrice: 0,
    upperPrice: 100000
  })
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setPriceLimit(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const data = priceData.filter(
      item =>
        item.price >= priceLimit.lowerPrice &&
        item.price <= priceLimit.upperPrice
    )
    setFilterPrice(data)
  }, [priceLimit])
  return (
    <div>
      <form action=''>
        <input
          type='number'
          placeholder='lowerPrice'
          onChange={handleChange}
          name='lowerPrice'
          value={priceLimit.lowerPrice}
        />
        <input
          type='number'
          placeholder='upperPrice'
          onChange={handleChange}
          name='upperPrice'
          value={priceLimit.upperPrice}
        />
      </form>

      {filterPrice &&
        filterPrice.map(item => (
          <div key={item.id}>
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  )
}

export default PriceFilter
