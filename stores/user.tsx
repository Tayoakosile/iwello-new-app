import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const userSlice = createSlice({
  initialState: {
    value: {
      name: "",
      email: "@example@gmail.com",
      firstname: "",
      lastname: "",
      password: "",
    },
  },
  name: "user",
  reducers: {
    signup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signup } = userSlice.actions;
export default userSlice.reducer;
