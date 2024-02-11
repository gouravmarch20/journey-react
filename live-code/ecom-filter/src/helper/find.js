const arr = ['itc', 'irfc', 'igl']
const portfolio = [
  { brand: 'railtel' },
  { brand: 'tcs' },
  { brand: 'itc' },
  { brand: 'igl' }
]
// console.log(arr.find(a => a === 'itc'))
// const filterPortfolio = portfolio.filter(p => arr.find(a => a === p.brand))
// console.log(filterPortfolio)
const filterPortfolioOne = portfolio.filter(p => arr.includes(p.brand))
console.log(filterPortfolioOne)
