import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const consultationSlice = createSlice({
  initialState: {
    value: {
      showConsultationDialog: false,
    },
  },
  name: "consultation",
  reducers: {
    consultationPopup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { consultationPopup } = consultationSlice.actions;
export default consultationSlice.reducer;
