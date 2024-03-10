import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
    product_details : null
}

const ProductSlice = createSlice({
   name:"products",
   initialState,
   reducers:{
    setProducts : (state,action)=>{
        state.products = action.payload
    },
    setProduct_details : (state,action)=>{
        state.product_details = action.payload
        console.log(state.product_details)
    }
   }
})

export const {setProducts,setProduct_details} = ProductSlice.actions
export default ProductSlice.reducer