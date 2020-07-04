import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.ul`
  background-color: ${props => props.theme.background};
  width: 25%;
  padding: 0;
  display: flex;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  ${props => props.loading ? `
    justify-content: center;
    align-items: center;
  ` : `
    flex-direction: column;
  `};
  color: ${props => props.theme.text};
  box-shadow: 10px 0 22px -15px ${props => lighten(0.3, props.theme.background)};
`
