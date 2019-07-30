import { merge } from "lodash";
import { LOGIN_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER_DETAIL,
  RECEIVE_USERS,
  DELETE_USER
} from "../actions/user_actions";

// NOTE: the userReducer's job is to add user info to state -- add a case for any time we want to
// add user info to state (either user detail or users index)

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return merge({}, state, { [action.user.id]: action.user });
    case LOGIN_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case DELETE_USER:
      const newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
