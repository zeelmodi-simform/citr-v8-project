import { createSlice } from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: { location: "", breed: "", animal: "" },
  },
  reducers: {
    all: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { all } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
