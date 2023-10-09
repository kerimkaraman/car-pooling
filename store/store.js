import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signformslice";

export const store = configureStore({
  reducer: {
    signup: signupSlice,
  },
});
