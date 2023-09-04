import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isBrowse: true };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
    setBrowser: (state, action) => {
      state.isBrowse = action.payload;
    },
  },
});

export const { addUser, removeUser, setBrowser } = userSlice.actions;

export default userSlice.reducer;
