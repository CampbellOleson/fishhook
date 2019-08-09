import React from "react";
import PostIndexItem from "./post_index_item";
import PostFormContainer from "./post_form_container";

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts, currentUser, user } = this.props;
    const postForm = currentUser.id === user.id ? <PostFormContainer /> : null;
    if (posts && posts.length > 0) {
      return (
        <div className="user_posts_container">
          {postForm}
          <div className="posts_list_container">
            <ul className="posts_list">
              {posts.map((post, idx) => (
                <PostIndexItem post={post} key={idx} />
              ))}
            </ul>
          </div>
        </div>
      );
    } else
      return (
        <div className="user_posts_container">
          {postForm}
          <div className="no_posts_container">
            <p className="no_posts">
              There's nothing on your wall yet. When you create posts, you'll
              see them here.
            </p>
          </div>
        </div>
      );
  }

  componentDidMount() {
    this.props.getUserPosts(this.props.user.id);
  }
}

export default UserPosts;
