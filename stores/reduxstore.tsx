import signup from "./user";
import contactus from "./contactus";
//
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userSignUpDetails: signup,
    contactUs: contactus,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
