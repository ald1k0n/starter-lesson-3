import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  title: "Post 1",
  content: "Content of post 1",
  loading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updatePost } = postSlice.actions;
export default postSlice.reducer;
