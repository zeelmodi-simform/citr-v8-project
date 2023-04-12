import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, { payload }) => {
      state.value = payload;
    },
    unadopt: (state) => {
      state.value = null;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;

export default adoptedPetSlice.reducer;
