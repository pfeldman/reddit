import React from 'react'
import { RedditPosts } from './features/redditPosts'
import { GlobalStyles, Header, Layout, Wrapper } from './styled'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { getTheme } from './features/theme/slice'
import { Theme } from './features/theme'
import { ActivePost } from './features/activePost'

const App = () => {
  const theme = useSelector(getTheme)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>
          <h1>Reddit App</h1>
          <Theme />
        </Header>
        <Wrapper>
          <GlobalStyles />
          <RedditPosts />
          <ActivePost />
        </Wrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default App
