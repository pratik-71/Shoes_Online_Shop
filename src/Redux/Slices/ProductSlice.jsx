import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
    product_details : null,
}

let defaultproducts = []

const ProductSlice = createSlice({
   name:"products",
   initialState,
   reducers:{
    setProducts : (state,action)=>{
        state.products = action.payload
        defaultproducts = action.payload
    },
    setProduct_details : (state,action)=>{
        state.product_details = action.payload
        
    },
    setFilter_products : (state,action)=>{
       if(action.payload=="HighTOLow"){
        console.log("called")
        state.products = [...state.products].sort((a,b)=>b.price-a.price)
       }
       else if(action.payload=="LowToHigh"){
        state.products = [...state.products].sort((a,b)=>a.price-b.price)
       }
       else if(action.payload == "Defualt"){
        state.products = defaultproducts
       }
       else{
        state.products = [...state.products]
       }
    },
    setRange_filter : (state,action)=>{
        state.products = defaultproducts.filter((product) => product.price <= action.payload);
    },

    setColor_filter:(state,action)=>{        
        state.products = defaultproducts
        state.products = [...state.products].filter((color)=>color.color == action.payload)   
    },
    setGender_filter:(state,action)=>{
       state.products = defaultproducts
       state.products = [...state.products].filter((gender)=>gender.gender==action.payload )
    }
   }
})

export const {setProducts,setColor_filter,setGender_filter,setCategory,
    setProduct_details,setFilter_products,setRange_filter} = ProductSlice.actions

export default ProductSlice.reducer