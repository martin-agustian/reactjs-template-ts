import { configureStore } from "@reduxjs/toolkit";
// slices
import AppSlice from "./App.slice";

const BaseStore = configureStore({
  reducer: {
    App: AppSlice
  },
});

export type AppDispatch = typeof BaseStore.dispatch;
export type RootState = ReturnType<typeof BaseStore.getState>;

export default BaseStore;
