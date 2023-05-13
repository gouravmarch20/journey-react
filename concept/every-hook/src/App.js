import React, { useEffect } from 'react'
import {
  ApiFetch,
  Default,
  // A2Use,
  UseCallbackA1Need,
  UseCallbackA1Use,
  A1UseRefUse,
  A1UseRefNeed,
  A2UseRefUse,
  MemoDemo,
  FixUsingMemo,
  NeedCallback,
} from './hooks'
import { ReactMemoSucess } from './reactMemo/Sucess/ReactMemoSucess'
import { FailedReactMemo } from './reactMemo/Failed/FailedReactMemo'
import './App.css'

const App = () => {
  useEffect(() => {}, [])

  return (
    <div>
      {/* use Memo */}
      {/* <A2Use /> */}
      {/* Coustom hook : Api hit */}
      {/* <h1>APi fetch </h1>
      <ApiFetch /> */}
      {/* use Callback */}
      {/* <UseCallbackA1Need />
      <UseCallbackA1Use /> */}
      {/* <UseCallbackA1Need /> */}

      {/* useref  */}
      {/* <A1UseRefNeed /> */}
      {/* <A1UseRefUse /> */}
      {/* <A2UseRefUse /> */}
      {/* <MemoDemo /> */}
      {/* <FixUsingMemo /> */}
      <NeedCallback />
      {/*  */}
      {/* *** REACT MEMO */}
      {/* <ReactMemoSucess /> */}
      {/* <FailedReactMemo /> */}
    </div>
  )
}

export default App
