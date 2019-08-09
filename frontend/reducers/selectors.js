export const allFriends = (users, friendsIds) => {
  users = Object.values(users);
  const friends = [];
  if (users.length > 1 && friendsIds) {
    users.forEach(user => {
      if (friendsIds.includes(user.id)) friends.push(user);
    });
  }
  return friends;
};

export const allRequesters = (users, requesterIds) => {
  users = Object.values(users);
  const requesters = [];
  if (users.length > 1 && requesterIds.length > 0) {
    users.forEach(user => {
      if (requesterIds.includes(user.id)) requesters.push(user);
    });
  }
  return requesters;
};

export const allPosts = postsObj => {
  const ids = Object.keys(postsObj);
  ids.sort((a, b) => b - a);
  const postsArr = ids.map(id => postsObj[id]);
  return postsArr;
};

export const allUserPosts = (postsObj, user) => {
  const ids = Object.keys(postsObj);
  const userIds = [];
  if (ids.length > 0 && user.post_ids) {
    ids.forEach(id => {
      id = Number(id);
      if (user.post_ids.includes(id)) {
        userIds.push(id);
      }
    });
    userIds.sort((a, b) => b - a);
    const postsArr = userIds.map(id => postsObj[id]);
    return postsArr;
  }
};
