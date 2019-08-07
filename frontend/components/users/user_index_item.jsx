import React from "react";
import { Link } from "react-router-dom";
import FriendButtonContainer from "./friend_button_container";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/users/${this.props.user.id}`}>
          <ul>
            <li>
              <span>Profile Photo</span>
            </li>
            <li>{this.props.user.fname}</li>
            <li>{this.props.user.lname}</li>
          </ul>
        </Link>
        <FriendButtonContainer user={this.props.user} />
      </li>
    );
  }
}

export default UserIndexItem;
