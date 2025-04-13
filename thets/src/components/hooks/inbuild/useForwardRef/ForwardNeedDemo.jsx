import React, { useState, useRef, forwardRef, useEffect } from "react";

const MyForm = React.forwardRef((props, ref) => {
  console.log("MyForm", ref);
  return (
    <div>
      <input ref={ref[0]} placeholder="Name" />
      <input ref={ref[1]} placeholder="Age" />
    </div>
  );
});

const ParentComponent = () => {
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    refs[0].current.focus(); // Focus on the first input (Name)
  }, []);

  return <MyForm ref={refs} />;
};
export default ParentComponent;
