import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state = {
        name: action.payload.name,
        userId: action.payload.userId,
      };
      return state;
    },

    logout(state) {
      state = null;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
