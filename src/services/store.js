import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store is a global state that saves the entire info of our application to
export const store = configureStore({
  // allows us to pull specific info we need from state
//   reduces our info to what we need fromt the API
  reducer: {[articleApi.reducerPath]: articleApi.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});
