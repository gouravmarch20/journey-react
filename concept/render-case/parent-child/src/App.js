import React, { useEffect } from 'react'
import { useFetchHook } from './hooks'
import './App.css';

const App = () => {

  const { products, loading, err } = useFetchHook('https://jsonplaceholder.typicode.com/users')
  useEffect(() => {
  }, [])


  return (
    <div>
   
      {
        err && <h1> an api errror </h1>
      }
      {
        loading ? <h1> loading </h1> : (
          products?.length && products.map((product) => (<p>
            {product.name} , {product.email
            }
          </p>))
        )

      }
    </div>
  )
}


export default App;
