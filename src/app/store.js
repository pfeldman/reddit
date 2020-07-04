import { configureStore, combineReducers } from '@reduxjs/toolkit'
import redditPosts from '../features/redditPosts/slice'
import theme from '../features/theme/slice'
import activePost from '../features/activePost/slice'
import dismissedPosts from '../features/dismissedPosts/slice'
import readStatus from '../features/readStatus/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  redditPosts,
  theme,
  activePost,
  dismissedPosts,
  readStatus
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  const store = configureStore({
    reducer: persistedReducer
  })

  const persistor = persistStore(store)
  return { store, persistor }
}
