import React from "react";
import UserIndexItem from "./user_index_item";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return this.props.friends.length > 0 ? (
      <div id="friends_content">
        <div id="friends_header">
          <p id="friends_title">Friends</p>
        </div>
        <ul>
          {this.props.friends.map((user, idx) => (
            <UserIndexItem user={user} key={idx} renderType={"friends"} />
          ))}
        </ul>
        <div id="friends_content_footer" />
      </div>
    ) : (
      <div id="friends_content">
        <div id="friends_header">
          <p id="friends_title">Friends</p>
        </div>
        <div id="no_friends_container">
          <p id="no_friends_yet">No friends yet</p>
        </div>
        <div id="no_friends_footer" />
      </div>
    );
  }

  componentDidMount() {
    this.props.getFriends(this.props.user.id);
  }
}

export default Friends;
