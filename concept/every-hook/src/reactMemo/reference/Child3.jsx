import React, { memo } from "react";

export const Child3 = memo(() => {
  return (
    <div>
      <h1>child 3 - {Math.random() * 10}</h1>
    </div>
  );
});
