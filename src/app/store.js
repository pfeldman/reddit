import { configureStore } from '@reduxjs/toolkit'
import redditPosts from '../features/redditPosts/slice'
import theme from '../features/theme/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({
  redditPosts,
  theme
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export default () => {
  let store = configureStore({
    reducer: persistedReducer
  })

  let persistor = persistStore(store)
  return { store, persistor }
}
