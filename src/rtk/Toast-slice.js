import { createSlice } from "@reduxjs/toolkit";
let toastSlice = createSlice({
  name: "toastSlice",
  initialState: { status: false, message: "", danger: false },
  reducers: {
    updateState: (state, action) => {
      // state=action.payload
      // return action.payload;
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.danger = action.payload.danger;
    },
  },
});

// Action creators are generated for each case reducer function
export let { updateState } = toastSlice.actions;
export default toastSlice.reducer;
