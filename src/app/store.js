import { configureStore } from '@reduxjs/toolkit'
import redditPosts from '../features/redditPosts/slice'
import theme from '../features/theme/slice'

export default configureStore({
  reducer: {
    redditPosts,
    theme
  }
})
