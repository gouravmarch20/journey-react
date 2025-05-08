import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">{formatTime(time)}</h1>
      <div className="flex gap-6">
        <button
          onClick={startTimer}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
