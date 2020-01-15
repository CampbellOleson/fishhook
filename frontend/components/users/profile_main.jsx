import React from "react";
import ProfileContent from "./profile_content";
import FriendButtonContainer from "./friend_button_container";

class ProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.renderFriends = this.renderFriends.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.state = {
      toRender: "posts",
      userId: undefined
    };
  }

  render() {
    return this.props.user ? (
      <div className="main_profile_column">
        <div className="cover_photo_container">
          {/* <button id="cover-upload-button" class="floating-upload-button">
            Add Cover Photo
          </button> */}
          <div className="user_overlay">
            <div className="profile_photo_container" />
            {/* <button id="profile-upload-button" class="floating-upload-button">
              Add Profile Photo
            </button> */}
            <p className="user_full_name">
              {this.props.user.fname.concat(" ").concat(this.props.user.lname)}
            </p>
            <div className="friend_button_container">
              <FriendButtonContainer renderType="user_show_page" />
            </div>
          </div>
        </div>
        <div className="profile_nav">
          <a id="posts_toggle_container" onClick={this.renderPosts}>
            <p>Posts</p>
          </a>
          <a id="friends_toggle_container" onClick={this.renderFriends}>
            <p>Friends</p>
          </a>
        </div>
        <ProfileContent toRender={this.state.toRender} user={this.props.user} />
        <div id="profile_footer" />
      </div>
    ) : null;
  }

  componentDidMount() {
    this.props
      .fetchUser(this.props.match.params.userId)
      .then(() => this.props.getFriends(this.props.match.params.userId));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props
        .fetchUser(this.props.match.params.userId)
        .then(() => this.props.getFriends(this.props.match.params.userId))
        .then(() => this.setState({ toRender: "posts" }));
    }
  }

  renderFriends(e) {
    e.preventDefault();
    this.setState({
      toRender: "friends"
    });
  }

  renderPosts(e) {
    e.preventDefault();
    this.setState({
      toRender: "posts"
    });
  }
}

export default ProfileMain;
