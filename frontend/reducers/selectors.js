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
