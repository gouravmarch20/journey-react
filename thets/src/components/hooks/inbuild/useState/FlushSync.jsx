"use client";
import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";
import Button from "@/common/Button";

const FlushSyncDemo = () => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  const handleClick = () => {
    // 🔁 Without flushSync — the div isn't in the DOM yet!
    // setShow(true);
    // boxRef.current?.scrollIntoView({ behavior: "smooth" });

    // ✅ With flushSync
    flushSync(() => {
      setShow(true); // 🔥 This state update is NOT batched — it's applied immediately.
    });
    boxRef.current?.scrollIntoView({ behavior: "smooth" }); // works!
  };

  return (
    <div
      style={{ padding: "2rem" }}
      className={`${show ? "h-[200vh]" : "h-[90vh]"}`}
    >
      <Button onClick={handleClick}>
        Show Box dobule the height & Scroll to it{" "}
      </Button>
      <div style={{ height: "100%" }} />
      {show && (
        <div
          ref={boxRef}
          style={{
            height: "100px",
            background: "lightgreen",
            padding: "1rem",
          }}
        >
          I just appeared! 🎉
        </div>
      )}
    </div>
  );
};

export default FlushSyncDemo;
