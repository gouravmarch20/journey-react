import React, { useState, useEffect } from 'react';

const ThrottleExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    if (!isThrottled) {
      // Your function logic goes here (e.g., API call, state update)
      console.log('Throttled function called with input:', inputValue);

      // Set the throttling flag to true
      setIsThrottled(true);

      // Reset the throttling flag after a specified interval (e.g., 500 milliseconds)
      setTimeout(() => {
        setIsThrottled(false);
      }, 500);
    }
  }, [inputValue, isThrottled]);

  const handleInputChange = (e) => {
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

export default ThrottleExample;
