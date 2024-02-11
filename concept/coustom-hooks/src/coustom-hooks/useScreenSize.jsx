import { useState, useEffect } from "react"

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState()
  //? run first time only
  useEffect(() => {
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize) //? event in browser -> track resize event if occur run function
    return () => {
      //* -> if component unmount --
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])
  const checkScreenSize = () => {
    if (window.innerWidth > 1024) {
      return setScreenSize("xlg")
    }
    if (window.innerWidth > 992) {
      return setScreenSize("large")
    }
    if (window.innerWidth < 992 && window.innerWidth > 600) {
      return setScreenSize("medium")
    }
    if (window.innerWidth < 600) {
      return setScreenSize("small")
    }
  }

  return screenSize
}
