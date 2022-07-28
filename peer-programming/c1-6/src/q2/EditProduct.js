import React, { useState } from 'react'
import { initialData } from './data'
const EditProduct = () => {
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
      setProductId('')
    }
  }
  return (
    <>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor=''>
            id
            <input
              type='text'
              name=''
              value={productId}
              onChange={e => setProductId(e.target.value)}
            />
          </label>
          <label htmlFor=''>
            price
            <input
              type='text'
              name=''
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
          </label>
          <button onClick={handleEdit}>Edit </button>
        </form>
      </div>

      {products.map(product => {
        const { price, id, item } = product
        return (
          <div key={id}>
            <p>{price}</p>
            <p>{id}</p>
            <p>{item}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default EditProduct
