import React, { useEffect, useRef, useState } from "react";
// ** state change render ==> useEffect run again & update state ==> as state change render => useEffect ==> infinity loop
export const A1UseRefUse = () => {
  const [myData, setMyData] = useState("");
  const count = useRef(0);
  console.log(count);

  useEffect(() => {
   count.current = count.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>noo of time render {count.current}</p>
    </div>
  );
};
