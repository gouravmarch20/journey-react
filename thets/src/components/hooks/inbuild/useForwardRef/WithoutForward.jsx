import React, { useState, useRef, forwardRef, useEffect } from "react";

const MyForm = (props) => {
  useEffect(() => {
    // ref[0].current.focus(); // Focus on the first input (Name)
    // console.log("ref", myRef);
    console.log("ref", props.myRef);
  }, []);
  return (
    <div>
      {/* <input ref={ref[0]} placeholder="Name" />
      <input ref={ref[1]} placeholder="Age" /> */}
    </div>
  );
};

const ParentComponent = () => {
  const refs = [useRef(null), useRef(null)];

  return <MyForm myRef={refs} />;
};
export default ParentComponent;
