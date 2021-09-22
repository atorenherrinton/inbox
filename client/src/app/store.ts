import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import emailAddressListReducer from "../slices/email-address-list.slice";
import emailCardReducer from "../slices/email-card.slice";
import emailInputReducer from "../slices/email-input.slice";
import navDrawerReducer from "../slices/nav-drawer.slice";

export const store = configureStore({
  reducer: {
    emailAddressList: emailAddressListReducer,
    emailCard: emailCardReducer,
    emailInput: emailInputReducer,
    navDrawer: navDrawerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
