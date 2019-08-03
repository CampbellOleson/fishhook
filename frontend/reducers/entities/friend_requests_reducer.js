import { merge } from "lodash";
import {
  RECEIVE_REQUESTER_IDS,
  RECEIVE_REQUESTED_USER_IDS,
  APPROVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST
} from "../../actions/friend_request_actions";

const _defaultState = {
  incomingRequests: [],
  requestedUserIds: []
};

const friendRequestsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REQUESTER_IDS:
      return merge({}, state, { incomingRequests: action.ids });
    case RECEIVE_REQUESTED_USER_IDS:
      return merge({}, state, { requestedUserIds: action.ids });
    case APPROVE_FRIEND_REQUEST:
      const newState = Object.assign({}, state);
      const i = action.request.requester_id;
      newState.incomingRequests.splice(newState.incomingRequests.indexOf(i), 1);
      return newState;
    case REMOVE_FRIEND_REQUEST:
      const otherState = Object.assign({}, state);
      const idx = action.request.requester_id;
      otherState.incomingRequests.splice(
        otherState.incomingRequests.indexOf(idx),
        1
      );
      return otherState;
    default:
      return state;
  }
};

export default friendRequestsReducer;
