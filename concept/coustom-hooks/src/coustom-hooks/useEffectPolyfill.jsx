import { useState, useEffect, useRef } from "react"

//& useRef ==> in jsx --> no render so it persist it's value , the function run
export const useEffectPolyfill = (effect, deps) => {
  const isFirstRender = useRef(true)//? how avoid always true
  const prevDeps = useRef([])
  console.log(5555, "is", isFirstRender)

  // First Render
  if (isFirstRender.current) {
    console.log(5555, "first ")

    isFirstRender.current = false
    const cleanup = effect()
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup()
      }
    }
  }

  // Deps Changes -< not same mai true and No Deps Array --> true always
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true

  if (depsChanged) {
    const cleanup = effect()
    // Cleanup
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup()
    }
  }

  prevDeps.current = deps || []
}
