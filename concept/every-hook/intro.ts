// & REACT MEMO::
// HOC 
//if props change then only code run in memo


//& useCallback
// same as useMemo but => useMemo returns memorized value while it returns memoized function
// increase performance
// ? when to use 
// function / child component mai code re-run mai void


//& useMemo
// a2 : when any state changes who code of that component re-run ==> then virtual dom compare and render specific state change in components
// usememo use to avoid unnecessary code execution mainly ==? function re-run if our app getting slow
// ? useMemo look same like useEffect what difference between them
   // 1. useMemo can  return value , if now chage in dependencies array then return memorized value else re-run cb of useMemo

// ? when to use 
 // to play with value then only
// useMemo small version of useCallback


// return object having current property => {current : initialValueAssigned}

// a1 : create mutable variable which not render by react on change
// a2 : access dom element directly

// & useRef
// - no render want