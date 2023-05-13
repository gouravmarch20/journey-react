// a2 : when any state changes who code of that component re-run ==> then virtual dom compare and render specific state change in components
// usememo use to avoid unnecessary code execution mainly ==? function re-run if our app getting slow
// ? useMemo look same like useEffect what difference between them
   // 1. useMemo can  return value , if now chage in dependencies array then return memorized value else re-run cb of useMemo

// ? when to use 
 // to play with value then only
// useMemo small version of useCallback