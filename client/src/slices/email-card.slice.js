import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmailCardOpen: false,
};

export const emailCardSlice = createSlice({
  name: "emailCard",
  initialState,
  reducers: {
    setEmailCardOpen: (state) => {
      state.isEmailCardOpen = !state.isEmailCardOpen;
    },
  },
});

export const { setEmailCardOpen } = emailCardSlice.actions;

export const selectIsEmailCardOpen = (state) => state.emailCard.isEmailCardOpen;

export default emailCardSlice.reducer;
