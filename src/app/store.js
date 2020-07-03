import { configureStore } from '@reduxjs/toolkit';
import redditPosts from '../features/redditPosts/slice';

export default configureStore({
  reducer: {
    redditPosts: redditPosts,
  },
});
