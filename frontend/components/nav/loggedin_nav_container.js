import { connect } from "react-redux";
import LoggedInNav from "./loggedin_nav";
import { logout } from "../../actions/session_actions";
import {
  fetchSuggestions,
  clearSuggestions
} from "../../actions/suggestion_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSuggestions: searchText => dispatch(fetchSuggestions(searchText)),
  clearSuggestions: searchText => dispatch(clearSuggestions())
});

const LoggedInNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInNav);

export default LoggedInNavContainer;
