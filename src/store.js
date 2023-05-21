import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import runRedcuer from "./runSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    runs: runRedcuer,
  },
});

export default store;
