import { createSlice } from '@reduxjs/toolkit'

export const activePost = createSlice({
  name: 'activePost',
  initialState: {
    post: null
  },
  reducers: {
    setActivePost: (state, post) => {
      state.post = post
    }
  }
})

export const { setActivePost } = activePost.actions

export const getActivePost = state => state.activePost.post

export default activePost.reducer
