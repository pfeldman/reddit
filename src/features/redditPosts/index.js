import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getIsFetching,
  fetchRedditPosts,
  getRedditPosts
} from './slice'
import { Loader } from '../../components/Loader'
import { Wrapper } from './styled'
import { Post } from '../Post'

export function RedditPosts () {
  const fetchingRedditPosts = useSelector(getIsFetching)
  const redditPosts = useSelector(getRedditPosts)
  const dispatch = useDispatch()

  const posts = redditPosts.payload || []

  useEffect(() => {
    dispatch(fetchRedditPosts())
  }, [dispatch])

  return (
    <Wrapper loading={fetchingRedditPosts}>
      {fetchingRedditPosts ? <Loader /> : posts.map(post => <Post key={post.id} post={post} />)}
    </Wrapper>
  )
}
