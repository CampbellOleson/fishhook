export const fetchFriends = userId => {
  return $.ajax({ method: "GET", url: `/api/users/${userId}/friendships` });
};

export const fetchRequesterIds = () => {
  return $.ajax({ method: "GET", url: `/api/friendships/requester_ids` });
};

export const fetchRequestedUserIds = () => {
  return $.ajax({ method: "GET", url: `/api/friendships/requested_user_ids` });
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
    url: `/api/users/${requesterId}/friendships`,
    data: requesterId
  });
};

// window.requestFriend = requestFriend;
// window.fetchFriends = fetchFriends;
// window.acceptRequest = acceptRequest;
// window.deleteRequest = deleteRequest;


