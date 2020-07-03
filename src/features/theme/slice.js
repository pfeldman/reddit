import { createSlice } from '@reduxjs/toolkit'
import { themeDark, themeLight } from '../../theme'

export const theme = createSlice({
  name: 'theme',
  initialState: {
    theme: themeDark
  },
  reducers: {
    setDark: state => {
      state.theme = themeDark
    },
    setLight: state => {
      state.theme = themeLight
    }
  }
})

export const { setDark, setLight } = theme.actions

export const getTheme = state => state.theme.theme

export default theme.reducer
