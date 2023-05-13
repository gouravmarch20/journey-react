import React from "react";
import { useCounterHook } from "../../coustom-hooks";

export const Counter = () => {
  const [counter, increment, decrement,reset] = useCounterHook(0);
//   console.log(useCounterHook(6));//! l1 : it a function , it return state 6 if we store it

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>+</button>     

      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
