import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const selectIsNavDrawerOpen = (state) => state.navDrawer.isNavDrawerOpen;

export default navDrawerSlice.reducer;
