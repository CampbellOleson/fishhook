import { merge } from "lodash";
import { LOGIN_CURRENT_USER } from "../../actions/session_actions";
import { APPROVE_FRIEND_REQUEST } from "../../actions/friend_request_actions";
import {
  RECEIVE_USER_DETAIL,
  RECEIVE_USERS,
  DELETE_USER
} from "../../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return merge({}, state, { [action.user.id]: action.user });
    case LOGIN_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case APPROVE_FRIEND_REQUEST:
      const currentUser = state[action.request.requested_id];
      const newFriendId = action.request.requester_id;
      if (state[newFriendId].friend_ids) {
        state[newFriendId].friend_ids.push(currentUser.id);
      }
      currentUser.friend_ids.push(newFriendId);
      return merge({}, state, { [currentUser.id]: currentUser });
    case DELETE_USER:
      const newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

// line 24 conditional is here to handle case of accepting friend request from dropdown menu
// we don't have to update state right away and add ourselved to their friend id, it will be loaded
// if we veiw their detail aka friends list
