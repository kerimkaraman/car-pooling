import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signformslice";
import tripslice from "./tripslice";

export const store = configureStore({
  reducer: {
    signup: signupSlice,
    trip: tripslice,
  },
});
