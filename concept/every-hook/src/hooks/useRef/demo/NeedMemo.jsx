import React, { useState } from "react";

export const NeedMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleState = () => {
    //
    setCounter1(counter1 + 1);
  };
  const handleState2 = () => {
    //
    setCounter2(counter2 + 1);
  };
  const isEven = () => {
    console.log('it running');
    
    for (let i = 0; i < 3000000000; i++) {}
    return counter1 % 2 === 0 ? "even number" : "odd number";
  };
  return (
    <div>
      <h3>
        {counter1} iseven / isOdd {isEven()}
      </h3>
      <h3>{counter2}</h3>
      <button onClick={() => handleState()}>conter1 + </button>
      <button onClick={() => handleState2()}>conter2 + </button>
    </div>
  );
};
