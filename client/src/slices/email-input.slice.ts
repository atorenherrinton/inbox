import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface emailInputState {
  validationError: string;
}

const initialState: emailInputState = {
  validationError: "",
};

export const emailInputSlice = createSlice({
  name: "emailInput",
  initialState,
  reducers: {
    setValidationError: (state, action: PayloadAction<string>) => {
      state.validationError = action.payload;
    },
  },
});

export const { setValidationError } = emailInputSlice.actions;

export const selectValidationError = (state: RootState) =>
  state.emailInput.validationError;

export default emailInputSlice.reducer;
