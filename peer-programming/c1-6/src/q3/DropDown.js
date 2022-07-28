import React, { useState } from 'react'
import { initialData } from './data'
// TODO: INITAL VALUE OF DROPDOWN EDGE
const DropDown = () => {
  const [products, setProducts] = useState(initialData)
  const [productId, setProductId] = useState('')
  const [productPrice, setProductPrice] = useState('')

  const handleEdit = () => {
    const isProductAvalible = products.find(
      product => product.id === Number(productId)
    )
    if (isProductAvalible) {
      setProducts(
        products.map(product =>
          Number(productId) === product.id
            ? {
                ...product,
                price: productPrice
              }
            : product
        )
      )
      setProductPrice('')
    }
  }
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor=''> Name </label>
        <select name='' id='' onChange={e => setProductId(e.target.value)}>
          {initialData.map(data => (
            <option key={data.id} value={data.id}>{data.item}</option>
          ))}
        </select>
        <div>
          <label htmlFor=''>
            price
            <input
              type='text'
              name=''
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleEdit}>Edit </button>
      </form>
      {products.map(product => {
        const { price, id, item } = product
        return (
          <div key={id}>
            <p>{price}</p>
            {/* <p>{id}</p> */}
            <p>{item}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default DropDown
