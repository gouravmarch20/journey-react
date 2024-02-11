import React, { useState } from "react"
import { data } from "../data/d"
const Carousel = () => {
  const [activeImg, setActiveImg] = useState(0)
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

export default Carousel
