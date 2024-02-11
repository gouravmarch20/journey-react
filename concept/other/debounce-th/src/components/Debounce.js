import React, { useState, useEffect } from 'react';

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Set up a timer for debouncing
    const debounceTimer = setTimeout(() => {
      // Your function logic goes here (e.g., API call, state update)
      console.log('Debounced function called with input:', inputValue);
    }, 500); // Adjust the delay as needed (e.g., 500 milliseconds)

    // Clear the previous timer on every input change
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (e) => {
    // Update the input value on every change
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Type something..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default DebounceExample;
