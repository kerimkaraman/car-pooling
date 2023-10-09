import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    Name: "",
    password: "",
    email: "",
    surname: "",
    phone: "",
  },
  reducers: {
    updateData: (state, action, type) => {
      switch (type) {
        case "name":
          state.Name = action.payload;
      }
    },
  },
});

export const { updateData } = signupSlice.actions;

export default signupSlice.reducer;
