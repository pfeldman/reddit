import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getActivePost } from './slice'
import { ConditionalVisible, LoaderContainer, NoPostWrapper, Post } from './styled'
import { getIsFetching } from '../redditPosts/slice'
import { Loader } from '../../components/Loader'

export const ActivePost = () => {
  const post = useSelector(getActivePost)
  const fetchingRedditPosts = useSelector(getIsFetching)
  const { payload: activePost } = post || {}
  const [loading, setLoading] = useState(false)
  const { url: postUrl } = activePost || {}
  const [url, setUrl] = useState((postUrl || '').replace(/.gifv$/, '.gif'))

  useEffect(() => {
    setLoading(true)
  }, [post])

  useEffect(() => {
    setUrl((postUrl || '').replace(/.gifv$/, '.gif'))
  }, [postUrl])

  if (!activePost || fetchingRedditPosts) {
    return (
      <NoPostWrapper>
        <span>Select a post from the left to begin</span>
      </NoPostWrapper>
    )
  }

  const handleImageLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    setUrl(activePost.thumbnail)
  }

  return (
    <Post>
      <ConditionalVisible visible={loading}>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </ConditionalVisible>
      <ConditionalVisible visible={!loading}>
        <h2>{activePost.author}</h2>
        <img src={url} alt='main' onLoad={handleImageLoad} onError={handleError} />
        <p>{activePost.title}</p>
      </ConditionalVisible>
    </Post>
  )
}
