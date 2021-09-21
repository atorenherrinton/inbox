import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface navDrawerState {
  isNavDrawerOpen: boolean;
}

const initialState: navDrawerState = {
  isNavDrawerOpen: true,
};

export const navDrawerSlice = createSlice({
  name: "navDrawer",
  initialState,
  reducers: {
    setNavDrawerOpen: (state) => {
      state.isNavDrawerOpen = !state.isNavDrawerOpen;
    },
  },
});

export const { setNavDrawerOpen } = navDrawerSlice.actions;

export const selectIsNavDrawerOpen = (state: RootState) =>
  state.navDrawer.isNavDrawerOpen;

export default navDrawerSlice.reducer;
