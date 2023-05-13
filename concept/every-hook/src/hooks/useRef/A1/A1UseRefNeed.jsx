import React, { useEffect, useState } from "react";
// ** state change render ==> useEffect run again & update state ==> as state change render => useEffect ==> infinity loop
export const A1UseRefNeed = () => {
  const [myData, setMyData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
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
      <p>noo of time render {count}</p>
    </div>
  );
};
