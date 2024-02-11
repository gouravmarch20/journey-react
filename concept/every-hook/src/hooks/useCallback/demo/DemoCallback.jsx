import React, { useState, useMemo, useEffect } from "react";
import { Child } from "./Child";
import { useCallback } from "react";
export const DemoCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState([]);
  const handleState = () => {
    //
    setCounter1(counter1 + 1);
  };
  // printName not change but still run child react memo run ==> because function  re-memory allocation in each render
  //? so by usecallback react memo knew it's same function & no re-render
  // ? useEffect => ref issue & can't return value so can use useeffect because must need to return cache value

  const printName = () => {
    return "gourav";
  };

  const printMem = useCallback(() => {
    return printName();
  }, [counter2]);

  return (
    <div>
      <Child printName={printMem} counter2={counter2} />
      <h3>{counter1}</h3>
      <button onClick={() => handleState()}>conter1 + </button>
    </div>
  );
};
