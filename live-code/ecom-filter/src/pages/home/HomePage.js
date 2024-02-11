import React from 'react'
import { FilterProduct, ProductList } from '../../components'
import './homepage.css'
export const HomePage = () => {
  return (
    <div className='d-flex-row '>
      <div className='home-filterProduct'>
        <FilterProduct />
      </div>
      <div className='home-productList'>
        <ProductList />
      </div>
    </div>
  )
}
