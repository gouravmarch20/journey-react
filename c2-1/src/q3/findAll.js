// m1 : reduce mai using object chaning --> acc.price here acc+ is case
//m2 : intial state ==> quantity : 5 wrong way
const storeData = {
  women: {
    jeans: {
      id: 'aj12',
      availability: [
        { id: 3, color: 'dark blue', quantity: 12, inStock: false },
        { id: 4, color: 'dark blue', quantity: 5, inStock: true },
        { id: 4, color: 'dark blue', quantity: 15, inStock: true },
        { id: 5, color: 'dark blue', quantity: 35, inStock: false }
      ]
    },
    purse: {
      id: 'aj32'
    }
  }
}

const result = storeData.women.jeans.availability.filter(item => {
  if (item.color === 'dark blue' && item.inStock) {
    return item
  }
})
console.log(
  result.reduce((acc, curr) => {
    acc = acc + curr.quantity
    return acc
  }, (quantity = 0))
)
