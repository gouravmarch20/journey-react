import {
  FILTER_CLEAR_ALL,
  FILTER_BY_GENDER,
  FILTER_BY_BRAND,
  FILTER_BY_SIZE,
  SORT_BY_PRICE,
  FILTER_BY_PRICE
} from '../types/index'
// ** 1 ARG : STATE , 2 ACTION.TYPE / ACTION.PAYLOAD
export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case SORT_BY_PRICE: {
      return { ...state, shortByPrice: payload }
    }
    case FILTER_CLEAR_ALL: {
      return { ...state, shortByPrice: '', sizes: [], brands: [], gender: '' }
    }
    case FILTER_BY_BRAND: {
      return state.brands.includes(payload)
        ? { ...state, brands: state.brands.filter(brand => brand !== payload) }
        : { ...state, brands: [...state.brands, payload] }
    }
    case FILTER_BY_PRICE: {
      return {
        ...state,
        maxPrice: payload
      }
    }
    case FILTER_BY_SIZE: {
      //TODO: AVOID IF ALREADY ADDED
      return state.sizes.includes(payload)
        ? {
            ...state,
            sizes: state.sizes.filter(size => size !== payload)
          }
        : {
            ...state,
            sizes: [...state.sizes, payload]
          }
    }
    case FILTER_BY_GENDER: {
      return { ...state, gender: payload }
    }

    default:
      console.warn('no type found')
      return state
  }
}
