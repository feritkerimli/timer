import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";
const store = configureStore({
    reducer: {
        myCount: counterSlice
    }
}) 
export default store;