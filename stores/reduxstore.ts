import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./user";
import contactUsSlice from "./contactus"; //
import confirmEmailSlice from "./confirmemail";
import consultationSlice from "./consultationPopup";
import patientPageIndexSlice from "./patientPageIndex";

const store = configureStore({
  reducer: {
    userSignUpDetails: signUpSlice,
    contactUs: contactUsSlice,
    confirmEmail: confirmEmailSlice,
    consultation: consultationSlice,
    patientPageIndex: patientPageIndexSlice ,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
