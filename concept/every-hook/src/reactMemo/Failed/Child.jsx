import React,{memo} from "react";

export const Child = memo(() => {
  return (
    <div>
      <h1>Child 1 ===={Math.random() * 10}</h1>
    </div>
  );
})
