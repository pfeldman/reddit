import styled, { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, Arial, serif;
    background-color: ${props => lighten(0.3, props.theme.background)}
  }
`

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`
