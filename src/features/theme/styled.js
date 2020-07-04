import styled from 'styled-components'
import { invert } from 'polished'

export const ThemeWrapper = styled.button`
  background-color: ${props => props.theme.background};
  cursor: pointer;
  outline: 0 none;
  height: 100%;
  border: 0 none;

  svg {
    fill: ${props => invert(props.theme.background)};
    width: 20px;
    height: 30px;
  }
`
