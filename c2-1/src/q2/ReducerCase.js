import React, { useState, useEffect } from 'react'
import { arr } from './data'
const ReducerCase = () => {
  const [products, setProducts] = useState(arr)
  const [productCounter, setProductCounter] = useState({})
  useEffect(() => {
    const tempProductCounter = products.reduce(
      (acc, curr) => {
        switch (curr.item) {
          case 'jeans':
            return {
              ...acc,
              jeansQuantity: acc.jeansQuantity + curr.quantity
            }
          case 'tshirt':
            return {
              ...acc,
              tshirtQuantity: acc.tshirtQuantity + curr.quantity
            }

          default:
            return acc
        }
      },
      {
        jeansQuantity: 0,
        tshirtQuantity: 0
      }
    )
    setProductCounter(tempProductCounter)
  }, [])

  return (
    <div>
      <h1>Total jeans - {productCounter && productCounter.jeansQuantity} </h1>
      <h2>
        Total tshirtQuantity - {productCounter && productCounter.tshirtQuantity}{' '}
      </h2>
      {products.map((product, index) => {
        const { quantity } = product
        return (
          <div key={index}>
            <p>{quantity}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ReducerCase
