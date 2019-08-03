import * as ApiFriendRequestUtil from "../util/api_friend_request_util";
import { receiveUsers } from "../actions/user_actions";
export const RECEIVE_REQUESTED_USER_IDS = "RECEIVE_REQUESTED_USER_IDS";
export const APPROVE_FRIEND_REQUEST = "APPROVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
export const RECEIVE_REQUESTER_IDS = "RECEIVE_REQUESTER_IDS";

const receiveRequesterIds = ids => ({
  type: RECEIVE_REQUESTER_IDS,
  ids
});

const receiveRequestedUserIds = ids => ({
  type: RECEIVE_REQUESTED_USER_IDS,
  ids
});

const approveFriendRequest = request => ({
  type: APPROVE_FRIEND_REQUEST,
  request
});

const removeFriendRequest = request => ({
  type: REMOVE_FRIEND_REQUEST,
  request
});

export const getFriends = userId => dispatch =>
  ApiFriendRequestUtil.fetchFriends(userId).then(
    friends => dispatch(receiveUsers(friends)) // error cb needed
  );

export const getRequesterIds = () => dispatch =>
  ApiFriendRequestUtil.fetchRequesterIds().then(
    ids => dispatch(receiveRequesterIds(ids)) // error cb needed
  );

export const getRequestedUserIds = () => dispatch =>
  ApiFriendRequestUtil.fetchRequestedUserIds().then(
    ids => dispatch(receiveRequestedUserIds(ids)) // error cb needed
  );

export const issueFriendRequest = userId => dispatch =>
  ApiFriendRequestUtil.requestFriend(userId).then(
    () => dispatch(receiveRequestedUserIds([userId])) // error cb needed
  );

export const acceptFriendRequest = requesterId => dispatch =>
  ApiFriendRequestUtil.acceptRequest(requesterId).then(
    request => dispatch(approveFriendRequest(request)) // error cb needed
  );

export const deleteFriendRequest = requesterId => dispatch =>
  ApiFriendRequestUtil.deleteRequest(requesterId).then(
    request => dispatch(removeFriendRequest(request)) // error cb needed
  );

// window.getFriends = getFriends; // good
// window.getRequesterIds = getRequesterIds; // good
// window.acceptFriendRequest = acceptFriendRequest; // good
// window.issueFriendRequest = issueFriendRequest; // good
// window.getRequestedUserIds = getRequestedUserIds; // good
// window.deleteFriendRequest = deleteFriendRequest; // good
