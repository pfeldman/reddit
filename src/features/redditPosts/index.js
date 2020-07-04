import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getIsFetching,
  fetchRedditPosts,
  getRedditPosts
} from './slice'
import { Loader } from '../../components/Loader'
import { DismissAll, Wrapper } from './styled'
import { Post } from '../post'
import { getDismissedPosts } from '../dismissedPosts/slice'

export function RedditPosts () {
  const [isDismissingAll, setIsDismissingAll] = useState(false)
  const fetchingRedditPosts = useSelector(getIsFetching)
  const redditPosts = useSelector(getRedditPosts)
  const dispatch = useDispatch()
  const dismissedPosts = useSelector(getDismissedPosts)

  const posts = redditPosts.payload || []

  useEffect(() => {
    dispatch(fetchRedditPosts())
  }, [dispatch])

  const postsAvailable = posts.filter(post => {
    return dismissedPosts.findIndex(dismissed => dismissed.payload === post.data.id) === -1
  })

  const handleDismissAll = () => {
    setIsDismissingAll(true)
  }

  return (
    <Wrapper loading={fetchingRedditPosts || true}>
      {fetchingRedditPosts || true ? <Loader /> : postsAvailable.map(post => <Post isDismissing={isDismissingAll}  key={post.data.id} post={post} />)}
      <DismissAll onClick={handleDismissAll}>Dismiss All</DismissAll>
    </Wrapper>
  )
}
