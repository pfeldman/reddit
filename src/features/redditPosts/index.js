import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsFetching,
  fetchRedditPosts,
  getRedditPosts
} from './slice';

export function RedditPosts() {
  const fetchingRedditPosts = useSelector(getIsFetching);
  const redditPosts = useSelector(getRedditPosts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedditPosts())
  }, [dispatch])

  console.log(redditPosts)

  if (fetchingRedditPosts) {
    return <span>Loading</span>
  }

  return (
    <div>Hello</div>
  );
}
