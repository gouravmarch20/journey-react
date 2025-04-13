"use client";
import Button from "@/common/Button";
import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    if (!inputRef.current) {
      console.warn("Input ref is not attached.");
      return;
    }

    console.log("📦 Ref Object:", inputRef);
    console.log("📍 DOM Element:", inputRef.current);

    // 🔁 Step 1: Start from the input element itself
    let proto = inputRef.current;
    const allMethods = new Set();

    // 🔁 Step 2: Walk up the prototype chain
    // This includes HTMLInputElement → HTMLElement → Element → Node → EventTarget → Object
    while (proto) {
      // Step 3: Get all properties (including non-enumerable ones)
      const props = Object.getOwnPropertyNames(proto);

      props.forEach((prop) => {
        // Step 4: Check if the property is a function (i.e. a method)
        if (typeof inputRef.current[prop] === "function") {
          allMethods.add(prop); // Store it in a Set to avoid duplicates
        }
      });

      // Step 5: Move up to the next prototype in the chain
      proto = Object.getPrototypeOf(proto);
      console.log("⬆️ Next prototype:", proto);
    }

    // ✅ Convert Set to array and sort for readability
    const sortedMethods = [...allMethods].sort();
    console.log("🧠 All available DOM methods:", sortedMethods);

    // ✅ Apply focus as a demo of using one of those methods
    inputRef.current.focus();
  };

  return (
    <div className="p-4 space-y-4">
      <input type="text" ref={inputRef} className="border p-2 rounded" />
      <Button onClick={handleRef}>Focus & Show Methods</Button>
    </div>
  );
};

export default Ref;
