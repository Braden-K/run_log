import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.value = { name: action.name };
    },
    logout(state) {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
