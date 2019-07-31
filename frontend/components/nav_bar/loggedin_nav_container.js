import { connect } from "react-redux";
import LoggedInNav from "./loggedin_nav";
import { logout } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const LoggedInNavContainer = connect(
  null,
  mapDispatchToProps
)(LoggedInNav);

export default LoggedInNavContainer;
