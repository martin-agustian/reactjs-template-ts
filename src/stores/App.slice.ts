import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
  titlePage: string;
}

const initialState = {
  titlePage: "",
}

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setTitlePage: (state, action: PayloadAction<string>) => {
      state.titlePage = "Website Name - " + action.payload;
    },
  },
});

export const { setTitlePage } = appSlice.actions;

export default appSlice.reducer;
