import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const userSlice = createSlice({
  initialState: {
    value: {
      name: "",
      email: "",
      message: "",
    },
  },
  name: "contactUs",
  reducers: {
    contactUs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { contactUs } = userSlice.actions;
export default userSlice.reducer;
