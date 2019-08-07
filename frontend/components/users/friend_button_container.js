import FriendButton from "./friend_button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  issueFriendRequest,
  acceptFriendRequest,
  deleteFriendRequest,
  getRequestInfo
} from "../../actions/friend_request_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    userId: ownProps.user ? ownProps.user.id : ownProps.match.params.userId,
    requestedUserIds: state.entities.friendRequests.requestedUserIds,
    requesterIds: state.entities.friendRequests.incomingRequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestFriend: userId => dispatch(issueFriendRequest(userId)),
    acceptRequest: userId => dispatch(acceptFriendRequest(userId)),
    deleteRequest: userId => dispatch(deleteFriendRequest(userId)),
    getRequestInfo: () => dispatch(getRequestInfo())
  };
};

const FriendButtonContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendButton)
);
export default FriendButtonContainer;
