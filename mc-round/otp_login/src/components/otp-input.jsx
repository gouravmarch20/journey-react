/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""))
  const inputRefs = useRef([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (index, e) => {
    const value = e.target.value
    if (isNaN(value)) return

    const newOtp = [...otp]
    // allow only one input
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    // submit trigger
    const combinedOtp = newOtp.join("")
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp)

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)

    // optional
    if (index > 0 && !otp[index - 1]) {
      console.log("00");
      
      inputRefs.current[otp.indexOf("" || 0)].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    console.log("---");
    
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus()
    }
  }

  return (
    <div>
      <h1>{count}</h1>

      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        onclick
      </button>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        )
      })}

    </div>
  )
}

export default OtpInput
