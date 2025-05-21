import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart-slice";
import toastReducer from "./Toast-slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toast: toastReducer,
  },
});
