import { RECEIVE_POSTS, RECEIVE_POST } from "../../actions/post_actions";
import { merge } from "lodash";

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, action.post);
    default:
      return state;
  }
};

export default postsReducer;
