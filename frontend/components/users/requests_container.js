import { connect } from "react-redux";
import { allRequesters } from "../../reducers/selectors";
import {
  getRequesters,
  getRequestInfo
} from "../../actions/friend_request_actions";
// import { withRouter } from "react-router-dom";
import Requests from "./requests";

const mapStateToProps = state => {
  return {
    requesters: allRequesters(
      state.entities.users,
      state.entities.friendRequests.incomingRequests
    )
  };
};

const mapDispatchToProps = dispatch => ({
  getRequesters: () => dispatch(getRequesters()),
  getRequestInfo: () => dispatch(getRequestInfo())
});

const RequestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests);
export default RequestsContainer;
