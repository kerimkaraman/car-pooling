import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    Name: "",
    password: "",
    email: "",
    surname: "",
    phone: " ",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateName: (state, action) => {
      state.Name = action.payload;
    },
    updateSurname: (state, action) => {
      state.surname = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const {
  updateEmail,
  updatePassword,
  updateName,
  updateSurname,
  updatePhone,
} = signupSlice.actions;

export default signupSlice.reducer;
