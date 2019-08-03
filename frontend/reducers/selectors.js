export const allFriends = (users, friendsIds) => {
  users = Object.values(users);
  const friends = [];
  if (users.length > 1) {
    users.forEach(user => {
      if (friendsIds.includes(user.id)) friends.push(user);
    });
  }
  return friends;
};
