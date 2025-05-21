import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartSlice",
  initialState:
    localStorage.getItem("cart_products") !== null
      ? JSON.parse(localStorage.getItem("cart_products"))
      : [],
  reducers: {
    addProduct: (state, action) => {
      let findedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findedProduct) {
        findedProduct.quantity += 1;
      } else {
        //  mean is new product
        let newProduct = { ...action.payload, quantity: 1 };
        state.push(newProduct);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    incrementProductQuantity: (state, action) => {
      let findedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findedProduct.quantity += 1;
    },
    decrementProductQuantity: (state, action) => {
      let findedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findedProduct.quantity -= 1;
    },
    deleteAllProducts: () => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export let {
  addProduct,
  deleteProduct,
  incrementProductQuantity,
  decrementProductQuantity,
  deleteAllProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
