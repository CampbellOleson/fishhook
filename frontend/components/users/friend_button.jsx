import React from "react";

class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.requestFriendClickHandler = this.requestFriendClickHandler.bind(this);
    this.deleteRequestClickHandler = this.deleteRequestClickHandler.bind(this);
    this.acceptRequestClickHandler = this.acceptRequestClickHandler.bind(this);
    this.state = {
      requestedUserIds: [],
      requesterIds: []
    };
  }

  render() {
    const { currentUser, userId, requestedUserIds, requesterIds } = this.props;
    if (!currentUser || !userId || !requestedUserIds || !requesterIds)
      return null;
    if (currentUser.id === Number(userId)) return null;
    if (currentUser.friend_ids.includes(Number(userId))) {
      return <button id="friend_button">Friends</button>;
    } else if (requestedUserIds.includes(Number(userId))) {
      return (
        <button id="friend_button" onClick={this.deleteRequestClickHandler}>
          Requested
        </button>
      );
    } else if (requesterIds.includes(Number(userId))) {
      return (
        <div id="friend_button">
          <button id="accept_request" onClick={this.acceptRequestClickHandler}>
            Confirm
          </button>
          <button id="delete_request" onClick={this.deleteRequestClickHandler}>
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <button id="friend_button" onClick={this.requestFriendClickHandler}>
          Add Friend
        </button>
      );
    }
  }

  requestFriendClickHandler(e) {
    e.preventDefault();
    this.props.requestFriend(this.props.userId);
  }

  acceptRequestClickHandler(e) {
    e.preventDefault();
    this.props.acceptRequest(this.props.userId, this.props.state);
  }

  deleteRequestClickHandler(e) {
    e.preventDefault();
    this.props.deleteRequest(this.props.userId);
  }

  componentDidMount() {
    this.props.getRequestInfo(this.props.state).then(() =>
      this.setState({
        requestedUserIds: this.props.requestedUserIds,
        requesterIds: this.props.requesterIds
      })
    );
  }
}

export default FriendButton;
