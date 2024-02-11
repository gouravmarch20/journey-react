export const filterProductUtils = (allProducts, filterState) => {
  let tempFilterProduct = [...allProducts]
  const { gender, sizes, brands, maxPrice } = filterState
  console.log(typeof maxPrice)
  if (brands.length !== 0) {
    tempFilterProduct = tempFilterProduct.filter(product =>
      brands.includes(product.brand)
    )
  }
  if (sizes.length !== 0) {
    tempFilterProduct = tempFilterProduct.filter(product => {
      console.log(sizes.includes(product.size))
      return sizes.includes(product.size)
    })
  }
  if (gender !== '') {
    tempFilterProduct = tempFilterProduct.filter(product =>
      product.idealFor.includes(gender)
    )
  }
  if (maxPrice) {
    console.log(maxPrice)
    tempFilterProduct = tempFilterProduct.filter(
      product => product.price <= parseInt(maxPrice)
    )
  }
  return tempFilterProduct
}
