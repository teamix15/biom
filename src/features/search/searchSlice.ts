import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    update(state, action) {
      state.value = action.payload;
    },
  },
});

export const { update } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
