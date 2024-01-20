import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  liveComments: [],
}

 const LiveCommentSlice = createSlice({
  name: " comments",
  initialState,
  reducers: {
    add: (state, action) => {
      
     if(state?.liveComments?.length > 5 ){
      state.liveComments.splice(0 ,1)//? limit array --> avoid free
     }
      state.liveComments.push(action.payload)//? 

      //   state.value += 1
    },
    decrement: (state) => {

      // state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    openMenu: (state) => {
      state.isMenuOpen = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, decrement, incrementByAmount } = LiveCommentSlice.actions

export default LiveCommentSlice.reducer
