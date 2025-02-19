import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slicer'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store;