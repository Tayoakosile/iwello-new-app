import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const confirmEmailSlice = createSlice({
  initialState: {
    value: {
      showDialog: false,
    },
  },
  name: "confirmemail",
  reducers: {
    confirmEmailPopup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { confirmEmailPopup } = confirmEmailSlice.actions;
export default confirmEmailSlice.reducer;
