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

export const verifyEmailAddress =
  (emailAddress: string): AppThunk =>
  (dispatch, getState) => {
    const emailAddresses = selectEmailAddresses(getState());

    const checkForDuplicate = (emailAddress: string) => {
      if (!emailAddresses.includes(emailAddress)) {
        return true;
      }
    };

    const validateEmailAddress = (emailAddress: string) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailAddress.toLowerCase());
    };

    if (checkForDuplicate(emailAddress) && validateEmailAddress(emailAddress)) {
      dispatch(addEmailAddress(emailAddress));
      dispatch(setEmailAddress(""));
    } else if (!validateEmailAddress(emailAddress)) {
      dispatch(setValidationError("Please enter a valid email"));
    } else {
      dispatch(setValidationError("That email was already added"));
    }
  };

export default emailAddressListSlice.reducer;
