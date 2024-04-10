import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import AddressSlice from "./Slices/AddressSlice";
import AuthSlice from "./Slices/AuthSlice";


const Store = configureStore({
    reducer :{
        products : ProductSlice,
        addresses : AddressSlice,
        auth:AuthSlice
    }
})

export default Store