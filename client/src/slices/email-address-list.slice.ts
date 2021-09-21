import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../app/store';

export interface emailAddressListState {
  emails: Array<string>;
}

const initialState: emailAddressListState = {
  emails: [],
};

export const emailAddressListSlice = createSlice({
  name: "emailAddressList",
  initialState,
  reducers: {
    addEmailAddress: (state, action: PayloadAction<string>) => {
      state.emails = [...state.emails, action.payload];
    },
    deleteEmailAddress: (state, action: PayloadAction<string>) => {
      state.emails = state.emails.filter((email) => email !== action.payload);
    },
  },
});

export const { addEmailAddress, deleteEmailAddress } = emailAddressListSlice.actions;

export const selectEmailAddresses = (state: RootState) => state.emailAddressList.emails;

export default emailAddressListSlice.reducer;
