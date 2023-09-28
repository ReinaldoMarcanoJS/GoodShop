import { createSlice } from "@reduxjs/toolkit";
import {  OneProduct } from "../types";

const initialState: OneProduct = {
    product: 
      {
        title: "",
        user: "",
        image: "",
        price: "",
        description: "",
        _id: "",
      },
  };

export const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = authSlice.actions;
export default authSlice.reducer;
