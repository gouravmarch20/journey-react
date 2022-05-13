const storeData = {
  women: {
    jeans: {
      id: 'aj12',
      availability: [
        { id: 3, color: 'dark blue', quantity: 12, inStock: false },
        { id: 4, color: 'dark blue', quantity: 5, inStock: true },
        { id: 5, color: 'dark blue', quantity: 35, inStock: true }
      ]
    },
    purse: {
      id: 'aj32'
    }
  }
}

const result = storeData.women.jeans.availability.find(item => item.color === 'dark blue' && item.inStock)
console.log(result)
