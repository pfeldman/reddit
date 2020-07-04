import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  getIsFetching,
  getRedditPosts
} from './slice'
import { Loader } from '../../components/Loader'
import { DismissAll, Wrapper } from './styled'
import { Post } from '../post'
import { getDismissedPosts } from '../dismissedPosts/slice'

export const RedditPosts = ({ onPostOpen }) => {
  const [isDismissingAll, setIsDismissingAll] = useState(false)
  const fetchingRedditPosts = useSelector(getIsFetching)
  const redditPosts = useSelector(getRedditPosts)
  const dismissedPosts = useSelector(getDismissedPosts)

  const posts = redditPosts.payload || []

  const postsAvailable = posts.filter(post => {
    return dismissedPosts.findIndex(dismissed => dismissed.payload === post.data.id) === -1
  })

  const handleDismissAll = () => {
    setIsDismissingAll(true)
  }

  return (
    <Wrapper loading={fetchingRedditPosts}>
      {fetchingRedditPosts
        ? <Loader />
        : postsAvailable.map(post => (
          <Post
            onPostOpen={onPostOpen}
            isDismissing={isDismissingAll}
            key={post.data.id}
            post={post}
          />
        )
        )}
      <DismissAll onClick={handleDismissAll}>Dismiss All</DismissAll>
    </Wrapper>
  )
}

RedditPosts.propTypes = {
  onPostOpen: PropTypes.func
}
