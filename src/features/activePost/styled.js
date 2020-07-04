import styled from 'styled-components'
import { transparentize } from 'polished'

export const NoPostWrapper = styled.div`
  color: ${props => transparentize(0.5, props.theme.text)};
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Post = styled.div`
  flex-grow: 1;
  padding: 20px 20px 0 20px;
  overflow-y: auto;
  flex-basis: 75%;
  color: ${props => props.theme.text};
  
  img {
    max-width: 100%;
    margin-top: 20px;
  }
  
  h2 {
    margin: 0;
  }
`

export const ConditionalVisible = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  height: 100%;
`

export const LoaderContainer = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`
