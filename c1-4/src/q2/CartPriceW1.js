// m1 : setProducts(prod => product.map) avoid ==> callback function mai execute
//m2 : reducer mai return acc value
import React, { useState, useEffect } from 'react'
import { data } from './data'

const CartPriceW1 = () => {
  const [products, setProducts] = useState(data)
  const [price, setPrice] = useState(0)
  useEffect(() => {
    setPrice(
      products.reduce((acc, curr) => {
        const { price, quantity } = curr
        return (acc = acc + price * quantity)
      }, 0)
    )
  }, [products])

  const handleQuantityIncrementDecrement = (id, type) => {
    const getProduct = products.find(product => product.id === id)
    switch (type) {
      case 'INCREMENT': {
        setProducts(product =>
          product.map(product =>
            product.id === id
              ? { ...product, quantity: product.quantity++ }
              : product
          )
        )
      }
      case 'DECREMENT': {
        setProducts(product =>
          product.map(product =>
            product.id === id
              ? { ...product, quantity: product.quantity-- }
              : product
          )
        )
      }

      //   case 'DECREMENT':
      //     break

      default:
        break
    }
  }
  return (
    <div>
      <h1>
        {' '}
        Pay now --
        {price}
      </h1>
      {products.map(product => {
        const { quantity, price, item, id } = product
        return (
          <div key={id}>
            <p>{item}</p>
            <p>{quantity}</p>
            <button
              onClick={() => handleQuantityIncrementDecrement(id, 'INCREMENT')}
            >
              +
            </button>
            <button
              onClick={() => handleQuantityIncrementDecrement(id, 'DECREMENT')}
            >
              -
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default CartPriceW1
