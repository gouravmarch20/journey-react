import React, { useState, useRef, forwardRef, useEffect } from "react";

// Child component with enhanced styling
const ColorInput = forwardRef((props, ref) => {
  const { value, onChange, placeholder, borderColor, wordCount } = props;

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "12px 15px",
          border: `3px solid ${borderColor}`,
          borderRadius: "8px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          outline: "none",
          transition: "all 0.3s ease",
          boxShadow: `0 0 8px ${borderColor}33`,
        }}
      />
      <div
        style={{
          marginTop: "5px",
          fontSize: "14px",
          color: "#666",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <span>Words: {wordCount}</span>
        <span>Color: {borderColor}</span>
      </div>
    </div>
  );
});

// Parent component with enhanced logic
const DynamicColorInputs = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const [wordCounts, setWordCounts] = useState({ input1: 0, input2: 0 });

  // Enhanced color palette
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F06292",
    "#7986CB",
    "#9575CD",
    "#64B5F6",
    "#4DB6AC",
    "#81C784",
    "#FFD54F",
  ];

  // State for border colors with initial gradient
  const [borderColors, setBorderColors] = useState({
    input1: "#4ECDC4",
    input2: "#FF6B6B",
  });

  // Get random color from palette
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Update word count
  const updateWordCount = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  // Handle input 1 change
  const handleInput1Change = (e) => {
    const value = e.target.value;
    setInput1(value);
    const count = updateWordCount(value);
    setWordCounts((prev) => ({ ...prev, input1: count }));

    // Change color with each new word
    if (count > wordCounts.input1) {
      setBorderColors((prev) => ({ ...prev, input1: getRandomColor() }));
    }

    // Auto-focus to next input after space when reaching certain length
    if (value.length > 4 && value.endsWith(" ")) {
      input2Ref.current.focus();
    }
  };

  // Handle input 2 change
  const handleInput2Change = (e) => {
    const value = e.target.value;
    setInput2(value);
    const count = updateWordCount(value);
    setWordCounts((prev) => ({ ...prev, input2: count }));

    // Change color with each new word
    if (count > wordCounts.input2) {
      setBorderColors((prev) => ({ ...prev, input2: getRandomColor() }));
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "25px",
          fontWeight: "600",
        }}
      >
        Dynamic Color Inputs
      </h2>

      <ColorInput
        ref={input1Ref}
        value={input1}
        onChange={handleInput1Change}
        placeholder="Start typing here..."
        borderColor={borderColors.input1}
        wordCount={wordCounts.input1}
      />

      <ColorInput
        ref={input2Ref}
        value={input2}
        onChange={handleInput2Change}
        placeholder="Continue typing here..."
        borderColor={borderColors.input2}
        wordCount={wordCounts.input2}
      />

      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ marginTop: "0", color: "#555" }}>Current Colors:</h3>
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{
              backgroundColor: borderColors.input1,
              width: "50px",
              height: "50px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          ></div>
          <div
            style={{
              backgroundColor: borderColors.input2,
              width: "50px",
              height: "50px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DynamicColorInputs;
