"use client";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";

const LayoutEffectExample = () => {
  const [rect, setRect] = useState(null);
  const [layoutEffectCalled, setLayoutEffectCalled] = useState(false);
  const [effectCalled, setEffectCalled] = useState(false);
  const divRef = useRef(null);

  // Use useLayoutEffect to measure the div's size before the browser paints
  useLayoutEffect(() => {
    console.log("useLayoutEffect: Called - starts before the paint");
    const div = divRef.current;
    const { width, height } = div.getBoundingClientRect();
    setRect({ width, height });
    setLayoutEffectCalled(true); // Mark when layout effect has run
    console.log("useLayoutEffect: Dimensions measured", { width, height });
  }, []);

  // Use useEffect to measure the div's size after the browser paints
  useEffect(() => {
    console.log("useEffect: Called - after the paint");
    const div = divRef.current;
    const { width, height } = div.getBoundingClientRect();
    setEffectCalled(true); // Mark when effect has run
    console.log("useEffect: Dimensions measured", { width, height });
  }, []);

  console.log("Component Render: Effect Called =", effectCalled);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          background: "lightblue",
          marginBottom: "20px",
        }}
      >
        <p>
          Box dimensions:{" "}
          {rect ? `${rect.width} x ${rect.height}` : "Measuring..."}
        </p>
      </div>

      <div>
        <p>
          <strong>useLayoutEffect Status:</strong>{" "}
          {layoutEffectCalled ? "Called" : "Not Called Yet"}
        </p>
        <p>
          <strong>useEffect Status:</strong>{" "}
          {effectCalled ? "Called" : "Not Called Yet"}
        </p>
      </div>
        
        <p>
        <strong>Notice:</strong> You will see the `useLayoutEffect` status
        change before `useEffect` because `useLayoutEffect` runs synchronously,
        while `useEffect` runs after the paint.
      </p>
    </div>
  );
};

export default LayoutEffectExample;
