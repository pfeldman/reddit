import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.ul`
  background-color: ${props => props.theme.background};
  width: 25%;
  flex-basis: 25%;
  padding: 0;
  display: flex;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  z-index: 1;
  ${props => props.loading ? `
    justify-content: center;
    align-items: center;
    button {
      display: none;
    }
  ` : `
    flex-direction: column;
  `};
  color: ${props => props.theme.text};
  box-shadow: 10px 0 22px -15px ${props => lighten(0.3, props.theme.background)};
  
  @media(max-width: 1000px) {
    position: absolute;
    width: 100%;
    height: 95vh;
  }
  
  .swipeable-list-item__content-left {
    position: absolute;
    background-color: red;
    width: 100%;
    height: 100%;
  }
  
  .swipeable-list-item {
    position: relative;
  }
  
  .swipeable-list-item__content {
    position: relative;
    background-color: ${props => props.theme.background}
  }
`

export const DismissAll = styled.button`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
`
