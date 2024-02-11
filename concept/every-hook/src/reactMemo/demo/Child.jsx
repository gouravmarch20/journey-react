import React, { memo } from "react"

export const Child = memo(() => {
  console.log("child render 1st time only")

  return <div>Child {Math.random() * 10}</div>
})

