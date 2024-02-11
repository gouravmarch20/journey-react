import React, { useState } from "react"

const brands1 = [
  { id: "0a", brandName: "puma" },
  { id: "0b", brandName: "adiddas" },
  { id: "0b", brandName: "adiddas" },
  { id: "0b", brandName: "adiddas" },
  { id: "0c", brandName: "wildcraft" },
  { id: "0d", brandName: "levis" },
  { id: "0e", brandName: "celio" },
]

const SimpleSearch = () => {
  const brandData = [...new Set(brands1.map((brand) => brand.brandName))]

  const [filterBrand, setFilterBrand] = useState(brandData)
  const handleBrandSearch = (value) => {
    const tempBrandFilter = brandData.filter((brand) => brand.includes(value))
    setFilterBrand(tempBrandFilter)
  }
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "1rem",
      }}
    >
      <input type="text" onChange={(e) => handleBrandSearch(e.target.value)} />
      <ul>
        {filterBrand.map((brandName, index) => {
          return (
            <div key={index}>
              <h3>{brandName}</h3>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default SimpleSearch
