import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const PageIndex = createSlice({
  initialState: {
    value: { index: 2 },
  },
  name: "contactUs",
  reducers: {
    setPatientPageIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPatientPageIndex } = PageIndex.actions;
export default PageIndex.reducer;
