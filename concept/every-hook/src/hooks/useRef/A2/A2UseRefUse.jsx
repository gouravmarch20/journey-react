import React, { useState, useRef } from "react";

export const A2UseRefUse = () => {
  const [myData, setMyData] = useState("");
  const inputRef = useRef(null);
  const changeStyle = () => {
    //  console.log(inputRef);
    console.log(inputRef.current);
    inputRef.current.style.backgroundColor = "lightgreen";
    inputRef.current.style.padding = "1rem 4px 6px 8px";
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        name=""
        id=""
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>submit </button>
    </div>
  );
};
