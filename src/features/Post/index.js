import React from 'react'
import PropTypes from 'prop-types'
import { CommentCount, Content, Details, PostContent, PostTitle, Wrapper } from './styled'
import moment from 'moment'

export const Post = ({ post }) => {
  const { data } = post
  console.log(data)
  console.log()
  return (
    <Wrapper>
      <Details>
        <h2>{data.author}</h2>
        <time>{moment(data.created_utc * 1000).fromNow()}</time>
      </Details>
      <Content>
        {data.thumbnail !== 'default' && <img src={data.thumbnail} alt='post' />}
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


