import React from "react"
import HocRed from "../../HOC/H2Counter/HocRed"
import HocBlue from "../../HOC/H2Counter/HocBlue"
import Counter from "../../components/H2/Counter"
export const H2Demo = () => {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HocRed cmp={Counter} msg="hi" />
      <HocBlue cmp={Counter}  msg="blue" />
      <HOCBlue cmp={Counter} />
    </div>
  )
}


function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      blue <props.cmp />
    </h2>
  )
}
