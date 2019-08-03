import { connect } from "react-redux";
import LoggedInNav from "./loggedin_nav";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const LoggedInNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInNav);

export default LoggedInNavContainer;
