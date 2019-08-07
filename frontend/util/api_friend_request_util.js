export const fetchFriends = userId => {
  return $.ajax({ method: "GET", url: `/api/users/${userId}/friendships` });
};

export const fetchRequestInfo = () => {
  return $.ajax({ method: "GET", url: `/api/friendships/requests` });
};

export const fetchRequesters = () => {
  return $.ajax({ method: "GET", url: `/api/friendships/requesters` });
};

export const requestFriend = userId => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/friendships`
  });
};

export const acceptRequest = requesterId => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${requesterId}/friendships`
  });
};

export const deleteRequest = requesterId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${requesterId}/friendships`
  });
};
