import React, { useState, useMemo, useEffect } from "react";
import "./a1.css";
export const A1Use = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const noRender = useMemo(() => {
    return (
      <div>
        <h1>
          {" "}
          {name} - render counter <span className="useMemo-h1"> {count}</span>
        </h1>
        <h1 className="">
          {" "}
          if useMemo depany change the only render it code {}
        </h1>
      </div>
    );
  }, [name]);
  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  const handleBothState = () => {
    if (name === "goku") {
      setName("vegeta");
    } else {
      setName("goku");
    }
    // setCount((prev) => prev + 1);
  };
  return (
    <div>
      {/* limit render */}
      {noRender}
      {/*  */}
      {name}
      <h1>Render always {count} </h1>

      <button onClick={() => setCount((prev) => prev + 1)}>useeffect</button>
      <button onClick={() => handleBothState()}>usememo</button>
    </div>
  );
};
