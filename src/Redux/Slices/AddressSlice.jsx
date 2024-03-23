import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    old_addresses : [],
    selected_address : {}
}

const AddressSlice = createSlice({
    name:"addresses",
    initialState,
    reducers:{
        setOldAddress : (state,action)=>{
            state.old_addresses = action.payload
        },
        setSelectedAddress : (state,action)=>{
            console.log(state.selected_address)
            state.selected_address = action.payload
        }
    }
});

export const { setOldAddress, setSelectedAddress } = AddressSlice.actions;
export default AddressSlice.reducer;
