import React, { useState } from 'react'
// brands data structure
const brands1 = [
  { id: '0a', brandName: 'puma' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0c', brandName: 'wildcraft' },
  { id: '0d', brandName: 'levis' },
  { id: '0e', brandName: 'celio' }
]
const BrandFilter = () => {
  const [brandItem, setBrandItem] = useState(brands1)
  const filterBrand = e => {
    const tempFilterBrand = brands1.filter(brand =>
      brand.brandName.includes(e.target.value)
    )
    setBrandItem(tempFilterBrand)
  }
  return (
    <div>
      <input type='text' name='' id='' onChange={filterBrand} />
      {brandItem.map(b => (
        <h1 key={b.id}>{b.brandName}</h1>
      ))}
    </div>
  )
}

export default BrandFilter
