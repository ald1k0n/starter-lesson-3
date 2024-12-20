import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  user: null,
};

const userSlice = createSlice({
  initialState: initialValues,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
