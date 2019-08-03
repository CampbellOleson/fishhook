import { connect } from "react-redux";
import React from "react";
import LoggedInNavContainer from "./loggedin_nav_container";
import LoggedOutNav from "./loggedout_nav";
import { currentUser } from "../../reducers/selectors";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.entities.users[state.session.currentUserId])
});

const Nav = props => {
  return props.loggedIn ? <LoggedInNavContainer /> : <LoggedOutNav />;
};

const NavBarContainer = connect(mapStateToProps)(Nav);
export default NavBarContainer;
