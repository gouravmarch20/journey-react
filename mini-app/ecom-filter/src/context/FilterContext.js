import { createContext, useContext, useReducer, useEffect } from 'react'
import { FilterReducer } from '../reducers'

const initialState = {
  shortByPrice: '',
  sizes: [],
  brands: [],
  gender: '',
  maxPrice: null
}
const FilterContext = createContext(initialState)
const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState)
  return (
    <FilterContext.Provider value={{ filterDispatch, filterState }}>
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)
export { FilterProvider, useFilter }
