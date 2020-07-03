import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTheme, setLight, setDark } from './slice'
import { ThemeWrapper } from './styled'
import { ReactComponent as SunIcon } from '../../resources/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../../resources/icons/moon.svg'

export const Theme = () => {
  const { name } = useSelector(getTheme)
  const dispatch = useDispatch()

  const handleSelectTheme = () => {
    if (name === 'dark') {
      dispatch(setLight())
    } else {
      dispatch(setDark())
    }
  }

  return (
    <ThemeWrapper onClick={handleSelectTheme}>
      {name === 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </ThemeWrapper>
  )
}
