import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  CommentCount,
  Content,
  Details,
  ImageContainer,
  PostContent,
  PostTitle,
  UnreadStatus,
  UserWrapper,
  Wrapper
} from './styled'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getActivePost, setActivePost } from '../activePost/slice'
import { ReactComponent as CloseIcon} from '../../resources/icons/close.svg'
import { dismissPost } from '../dismissedPosts/slice'
import { getReadPosts, readPost } from '../readStatus/slice'

export const Post = ({ post, isDismissing }) => {
  const [dismissed, setDismissed] = useState(false)
  const { data } = post
  const dispatch = useDispatch()
  const activePost = useSelector(getActivePost)
  const readPosts = useSelector(getReadPosts)

  const { payload: activePostData } = activePost || {}

  const { id } = activePostData || {}

  const handlePostSelect = () => {
    dispatch(setActivePost(data))
    dispatch(readPost(data.id))
  }

  const handleDismiss = () => {
    setDismissed(true)
  }

  useEffect(() => {
    if (dismissed || isDismissing) {
      window.setTimeout(() => {
        dispatch(dismissPost(data.id))
      }, 250)
    }
  }, [dismissed, data.id, dispatch, isDismissing])

  const isRead = readPosts.findIndex(post => post.payload === data.id) >= 0

  return (
    <Wrapper onClick={handlePostSelect} selected={id === data.id} dismissed={dismissed || isDismissing}>
      <Details>
        <UserWrapper isRead={isRead}>
          <UnreadStatus isRead={isRead} />
          <h2>{data.author}</h2>
        </UserWrapper>
        <div>
          <time>{moment(data.created_utc * 1000).fromNow()}</time>
          <CloseIcon onClick={handleDismiss} />
        </div>
      </Details>
      <Content>
        <ImageContainer>
          {data.thumbnail !== 'default' && <img src={data.thumbnail} alt='post' />}
        </ImageContainer>
        <PostContent>
          <PostTitle>{data.title}</PostTitle>
          <CommentCount>{data.num_comments} comments</CommentCount>
        </PostContent>
      </Content>
    </Wrapper>
  )
}

Post.propTypes = {
  post: PropTypes.object
}


