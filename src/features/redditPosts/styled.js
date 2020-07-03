import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  width: 25%;
  padding: 20px;
  display: flex;
  ${props => props.loading && `
    justify-content: center;
    align-items: center;
  `};
  color: ${props => props.theme.text};
  box-shadow: 10px 0 22px -15px ${props => lighten(0.3, props.theme.background)};
`
