import { configureStore } from "@reduxjs/toolkit";
import { initializeSlice } from "./features/initialize/initialize";
// ...

export const store = configureStore({
  reducer: {
    initialize: initializeSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
