const clothingStock = [
  {
    id: '0a1',
    color: 'blue',
    category: 'men shirt',
    item: 'Regular Fit Men Shirt',
    inStock: true
  },
  {
    id: '0a2',
    color: 'black',
    category: 'women top',
    item: 'Regular Fit Women Top',
    inStock: true
  },
  {
    id: '0a3',
    color: 'grey',
    category: 'men shirt',
    item: 'Slim Fit Men Shirt',
    inStock: false
  },
  {
    id: '0a4',
    color: 'grey',
    category: 'men tshirt',
    item: 'Slim Fit Men Tshirt',
    inStock: false
  },
  {
    id: '0a5',
    color: 'red',
    category: 'women top',
    item: 'Slim Fit Women Top',
    inStock: true
  },
  {
    id: '0a6',
    color: 'yellow',
    category: 'men shirt',
    item: 'Casual Fit Men Shirt',
    inStock: true
  },
  {
    id: '0a7',
    color: 'orange',
    category: 'men shirt',
    item: 'Straight Fit Men Shirt',
    inStock: true
  },
  {
    id: '0a8',
    color: 'orange',
    category: 'women top',
    item: 'Casual Fit Women Top',
    inStock: false
  }
]
let arr = []
let arr1 = []
let arr2 = []
const data1 = clothingStock.forEach(item => {
  if (item.category === 'men shirt') {
    arr.push(item.color)
  }
  if (item.category === 'men shirt' && item.inStock) {
    arr1.push(item.color)
  }
  if (item.inStock) {
    arr2.push(item)
  }
})
// console.log(new Set(arr))
// console.log(new Set(arr1))
console.log(arr2)
