import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { setValidationError } from "./email-input.slice";

export interface emailAddressListState {
  emailAddresses: Array<string>;
  emailAddress: string;
}

const initialState: emailAddressListState = {
  emailAddresses: [],
  emailAddress: "",
};

export const emailAddressListSlice = createSlice({
  name: "emailAddressList",
  initialState,
  reducers: {
    addEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddresses = [...state.emailAddresses, action.payload];
    },
    deleteEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddresses = state.emailAddresses.filter(
        (emailsAddress) => emailsAddress !== action.payload
      );
    },
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
  },
});

export const { addEmailAddress, deleteEmailAddress, setEmailAddress } =
  emailAddressListSlice.actions;

export const selectEmailAddress = (state: RootState) =>
  state.emailAddressList.emailAddress;

export const selectEmailAddresses = (state: RootState) =>
  state.emailAddressList.emailAddresses;


export default emailAddressListSlice.reducer;
