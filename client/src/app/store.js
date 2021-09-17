import { configureStore } from "@reduxjs/toolkit";
import emailCardReducer from "../slices/email-card.slice";
import emailListReducer from "../slices/email-list.slice";
import navDrawerReducer from "../slices/nav-drawer.slice";

export const store = configureStore({
  reducer: {
    emailCard: emailCardReducer,
    emailList: emailListReducer,
    navDrawer: navDrawerReducer,
  },
});
