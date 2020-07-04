import { createSlice } from '@reduxjs/toolkit'

export const readStatus = createSlice({
  name: 'readStatus',
  initialState: {
    postRead: []
  },
  reducers: {
    readPost: (state, postId) => {
      state.postRead = [...state.postRead, postId]
    }
  }
})

export const { readPost } = readStatus.actions

export const getReadPosts = state => state.readStatus.postRead

export default readStatus.reducer
