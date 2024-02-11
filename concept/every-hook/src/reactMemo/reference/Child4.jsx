import React, { memo } from "react";

export const Child4 = memo(() => {
  return (
    <div>
      <h1>child 4 - each time function address change - {Math.random() * 10}</h1>
    </div>
  );
});
