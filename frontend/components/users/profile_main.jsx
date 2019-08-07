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
      <div>
        <div>
          <p>{this.props.user.fname}</p>
          <p>{this.props.user.lname}</p>
          <p>{this.props.user.bio}</p>
        </div>
        <FriendButtonContainer />
        <div>Profile Nav</div>
        <button onClick={this.renderFriends}>Friends</button>
        <button onClick={this.renderPosts}>Posts</button>
        <ProfileContent toRender={this.state.toRender} user={this.props.user} />
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
