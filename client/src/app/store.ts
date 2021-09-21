import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import emailCardReducer from "../slices/email-card.slice";
import emailAddressListReducer from "../slices/email-address-list.slice";
import navDrawerReducer from "../slices/nav-drawer.slice";

export const store = configureStore({
  reducer: {
    emailCard: emailCardReducer,
    emailAddressList: emailAddressListReducer,
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
