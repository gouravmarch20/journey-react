import { configureStore } from "@reduxjs/toolkit";
import  LiveCommentSlice  from "./slice/LiveCommentSlice";

export const store = configureStore({
    reducer:{
        comments: LiveCommentSlice,

    }
});


