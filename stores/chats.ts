import { createSlice } from "@reduxjs/toolkit";
import { ChatMessage } from "../utils/util";

// SIgn up info about user
const chats = createSlice({
  initialState: {
    value: [...ChatMessage],
  },
  name: "chats",
  reducers: {
    sendPatientChat: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { sendPatientChat } = chats.actions;
export default chats.reducer;
