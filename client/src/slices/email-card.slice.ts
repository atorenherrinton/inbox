import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export interface emailCardState {
  isEmailCardOpen: boolean;
}

const initialState: emailCardState = {
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

export const selectIsEmailCardOpen = (state: RootState) => state.emailCard.isEmailCardOpen;

export default emailCardSlice.reducer;