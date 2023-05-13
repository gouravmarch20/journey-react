import React, { memo } from "react";

export const Child2 = memo(() => {
  return (
    <div>
      <h1>C2 ===={Math.random() * 10}</h1>
    </div>
  );
});
