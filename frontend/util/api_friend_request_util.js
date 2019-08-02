export const requestFriend = id => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${id}/friendships`
  });
};

export const acceptRequest = id => {
  return $.ajax({ method: "PATCH", url: `/api/friendships/${id}` });
};

export const deleteRequest = id => {
  return $.ajax({ method: "DELETE", url: `/api/friendships/${id}` });
};

window.requestFriend = requestFriend;
window.acceptRequest = acceptRequest;
window.deleteRequest = deleteRequest;
