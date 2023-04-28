import React, { useEffect } from 'react'
import { useFetchHook } from './hooks'
import './App.css';

const App = () => {
  console.log("11");

  const { products, loading, err } = useFetchHook('https://jsonplaceholder.typicode.com/users')
  useEffect(() => {
    console.log('166');
  }, [])


  return (
    <div>
      {
        console.log("12")

      }
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
      {
        console.log("13")

      }


    </div>
  )
}


export default App;
