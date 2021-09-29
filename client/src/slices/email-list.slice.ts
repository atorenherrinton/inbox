import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface emailState {
  emails: Array<any>;
}

const initialState: emailState = {
  emails: [
    {
      id: 0,
      sender: "Coinbase Bytes",
      subject: "A history of China’s crypto crackdowns",
      body: "If the past week’s headlines about China banning crypto are giving you déjà vu, that’s probably because the country — home to the world’s second largest economy — has been announcing various cryptocurrency crackdowns for over a decade. China’s latest announcement aimed to curb trading via offshore platforms, and BTC dropped nearly 10% following the news. But how successful will China’s new rules be in preventing citizens from buying and selling crypto, and how will the measures impact the broader market? Let’s take a look back at previous crypto bans for clues",
      date: "10:45 AM",
    },
    {
      id: 1,
      sender: "amazon.com",
      subject: "amazon.com, action needed: Sign-in",
      body: "Ariel Toren-Herrinton,\nSomeone signed-in to your account.\nWhen:	Sep 26, 2021 03:47 PM Central Daylight Time\nDevice:	Apple iPhone iOS\nNear:	United States\nIf this was you, you can disregard this message. Otherwise, please let us know.",
      date: "10:30 AM",
    },
    {
      id: 2,
      sender: "Mercari",
      subject: "Use your $5 coupon to take your decor from summer to fall.",
      body: "Fall is the best excuse to cozy up your home, from cooking delicious meals for family and friends to snuggling under warm blankets. Use your $5 coupon to spice up your decor and kitchenware.* We’ve got everything you get festive for the season.",
      date: "10:25 AM",
    },
  ],
};

export const emailListSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {
    clearEmails: (state) => {
      state.emails = [];
    },
    setEmails: (state, action: PayloadAction<Array<object>>) => {
      state.emails = action.payload;
    },
  },
});

export const { clearEmails,setEmails } = emailListSlice.actions;

export const selectEmails = (state: RootState) => state.emailList.emails;

export default emailListSlice.reducer;
