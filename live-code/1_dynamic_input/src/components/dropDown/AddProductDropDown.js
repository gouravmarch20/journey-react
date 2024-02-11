import React, { useState } from "react"
import { productsData } from "../../data/fruitsData"

const AddProductDropDown = () => {
  const [products, setProducts] = useState(productsData)
  const [inputText, setInputText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Fruit")
  const handleAddCategory = () => {
    if (inputText !== "" && inputText !== " ") {
      setProducts((prev) => [...prev, { category: inputText, products: [] }])
      setInputText("")
    }
  }
  const handleAddProduct = () => {
    const newProducts = products.map((product) =>
      product.category === selectedCategory
        ? { ...product, products: [...product.products, inputText] }
        : product
    )
    setProducts(newProducts)

    console.log(newProducts)
  }
  return (
    <div style={{
        border : "2px dashed blue",
        padding : "1rem"
    }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name=""
          id=""
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {products.map((product) => {
            return (
              <option key={Math.random()} value={product.category}>
                {product.category}
              </option>
            )
          })}
        </select>
        <button onClick={handleAddProduct}>Add Product </button>
        <button onClick={handleAddCategory}>Add Category </button>
      </form>
      {products &&
        products.map((product) => {
          const { category, products: productList } = product
          return (
            <div key={Math.random()}>
              <h2>{category}</h2>
              {productList &&
                productList.length >= 1 &&
                productList?.map((productName) => {
                  return <p key={Math.random()}>{productName}</p>
                })}
            </div>
          )
        })}
    </div>
  )
}

export default AddProductDropDown
