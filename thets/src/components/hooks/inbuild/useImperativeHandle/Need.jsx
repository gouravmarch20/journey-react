import React, { useRef, useImperativeHandle, forwardRef } from "react";

// ✅ Child input component using forwardRef
const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Exposing methods to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus(); // Focus the input
    },
    clear: () => {
      inputRef.current.value = ""; // Clear the input
    },
    logValue: () => {
      console.log("Value:", inputRef.current?.value); // Log the input value
    },
  }));

  return (
    <>
      <input
        ref={inputRef}
        className="border"
        defaultValue="Hello World"
        onChange={props.onChange}
      />
      <button onClick={() => ref.current?.focus()}>Focus</button>
      <button onClick={() => ref.current?.clear()}>Clear</button>
      <button onClick={() => ref.current?.logValue()}>Log Value</button>
    </>
  );
});

// ✅ Parent component controls everything
const Parent = () => {
  const textInputRef = useRef();

  // You can now control everything from the parent using the ref
  const handleChange = (e) => {
    console.log("Input Changed: ", e.target.value);
  };

  return (
    <div>
      <TextInput ref={textInputRef} onChange={handleChange} />
      {/* These buttons are just to test actions directly from the parent */}
      <button onClick={() => textInputRef.current?.focus()}>Focus from Parent</button>
      <button onClick={() => textInputRef.current?.clear()}>Clear from Parent</button>
      <button onClick={() => textInputRef.current?.logValue()}>Log Value from Parent</button>
    </div>
  );
};

export default Parent;
