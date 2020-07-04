import styled from 'styled-components'
import { lighten, transparentize } from 'polished'

export const Wrapper = styled.li`
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 15px;
  cursor: pointer;
  ${props => props.selected && `
    background-color: ${lighten(0.3, props.theme.background)} !important;
  `};
  transition: all 0.3s ease-in-out;
  position: relative;
  left: 0;
  
  ${props => props.dismissed && `
    left: -100%;
  `}

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.background)};
  }

  h2 {
    font-size: 15px;
    margin: 0;
  }
`

export const Content = styled.div`
  display: flex;
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  svg {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    
    fill: ${props => props.theme.text};
  }
  
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

export const ImageContainer = styled.div`
  img {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    margin-right: 20px;
  }
`

export const UnreadStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${props => props.isRead ? 'transparent' : props.theme.unread};
  margin-right: 10px;
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  
  h2 {
    ${props => props.isRead && `
      font-weight: normal;
    `}
  }
`
