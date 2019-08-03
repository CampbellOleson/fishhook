import React from "react";
import FriendIndexItem from "./friend_index_item";

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.friends.length > 0 ? (
      <div>
        <p>Friends:</p>
        <ul>
          {this.props.friends.map((friend, idx) => (
            <FriendIndexItem
              friend={friend}
              key={idx}
              fetchUser={this.props.fetchUser}
            />
          ))}
        </ul>
      </div>
    ) : (
      <p>No friends yet</p>
    );
  }

  componentDidMount() {
    this.props.getFriends(this.props.user.id);
  }
}

export default Friends;
