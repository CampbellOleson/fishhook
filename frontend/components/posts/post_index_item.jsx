import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <li className="post_list_item">
        <div className="post_container">
          <div className="poster_container">
            <Link to={`/users/${post.poster_id}`} className="feed_user_link">
              <div className="post_profile_photo" />
              <p>{post.poster_fname.concat(" ").concat(post.poster_lname)}</p>
            </Link>
          </div>
          <div className="post_body_container">
            <p className="post_body">{post.body}</p>
          </div>
          <div className="comment_form_container">Comment here</div>
          <div className="post_footstopper" />
        </div>
      </li>
    );
  }
}

export default PostIndexItem;
