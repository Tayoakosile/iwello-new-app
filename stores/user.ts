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
    signUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signUp } = userSlice.actions;
export default userSlice.reducer;
