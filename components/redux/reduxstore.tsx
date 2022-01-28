import { configureStore } from "@reduxjs/toolkit";
import signup from "./user";

const store = configureStore({
  reducer: {
    userSignUpDetails: signup,
  },
});
export default store;
