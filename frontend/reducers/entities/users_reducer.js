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
