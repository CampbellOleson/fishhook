export const fetchFeed = () => {
  return $.ajax({
    method: "GET",
    url: "/api/feed"
  });
};

export const fetchUserPosts = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/posts`
  });
};

export const createPost = post => {
  return $.ajax({ method: "POST", url: "/api/posts", data: { post } });
};

// const updatePost = () => ({
//   method: "PATCH",
//   url: "/api/posts"
// });

// const deletePost = () => ({
//   method: "DELETE",
//   url: "/api/posts"
// });
