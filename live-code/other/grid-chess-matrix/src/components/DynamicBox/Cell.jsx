import React from "react"

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "dynamicBox__cell dynamicBox__cell-activated" : "dynamicBox__cell"}
    />
  )
}

export default Cell
