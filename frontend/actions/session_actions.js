import * as ApiSessionUtil from "../util/api_sessions_util";
import * as ApiUsersUtil from "../util/api_users_util";
export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// NOTE: should a user be removed from state when logged out?
// should state be emptied when logging out?

const receiveCurrentUser = user => ({
  type: LOGIN_CURRENT_USER,
  currentUser: user
});

const logoutCurrentUser = user => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: user
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createUser = formUser => dispatch =>
  ApiUsersUtil.createUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = formUser => dispatch =>
  ApiSessionUtil.login(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  ApiSessionUtil.logout().then(() => dispatch(logoutCurrentUser()));
