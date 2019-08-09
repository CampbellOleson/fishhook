import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import friendRequestsReducer from "./friend_requests_reducer";
import postsReducer from "./posts_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  friendRequests: friendRequestsReducer
});

export default entitiesReducer;
