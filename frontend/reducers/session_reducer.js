import {
  LOGIN_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import { DELETE_USER } from "../actions/user_actions";

const _nullSession = {
  currentUserId: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGIN_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case DELETE_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;
