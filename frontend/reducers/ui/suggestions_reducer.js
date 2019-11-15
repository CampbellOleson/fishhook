import {
  RECEIVE_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from "../../actions/suggestion_actions";
import { merge } from "lodash";

const suggestionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUGGESTIONS:
      return merge({}, state, action.suggestions);
    case CLEAR_SUGGESTIONS:
      return {};
    default:
      return state;
  }
};

export default suggestionsReducer;
