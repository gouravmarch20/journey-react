import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
   console.log("use effect running");
   
    checkScreenSize();// run first time only 
    window.addEventListener("resize", checkScreenSize);//! async event trigger when resize it run   
    return () => {
      window.removeEventListener("resize", checkScreenSize);// each resize run so clean up 
    };
  }, []);
  const checkScreenSize = () => {
    // console.log("running by event listener");

    if (window.innerWidth > 1024) {
      return setScreenSize("xlg");
    }
    if (window.innerWidth > 992) {
      return setScreenSize("large");
    }
    if (window.innerWidth < 992 && window.innerWidth > 600) {
      return setScreenSize("medium");
    }
    if (window.innerWidth < 600) {
      return setScreenSize("small");
    }
  };

  return screenSize;
};
