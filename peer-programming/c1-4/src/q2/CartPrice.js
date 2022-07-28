// l1 : add price to db
// l2: map see iterate each item & update the same id item --> it return new array almost same exept same id walla --> we setState > it render count
// m1 : reducer forgot return , using += operator in reducer 
// TODO: STOP BTN AT 0 ITEM
import React, { useState, useEffect } from 'react'
import { data as initialData } from "./data";
const CartPrice = () => {
  const [cartData, setCartData] = useState(initialData)
  const [price, setPrice] = useState(0)

  const changeQuantity = (id, quantity) => {

    setCartData(
        cartData.map(item => (item.id === id ? { ...item, quantity } : item))
    )
  }
  useEffect(() => {
    // setTotal(data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));

    setPrice(
      cartData.reduce((acc, curr) => (acc + curr.price * curr.quantity), 0)
    )
  }, [cartData])

  return (
    <div>
      <div>
        {cartData.map(item => (
          <div key={item.id}>
            <div>
              <span>{item.item}</span>
              <span>{item.price}</span>
              <button
                disabled={item.quantity <= 1}
                onClick={() => changeQuantity(item.id, item.quantity - 1)}
              >
                {' '}
                -
              </button>
              <span>{item.quantity }</span>

              <button
                onClick={() => changeQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1>Total - {price}</h1>
    </div>
  )
}

export default CartPrice
