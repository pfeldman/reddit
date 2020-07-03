import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../resources/constants'

export const redditPosts = createSlice({
  name: 'redditPosts',
  initialState: {
    isFetching: false,
    data: []
  },
  reducers: {
    request: state => {
      state.isFetching = true
    },
    success: (state, data) => {
      state.isFetching = false
      state.data = data
    }
  }
})

export const { request, success } = redditPosts.actions

export const fetchRedditPosts = (count = 50) => async dispatch => {
  dispatch(request())
  const raw = await fetch(`${BASE_URL}/top.json?limit=${count}`)
  const data = await raw.json()
  dispatch(success(data.data.children))
}

export const getIsFetching = state => state.redditPosts.isFetching
export const getRedditPosts = state => state.redditPosts.data

export default redditPosts.reducer
