import { merge } from "lodash";
import {
  RECEIVE_REQUEST_INFO,
  RECEIVE_REQUESTED_USER_ID,
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
    case RECEIVE_REQUEST_INFO:
      return merge({}, state, {
        incomingRequests: action.requesterIds,
        requestedUserIds: action.requestedUserIds
      });
    case RECEIVE_REQUESTED_USER_ID:
      const _state = merge({}, state);
      _state.requestedUserIds.push(action.id);
      return _state;
    case APPROVE_FRIEND_REQUEST:
      const _newState = merge({}, state);
      const el = action.request.requester_id;
      _newState.incomingRequests.splice(
        _newState.incomingRequests.indexOf(el),
        1
      );
      return _newState;
    case REMOVE_FRIEND_REQUEST:
      const _otherState = merge({}, state);
      const _el = action.request.requester_id;
      _otherState.incomingRequests.splice(
        _otherState.incomingRequests.indexOf(_el),
        1
      );
      return _otherState;
    default:
      return state;
  }
};

export default friendRequestsReducer;
