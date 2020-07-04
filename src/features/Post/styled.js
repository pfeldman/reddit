import styled from 'styled-components'
import { lighten, transparentize } from 'polished'

export const Wrapper = styled.li`
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.background)};
  }

  h2 {
    font-size: 15px;
    margin: 0 0 10px 0;
  }
`

export const Content = styled.div`
  display: flex;
  
  img {
    margin-right: 20px;
    max-width: 100px;
  }
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  time {
    opacity: 0.7;
    font-style: italic;
    font-size: 12px;
  }
`

export const CommentCount = styled.span`
  display: block;
  margin-top: 10px;
  color: ${props => transparentize(0.3, props.theme.text)};
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostTitle = styled.span`
  flex-grow: 1;
`
