import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface emailCardState {
  isEmailCardOpen: boolean;
  isEmailInputCollapsed: boolean;
  isEmailInputFocused: boolean;
}

const initialState: emailCardState = {
  isEmailCardOpen: false,
  isEmailInputCollapsed: false,
  isEmailInputFocused: false,
};

export const emailCardSlice = createSlice({
  name: "emailCard",
  initialState,
  reducers: {
    setEmailCardOpen: (state) => {
      state.isEmailCardOpen = !state.isEmailCardOpen;
    },
    setEmailInputCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isEmailInputCollapsed = action.payload;
    },
    setEmailInputFocused: (state, action: PayloadAction<boolean>) => {
      state.isEmailInputFocused = action.payload;
    },
  },
});

export const {
  setEmailCardOpen,
  setEmailInputCollapsed,
  setEmailInputFocused,
} = emailCardSlice.actions;

export const selectIsEmailCardOpen = (state: RootState) =>
  state.emailCard.isEmailCardOpen;

export const selectIsEmailInputCollapsed = (state: RootState) =>
  state.emailCard.isEmailInputCollapsed;

  export const selectIsEmailInputFocused = (state: RootState) =>
  state.emailCard.isEmailInputFocused;

export default emailCardSlice.reducer;
