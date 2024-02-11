import React, { useState, useMemo } from "react";
import { Child } from "./Child";
export const ReactMemoSuccess = () => {
  const [counter1, setCounter1] = useState(0);
  const handleState = () => {
    //
    setCounter1(counter1 + 1);
  };

  return (
    <div>
      <Child />
      <h3>{counter1}</h3>
      <button onClick={() => handleState()}>conter1 + </button>
    </div>
  );
};
