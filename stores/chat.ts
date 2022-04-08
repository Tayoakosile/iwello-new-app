import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
  initialState: {
    value: { message: "" },
  },
  name: "chats",
  reducers: {
    storeMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { storeMessage } = chat.actions;
export default chat.reducer;
