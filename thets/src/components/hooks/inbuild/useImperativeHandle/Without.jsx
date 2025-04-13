import React, { useRef } from "react";

// ✅ Child input component (pure and dumb)
const TextInput = ({
  inputRef,
  handleFocus,
  handleClear,
  handleLog,
  onChange,
}) => {
  return (
    <>
      <input
        ref={inputRef}
        className="border"
        defaultValue="Hello World"
        onChange={onChange}
      />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleLog}>Log Value</button>
    </>
  );
};

// ✅ Parent controls everything
const Parent = () => {
  const inputRef = useRef();

  const handleClear = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleLog = () => {
    console.log("Value:", inputRef.current?.value);
  };

  return (
    <div>
      <TextInput
        inputRef={inputRef}
        handleFocus={handleFocus}
        handleClear={handleClear}
        handleLog={handleLog}
      />
    </div>
  );
};

export default Parent;
