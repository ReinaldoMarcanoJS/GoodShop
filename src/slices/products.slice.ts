import { createSlice } from "@reduxjs/toolkit";
import { ArrayProducts } from "../types";

const initialState: ArrayProducts = {
  products: [
    {
      title: "cartera",
      user: "cartera",
      image: "2344",
      price: "cartera",
      description: "cartera",
      _id: "cartera",
    },
  ],
};

export const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = authSlice.actions;
export default authSlice.reducer;
