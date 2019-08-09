import React from "react";

class FriendButton extends React.Component {
  _isMounted = false;

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
    const {
      currentUser,
      userId,
      requestedUserIds,
      requesterIds,
      renderType,
      renderSize
    } = this.props;
    const renderClass =
      renderType === "user_show_page"
        ? "respond_buttons"
        : "requests_index_respond_buttons";
    const friendButton =
      renderSize === "mini" ? "mini_friend_button" : "friend_button";
    if (!currentUser || !userId || !requestedUserIds || !requesterIds)
      return null;
    if (currentUser.id === Number(userId)) return null;
    if (currentUser.friend_ids.includes(Number(userId))) {
      return (
        <button className="friend_button">
          <p>✔︎ Friends</p>
        </button>
      );
    } else if (requestedUserIds.includes(Number(userId))) {
      return (
        <button className="friend_button extra_width_friend_button">
          <p>✔︎ Requested</p>
        </button>
      );
    } else if (requesterIds.includes(Number(userId))) {
      return (
        <div className={renderClass}>
          <button
            className={friendButton}
            onClick={this.acceptRequestClickHandler}
          >
            ✔︎ Confirm
          </button>
          <button
            className={friendButton}
            onClick={this.deleteRequestClickHandler}
          >
            ✖︎ Delete
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="friend_button extra_width_friend_button"
          onClick={this.requestFriendClickHandler}
        >
          <p>✚ Add Friend</p>
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
    this._isMounted = true;
    this.props.getRequestInfo(this.props.state).then(() => {
      if (this._isMounted) {
        this.setState({
          requestedUserIds: this.props.requestedUserIds,
          requesterIds: this.props.requesterIds
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default FriendButton;
