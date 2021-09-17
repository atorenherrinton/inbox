import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
};

export const emailListSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.emails = [...state.emails, action.payload];
    },
    deleteEmail: (state, action) => {
      state.emails = state.emails.filter((email) => email !== action.payload);
    },
  },
});

export const { addEmail ,deleteEmail} = emailListSlice.actions;

export const selectEmails = (state) => state.emailList.emails;

export default emailListSlice.reducer;
