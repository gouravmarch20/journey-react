import React, { useState } from 'react'
// brands data structure
const brands1 = [
  { id: '0a', brandName: 'puma' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0b', brandName: 'adiddas' },
  { id: '0c', brandName: 'wildcraft' },
  { id: '0d', brandName: 'levis' },
  { id: '0e', brandName: 'celio' }
]

const QuestionOne = () => {
  // ? EACH OBJECT IS UNIQUE SO if return object can not compare by set 
  const brandData = [...new Set(brands1.map(brand => brand.brandName))]

  const [filterBrand, setFilterBrand] = useState(brandData)
  const handleBrandSearch = value => {
    const tempBrandFilter = brandData.filter(brand => brand.includes(value))
    setFilterBrand(tempBrandFilter)
  }
  return (
    <>
      <input type='text' onChange={e => handleBrandSearch(e.target.value)} />
      <ul>
        {filterBrand.map((brandName, index) => {
          return (
            <div key={index}>
              <h1>{brandName}</h1>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionOne
