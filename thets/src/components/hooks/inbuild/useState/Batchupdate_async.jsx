"use client";
import React, { useState } from "react";
import Button from "@/common/Button";
const State = () => {
  const [count, setCount] = useState(0);
  const [countO, setCountO] = useState(0);

  const handlClick = () => {
    for (let i = 0; i < 4; i++) {
      setCount((prev) => prev + 1);
    }

    for (let i = 0; i < 4; i++) {
      console.log(countO + 1);

      setCountO(countO + 1);
    }
  };

  return (
    <div>
      <h1>count {count} </h1>
      <h1>count {countO} </h1>
      <h2 className="p-4 bg-indigo-400">
        {" "}
        state update async , batch update in both .... but by prev ... it latest
        one mai add & update{" "}
      </h2>

      <Button onClick={handlClick}>click</Button>
    </div>
  );
};

export default State;
