import * as ApiUsersUtil from "../util/api_users_util";
export const RECEIVE_USER_DETAIL = "RECEIVE_USER_DETAIL";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const DELETE_USER = "DELETE_USER";

export const receiveUserDetail = user => ({
  type: RECEIVE_USER_DETAIL,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const removeUser = id => ({
  type: DELETE_USER,
  userId: id
});

export const fetchUser = userId => dispatch =>
  ApiUsersUtil.fetchUser(userId).then(user =>
    dispatch(receiveUserDetail(user))
  );

export const fetchUsers = () => dispatch =>
  ApiUsersUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));

export const updateUser = formUser => dispatch =>
  ApiUsersUtil.updateUser(formUser).then(user =>
    dispatch(receiveUserDetail(user))
  );

export const deleteUser = userId => dispatch =>
  ApiUsersUtil.deleteUser(userId).then(() => dispatch(removeUser(userId)));
