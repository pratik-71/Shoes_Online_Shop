import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import AddressSlice from "./Slices/AddressSlice";


const Store = configureStore({
    reducer :{
        products : ProductSlice,
        addresses : AddressSlice
    }
})

export default Store