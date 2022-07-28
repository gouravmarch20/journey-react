import { useState } from 'react'
import './styles.css'
const productsData = [
  {
    category: 'Fruit',
    products: ['Papaya', 'Watermelon']
  },
  {
    category: 'Vegetable',
    products: ['Ladyfinger', 'Brinjal']
  }
]

export default function App () {
  const [category, setCategory] = useState(['Fruit', 'Vegetable'])
  const [products, setProducts] = useState(productsData)

  const [categoryInput, setCategoryInput] = useState()
  const [productInput, setProductInput] = useState('')
  const [selectCategory, setSelectCategory] = useState('')

  const addProduct = (selectCategory, productInput) => {
    setProducts(
      products.map(item => {
        if (item.category === selectCategory) {
          return { ...item, products: [...item.products, productInput] }
        } else return item
      })
    )
  }

  const addCategory = categoryInput => {
    setCategory(prev => [...prev, categoryInput])
    setCategoryInput('')
  }

  return (
    <div className='App'>
      <div>
        <h1>Add data</h1>

        <div>
          <input
            type='text'
            value={categoryInput}
            placeholder='Add category here'
            onChange={e => {
              setCategoryInput(e.target.value)
            }}
          />
          <button onClick={() => addCategory(categoryInput)}>
            Add category
          </button>
        </div>

        <div>
          <input
            type='text'
            value={productInput}
            placeholder='Add product here'
            onChange={e => {
              setProductInput(e.target.value)
            }}
          />
          <label>
            Select category
            <select
              value={selectCategory}
              onChange={e => {
                setSelectCategory(e.target.value)
              }}
            >
              {category.map(item => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </label>
          <button onClick={() => addProduct(selectCategory, productInput)}>
            Add Product
          </button>
        </div>
      </div>

      <div>
        <h1>All Products</h1>
        {products.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.category}</h4>
              {item.products.map(item2 => (
                <p key={item2}>{item2}</p>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
