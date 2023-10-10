import { createSlice } from "@reduxjs/toolkit";

export const trip = createSlice({
  name: "trip",
  initialState: {
    from: "",
    to: "",
    date: "",
    passenger: "",
  },
  reducers: {
    updateFrom: (state, action) => {
      state.from = action.payload;
    },
    updateTo: (state, action) => {
      state.to = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    updatePassenger: (state, action) => {
      state.passenger = action.payload;
    },
  },
});

export const { updateFrom, updateTo, updateDate, updatePassenger } =
  trip.actions;
export default trip.reducer;
