import React from 'react'
import { data } from '../../backend/data'
import './css/productList.css'
import { getSortedProductHelper } from '../../helper/getSortedProductHelper'
import { filterProductUtils } from '../../helper/filterProductUtils'
import { useFilter } from '../../context/FilterContext'

export const ProductList = () => {
  const { filterState } = useFilter()
  const sortedProduct = getSortedProductHelper(data, filterState)
  const filteredProduct = filterProductUtils(sortedProduct, filterState)

  return (
    <div className='productList'>
      {filteredProduct &&
        filteredProduct.map(product => {
          const {
            uuid,
            _id,
            product: productName,
            productImage,
            price,
            brand,
            size,
            idealFor
          } = product

          return (
            <div key={_id} className=''>
              <img
                className='img-responsive '
                src={productImage}
                alt='not avalible'
              />
              <div className='product'>
                <p>{price}</p>
                <p>{brand}</p>
                <p>{size}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
