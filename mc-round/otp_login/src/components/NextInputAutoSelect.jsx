import React , {useRef} from "react"

const NextInputAutoSelect = () => {
  const inp1 = useRef("")
  const inp2 = useRef("")

  const handleChangeInp1 = () => {
    inp2.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inp1} onChange={() => handleChangeInp1()} />
      <input type="text" ref={inp2} />

    </div>
  )
}

export default NextInputAutoSelect
