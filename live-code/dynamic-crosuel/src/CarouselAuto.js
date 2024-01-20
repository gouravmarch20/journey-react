import React, { useState, useEffect } from "react"
import { data } from "./data"
const CarouselAuto = () => {
  const [activeImg, setActiveImg] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) =>
        prev === data.length - 1 ? 0 : prev + (1 % data.length)
      )
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleRightClick = () => {
    if (activeImg === data.length - 1) {
      setActiveImg(0)
      return
    }
    setActiveImg((prev) => prev + 1)
  }
  const handleLeftClick = () => {
    if (activeImg === 0) {
      setActiveImg(data.length - 1)
      return
    }
    setActiveImg((prev) => prev - 1)
  }
  return (
    <div className="flex items-center	justify-center	  bg-red-400">
      <div className="mr-4" onClick={handleLeftClick}>
        left
      </div>
      <div>
        <img
          src={data[activeImg]}
          className="w-[500px] h-[500px] object-contain	"
        />
      </div>
      <div className="ml-4" onClick={handleRightClick}>
        right
      </div>
    </div>
  )
}

export default CarouselAuto
