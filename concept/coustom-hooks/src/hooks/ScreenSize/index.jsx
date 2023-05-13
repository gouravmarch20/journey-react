import React, { useEffect } from "react";
import { useScreenSize } from "../../coustom-hooks/useScreenSize";

export const ScreenSize = () => {
  const screenType = useScreenSize();

  return (
    <div>
      <h1>dfs</h1>
      <h1>
        We are at screen{" "}
        <span
          style={{
            background: "red",
          }}
        >
          {screenType}
        </span>
      </h1>
    </div>
  );
};
