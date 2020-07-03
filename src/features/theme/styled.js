import styled from 'styled-components'
import { invert } from 'polished'

export const ThemeWrapper = styled.button`
  position: absolute;
  background-color: ${props => props.theme.background};
  top: 0;
  right: 0;
  cursor: pointer;
  outline: 0 none;

  svg {
    fill: ${props => invert(props.theme.background)};
    width: 20px;
    height: 30px;
  }
`
