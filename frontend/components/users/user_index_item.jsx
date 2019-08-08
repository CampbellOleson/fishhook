import React from "react";
import { Link } from "react-router-dom";
import FriendButtonContainer from "./friend_button_container";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderType = this.props.renderType;
    const renderSize = renderType === "requesters" ? "mini" : "standard";
    const profilePhoto =
      renderType === "friends"
        ? "friend_profile_photo"
        : "requester_profile_photo";
    const fullName =
      renderType === "friends" ? "friend_full_name" : "requester_full_name";
    const friendButton =
      renderType === "friends"
        ? "friends_index_friend_button"
        : "requester_friend_button";
    const userIndexItem =
      renderType === "friends" ? "friend_index_item" : "requester_index_item";
    const userIndexLink =
      renderType === "friends" ? "friend_index_link" : "requester_index_link";
    return (
      <li className={userIndexItem}>
        <Link to={`/users/${this.props.user.id}`} className={userIndexLink}>
          <div className={profilePhoto} />
          <div className={fullName}>
            <p>
              {this.props.user.fname.concat(" ").concat(this.props.user.lname)}
            </p>
          </div>
        </Link>
        <div className={friendButton}>
          <FriendButtonContainer
            user={this.props.user}
            renderSize={renderSize}
          />
        </div>
      </li>
    );
  }
}

export default UserIndexItem;
