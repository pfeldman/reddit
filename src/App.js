import React, { useEffect, useState } from 'react'
import { RedditPosts } from './features/redditPosts'
import { GlobalStyles, Header, Layout, Wrapper } from './styled'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getTheme } from './features/theme/slice'
import { Theme } from './features/theme'
import { ActivePost } from './features/activePost'
import { useIsMobile } from './hooks/responsive'
import { ReactComponent as MenuIcon } from './resources/icons/menu.svg'
import { fetchRedditPosts } from './features/redditPosts/slice'

const App = () => {
  const theme = useSelector(getTheme)
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)
  const dispatch = useDispatch()

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    dispatch(fetchRedditPosts())
  }, [dispatch])

  const showMenu = (isMobile && menuOpen) || !isMobile

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>
          {isMobile && <MenuIcon onClick={handleMenuOpen} />}
          <h1>Reddit App</h1>
          <Theme />
        </Header>
        <Wrapper>
          <GlobalStyles />
          {showMenu && <RedditPosts onPostOpen={() => setMenuOpen(false)} />}
          <ActivePost />
        </Wrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default App
