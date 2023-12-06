import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from "./menuToggleSlice";


export const store = configureStore({
    reducer:{
        menu: MenuToggleSlice,

    }
})