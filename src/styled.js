import styled, { createGlobalStyle } from 'styled-components'
import { lighten, darken } from 'polished'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, Arial, serif;
    background-color: ${props => lighten(0.3, props.theme.background)};
  }
`

export const Wrapper = styled.div`
  display: flex;
  height: 95vh;
`

export const Header = styled.header`
  height: 5vh;
  background-color: ${props => darken(0.2, props.theme.background)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 12px;
  
  h1 {
    color: ${props => props.theme.text};  
  }
  
  > svg {
    width: 20px;
    fill: ${props => props.theme.text};
  }
`

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
`
