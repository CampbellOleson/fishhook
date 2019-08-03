import ProfileMain from "./profile_main";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { getFriends } from "../../actions/friend_request_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  getFriends: id => dispatch(getFriends(id))
});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMain);

export default ProfileContainer;
