import React, { useState, useRef, useEffect } from "react";
const ProgressBar = ({ handleActiveStoryTimer, isActive }) => {
  const DURATION = 3;
  const [timerCnt, setTimerCnt] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setTimerCnt(0);

      return;
    }
    timerRef.current = setInterval(() => {
      setTimerCnt((prev) => {
        if (prev >= DURATION) {
          setTimeout(() => {
            handleActiveStoryTimer();
          }, 0);

          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isActive]);
  const getPercent = () => {
    return (timerCnt * 100) / DURATION;
  };

  return (
    <div className="relative w-full h-6 bg-gray-300 rounded p-2 mb-6">
      <div
        className={`${
          isActive ? "bg-teal-500" : "bg-grey-500"
        } h-full  absolute top-0  z-10 ml-[-10px] transition-all duration-300  text-center`}
        style={{ width: `${isActive ? getPercent() + 1 : 100}%` }}
      >
        <span className="mt-[-12px]">
          {" "}
          {isActive ? getPercent().toFixed(0) : ""}{" "}
        </span>
      </div>
    </div>
  );
};
export default ProgressBar;
