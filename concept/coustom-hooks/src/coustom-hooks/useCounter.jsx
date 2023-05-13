import { useState, useEffect } from "react";

export const useCounterHook = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };

  return [value, increment, decrement, reset];
};
