import React from "react";
import UserIndexItem from "./user_index_item";

class Requests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.requesters.length > 0 ? (
      <div className="friend_requests_dropdown">
        <div id="requests_header">
          <p>Friend Requests</p>
        </div>
        <ul>
          {this.props.requesters.map((user, idx) => (
            <UserIndexItem user={user} key={idx} renderType={"requesters"} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="friend_requests_dropdown">
        <div id="requests_header">
          <p>Friend Requests</p>
        </div>
        <p id="no_requests">No requests</p>
      </div>
    );
  }

  componentDidMount() {
    this.props.getRequesters();
    this.props.getRequestInfo();
  }
}

export default Requests;
