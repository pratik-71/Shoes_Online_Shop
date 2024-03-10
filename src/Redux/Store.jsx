import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";


const Store = configureStore({
    reducer :{
        products : ProductSlice,
    }
})

export default Store