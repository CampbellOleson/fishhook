import Feed from "./feed";
import { connect } from "react-redux";
import { getFeed } from "../../actions/post_actions";
import { allPosts } from "../../reducers/selectors";

const mapStateToProps = state => {
  return {
    posts: allPosts(state.entities.posts)
  };
};

const mapDispatchToProps = dispatch => ({
  getFeed: () => dispatch(getFeed())
});

const FeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default FeedContainer;
