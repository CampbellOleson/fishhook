import React from "react";
import PostIndexItem from "./post_index_item";
import PostFormContainer from "./post_form_container";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts;
    return posts.length > 0 ? (
      <div className="feed_container">
        <PostFormContainer />
        <div className="posts_list_container">
          <ul className="posts_list">
            {posts.map((post, idx) => (
              <PostIndexItem post={post} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="feed_container">
        <PostFormContainer />
        <div className="no_posts_container">
          <p className="no_posts">
            There's nothing in your feed yet. When you and your friends create
            posts, you'll see them here.
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getFeed();
  }
}
export default Feed;
