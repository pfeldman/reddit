import { createSlice } from '@reduxjs/toolkit'

export const dismissedPosts = createSlice({
  name: 'dismissedPosts',
  initialState: {
    postDismissed: []
  },
  reducers: {
    dismissPost: (state, postId) => {
      state.postDismissed = [...state.postDismissed, postId]
    }
  }
})

export const { dismissPost } = dismissedPosts.actions

export const getDismissedPosts = state => state.dismissedPosts.postDismissed

export default dismissedPosts.reducer
