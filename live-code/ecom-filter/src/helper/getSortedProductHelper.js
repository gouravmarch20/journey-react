export const getSortedProductHelper = (allProducts, filterState) => {
  const { shortByPrice } = filterState

  if (shortByPrice === 'PRICE_LOW_TO_HIGH') {
    // to spread data then only sort work require array ,
    // TODO:  no ref change in CONTEXT IS
    return [...allProducts.data].sort((a, b) => a.price - b.price)
  }
  if (shortByPrice === 'PRICE_HIGH_TO_LOW') {
    return [...allProducts.data].sort((a, b) => b.price - a.price)
  }


  return allProducts.data
}
