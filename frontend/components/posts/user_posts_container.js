import UserPosts from "./user_posts";
import { connect } from "react-redux";
import { allUserPosts } from "../../reducers/selectors";
import { getUserPosts } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    posts: allUserPosts(state.entities.posts, ownProps.user),
    currentUser: state.entities.users[state.session.currentUserId],
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => ({
  getUserPosts: id => dispatch(getUserPosts(id))
});

const UserPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);

export default UserPostsContainer;
