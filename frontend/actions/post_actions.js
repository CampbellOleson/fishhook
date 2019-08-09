import * as ApiPostsUtil from "../util/api_posts_util";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts: posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post: post
});

export const getFeed = () => dispatch =>
  ApiPostsUtil.fetchFeed().then(posts => dispatch(receivePosts(posts)));

export const getUserPosts = userId => dispatch =>
  ApiPostsUtil.fetchUserPosts(userId).then(posts =>
    dispatch(receivePosts(posts))
  );

export const createPost = formPost => dispatch =>
  ApiPostsUtil.createPost(formPost).then(post =>
    dispatch(receivePost({ [post.id]: post }))
  );
