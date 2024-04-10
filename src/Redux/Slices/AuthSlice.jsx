import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isAdmin: false
};

const AuthSlice = createSlice({
  name: "auth",
  initialState, // Corrected typo here
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload; 
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload; 
    }
  }
});

export const { setIsAdmin, setIsAuthenticated } = AuthSlice.actions;
export default AuthSlice.reducer;
