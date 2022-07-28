export const uniqueBrands = allProducts => {
  return [...new Set(allProducts.map(product => product.brand))]
}
export const getUnique = (allProducts, keyName) => {
  return [...new Set(allProducts.map(product => product[keyName]))]
}
