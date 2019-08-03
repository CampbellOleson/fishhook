import React from "react";
import ProfileContent from "./profile_content";
import { Link } from "react-router-dom";

class ProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.renderFriends = this.renderFriends.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.state = {
      toRender: "posts"
    };
  }

  render() {
    return (
      <div>
        <span>Cover photo</span>
        <span>Profile Photo</span>
        <div>Profile Nav</div>
        <button onClick={this.renderFriends}>Friends</button>
        <button onClick={this.renderPosts}>Posts</button>
        <ProfileContent toRender={this.state.toRender} user={this.props.user} />
      </div>
    );
  }

  componentDidMount() {
    this.props.getFriends(this.props.user.id);
    this.props.fetchUser(this.props.user.id);
  }

  // componentDidUpdate() {
  //   this.props.fetchUser(this.props.user.id);
  // }

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
