import React, { useState } from 'react'
import { initialData } from './data'
// m1  : ... WITHOUT NOT WORKING --> sort work like bubble sort , filter by refernce ==> so no change able to seen by react as same memory ko he is pointing
const SortPrice = () => {
  const [priceData, setPriceData] = useState(initialData)
  const sortPrice = type => {
    switch (type) {
      case 'DECENDING': {

        const tempSortDecending = [...priceData].sort(
          (productOne, productTwo) => productTwo.price - productOne.price
        )
        setPriceData(tempSortDecending)
        break
      }
      case 'ASCENDING': {
        setPriceData(
          [...priceData].sort(
            (productOne, productTwo) => productOne.price - productTwo.price
          )
        )

        console.log('as')
        break
      }

      default:
        console.log('object')
        break
    }
  }
  return (
    <div>
      {console.log(priceData)}
      <button onClick={() => sortPrice('ASCENDING')}>Ascending</button>
      <button onClick={() => sortPrice('DECENDING')}>Decending</button>
      {priceData.map(priceD => {
        const { id, item, price } = priceD
        return (
          <div key={id}>
            <p>{item}</p>
            <h4>{price}</h4>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default SortPrice
