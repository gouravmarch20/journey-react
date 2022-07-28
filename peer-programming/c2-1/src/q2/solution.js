//! m1 : forgot object mai require spread oprertaor to asign value
const arr = [
  { category: 'men', color: 'blue', quantity: 5, item: 'jeans' },
  { category: 'women', color: 'blue', quantity: 5, item: 'jeans' },
  { category: 'women', color: 'blue', quantity: 6, item: 'tshirt' },
  { category: 'men', color: 'blue', quantity: 2, item: 'tshirt' }
]
const output = arr.reduce(
  (acc, curr) => {
    if (curr.item === 'jeans') {
      return { ...acc, jeansQuantity: acc.jeansQuantity + curr.quantity }
    }
    if (curr.item === 'tshirt') {
      return { ...acc, tshirtQuantity: acc.tshirtQuantity + curr.quantity }
    }
    return acc
  },
  {
    jeansQuantity: 0,
    tshirtQuantity: 0
  }
)
console.log(output)
