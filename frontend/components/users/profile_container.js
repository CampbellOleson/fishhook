import ProfileMain from "./profile_main";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFriends } from "../../actions/friend_request_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.entities.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  getFriends: id => dispatch(getFriends(id))
});

const ProfileContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileMain)
);

export default ProfileContainer;
