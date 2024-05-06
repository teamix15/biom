import { PayloadAction, UnknownAction, createSlice } from "@reduxjs/toolkit";
import { getBiom } from "./biom.ts";
import { BiomDto } from "../../models/dto/biom.dto.ts";

interface BiomsState {
  biom: BiomDto[];
  loading: boolean;
  error: string | null;
}

const initialState: BiomsState = {
  biom: [],
  loading: false,
  error: null,
};

export const bacteriaSlice = createSlice({
  name: "bacteria",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBiom.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getBiom.fulfilled, (state, action) => {
      state.biom = action.payload;
      state.loading = false;
    });

    builder.addMatcher(isError, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const bacteriaReducer = bacteriaSlice.reducer;

function isError(action: UnknownAction): action is PayloadAction<string> {
  return action.type.endsWith("rejected");
}
