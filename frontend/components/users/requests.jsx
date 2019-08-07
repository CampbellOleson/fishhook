import React from "react";
import UserIndexItem from "./user_index_item";

class Requests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.requesters.length > 0 ? (
      <div>
        <ul>
          {this.props.requesters.map((user, idx) => (
            <UserIndexItem user={user} key={idx} />
          ))}
        </ul>
      </div>
    ) : (
      <div>No requests</div>
    );
  }

  componentDidMount() {
    this.props.getRequesters();
    this.props.getRequestInfo();
  }
}

export default Requests;
