import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsFetching,
  fetchRedditPosts,
  getRedditPosts
} from './slice';
import { Loader } from '../../components/Loader';
import { Wrapper } from './styled';

export function RedditPosts() {
  const fetchingRedditPosts = useSelector(getIsFetching);
  const redditPosts = useSelector(getRedditPosts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedditPosts())
  }, [dispatch])

  return (
    <Wrapper loading={fetchingRedditPosts}>
      {fetchingRedditPosts ? <Loader /> : (
        <div>Hello</div>
      )}
    </Wrapper>
  )
}
