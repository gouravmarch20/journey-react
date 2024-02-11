import React, { useState, useMemo } from "react";
import { Child } from "./Child";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { Child4 } from "./Child4";
export const ReactMemoDeep = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState([]);
  const [counter3, setCounter3] = useState(5);
  const handleState = () => {
    setCounter1(counter1 + 1);
  };
  const hasName = () => {
    console.log("hello gourav");
  };
  const handleRefData = () => {
    setCounter2([]);//useMemo --> array mai fail [] != []
  };
  const handlePrimitiveData = () => {
    setCounter3(5);//useMemo --> primitive mai pass 5 == 5 so no render
  };

  return (
    <div>
      <Child hasName={hasName} />
      <Child2 counter2={counter2} />
      <Child3 counter3={counter3} />
      <Child4 hasName={hasName}   />
      <button onClick={() => handleState()}>conter1 + </button>
      <button onClick={() => handleRefData()}>ref change + </button>
      <button onClick={() => handlePrimitiveData()}>primitive 3 </button>
    </div>
  );
};
