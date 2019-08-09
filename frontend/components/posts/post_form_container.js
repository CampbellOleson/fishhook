import PostForm from "./post_form";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  createPost: formPost => dispatch(createPost(formPost))
});

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default PostFormContainer;
