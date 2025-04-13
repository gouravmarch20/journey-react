import React from "react";
import WithCb from "./WithCb";
import WithoutCb from "./WithoutCb";

const Callback = () => {
  return (
    <div>
      <h1 className="text-fuchsia-800 text-lg font-extrabold ">
        {" "}
        usecall demo
      </h1>
      {/* <WithCb /> */}
      <WithoutCb />
    </div>
  );
};

export default Callback;
