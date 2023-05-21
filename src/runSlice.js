import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const runSlice = createSlice({
  name: "runs",
  initialState,
  reducers: {
    loadRunList(state, action) {
      return action.payload;
    },
  },
});

export const { loadRunList } = runSlice.actions;
export default runSlice.reducer;
