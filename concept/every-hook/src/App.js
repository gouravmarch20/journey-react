import React, { useEffect } from "react"
import {
  DemoMemo,
  A1Use,
  UseCallbackA1Use,
  DomInput,
  MemoDemo,
  FixUsingMemo,
  DemoCallback,
} from "./hooks"
// import { ReactMemoSuccess } from './reactMemo/demo/ReactMemoSuccess'
// import { ReactMemoDeep } from './reactMemo/reference/ReactMemoDeep'
import "./App.css"

const App = () => {
  useEffect(() => {}, [])

  return (
    <div>
      {/* useRef  */}


      <DomInput />






      {/* use Memo */}
      {/* <A1Use />
      <DemoMemo /> */}

      {/* use Callback */}

      {/* <UseCallbackA1Use /> */}
      {/* <DemoCallback/> */}

      {/* *** REACT MEMO */}
      {/* <ReactMemoSuccess /> */}
      {/* <ReactMemoDeep /> */}

    </div>
  )
}

export default App
