import React from "react";

const Arrow = ({ type, onClick }) => {
  const isLeft = type === "left";
  const positionClass = isLeft ? "left-0" : "right-0";
  const dummyIcon = isLeft ? "⬅️" : "➡️";

  return (
    <div
      onClick={onClick}
      className={`absolute w-[20px] top-0 flex justify-center items-center h-full bg-amber-700 ${positionClass} ${dummyIcon}`}
    >
      <div className="rounded-2xl w-full ">{dummyIcon}</div>
    </div>
  );
};

export default Arrow;
