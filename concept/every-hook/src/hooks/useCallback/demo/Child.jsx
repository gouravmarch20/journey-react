import React, { memo } from "react";

export const Child = memo(({ printName, printMem }) => {
  return (
    <div>
      <h1>child - {Math.random() * 10}</h1>
      <p>{printName} fdsa</p>
    </div>
  );
});
