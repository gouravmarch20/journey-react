import { useEffect, useState } from "react"
import { useEffectPolyfill } from "../../coustom-hooks"

export function CounterUseEffectPolyfill() {
  const [count, setCount] = useState(0)

  useEffectPolyfill(() => {
    return () => {
      console.log("cleanup")
    }
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
