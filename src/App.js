import React from 'react';
import { RedditPosts } from './features/redditPosts';
import { GlobalStyles, Wrapper } from './styled';
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux';
import { getTheme } from './features/theme/slice';
import { Theme } from './features/theme';

const App = () => {
  const theme = useSelector(getTheme)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Theme />
        <GlobalStyles />
        <RedditPosts />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
