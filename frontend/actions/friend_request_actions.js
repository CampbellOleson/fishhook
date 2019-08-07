import * as ApiFriendRequestUtil from "../util/api_friend_request_util";
import { receiveUsers } from "../actions/user_actions";
export const RECEIVE_REQUESTED_USER_ID = "RECEIVE_REQUESTED_USER_ID";
export const APPROVE_FRIEND_REQUEST = "APPROVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
export const RECEIVE_REQUESTER_IDS = "RECEIVE_REQUESTER_IDS";
export const RECEIVE_REQUEST_INFO = "RECEIVE_REQUEST_INFO";

const receiveRequestInfo = info => ({
  type: RECEIVE_REQUEST_INFO,
  requestedUserIds: info["requested_user_ids"],
  requesterIds: info["requester_ids"]
});

const receiveRequestedUserId = id => ({
  type: RECEIVE_REQUESTED_USER_ID,
  id: Number(id)
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

export const getRequesters = () => dispatch =>
  ApiFriendRequestUtil.fetchRequesters().then(requesters =>
    dispatch(receiveUsers(requesters))
  );

export const getRequestInfo = () => {
  return dispatch => {
    return ApiFriendRequestUtil.fetchRequestInfo().then(info => {
      return dispatch(receiveRequestInfo(info));
    });
  };
};

export const issueFriendRequest = userId => dispatch =>
  ApiFriendRequestUtil.requestFriend(userId).then(
    () => dispatch(receiveRequestedUserId(userId)) // error cb needed
  );

export const acceptFriendRequest = requesterId => {
  return dispatch => {
    return ApiFriendRequestUtil.acceptRequest(requesterId).then(request => {
      return dispatch(approveFriendRequest(request));
    });
  };
};

export const deleteFriendRequest = requesterId => dispatch =>
  ApiFriendRequestUtil.deleteRequest(requesterId).then(
    request => dispatch(removeFriendRequest(request)) // error cb needed
  );

// window.getFriends = getFriends; // good
// window.acceptFriendRequest = acceptFriendRequest; // good
// window.issueFriendRequest = issueFriendRequest; // good
// window.deleteFriendRequest = deleteFriendRequest; // good
// window.getRequestInfo = getRequestInfo;
window.getRequesters = getRequesters;
