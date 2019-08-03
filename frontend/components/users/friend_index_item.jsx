import React from "react";
import { Link } from "react-router-dom";

class FriendIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriendLink = this.handleFriendLink.bind(this);
  }

  render() {
    return (
      <li onClick={this.handleFriendLink}>
        <Link to={`/users/${this.props.friend.id}`}>
          <ul>
            <li>
              <span>Profile Photo</span>
            </li>
            <li>{this.props.friend.fname}</li>
            <li>{this.props.friend.lname}</li>
          </ul>
          <div>
            <button>√ Friends</button>
          </div>
        </Link>
      </li>
    );
  }

  handleFriendLink(e) {
    e.preventDefault();
    this.props.fetchUser(this.props.friend.id);
  }
}

export default FriendIndexItem;
