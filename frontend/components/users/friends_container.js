import { connect } from "react-redux";
import { allFriends } from "../../reducers/selectors";
import { getFriends } from "../../actions/friend_request_actions";
import Friends from "./friends";
import { fetchUser } from "../../actions/user_actions"; // resolve naming conflict

const mapStateToProps = (state, ownProps) => {
  return {
    friends: allFriends(state.entities.users, ownProps.user.friend_ids),
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => ({
  getFriends: id => dispatch(getFriends(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);

export default FriendsContainer;
