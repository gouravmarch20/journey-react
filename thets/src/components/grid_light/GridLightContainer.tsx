"use client";
import React from "react";
import Demo from "./Demo";
import GridLight from "./GridLight";

const GridLightContainer = () => {
  return (
    <div>
      <Demo size={5} />
      <GridLight />
    </div>
  );
};

export default GridLightContainer;
