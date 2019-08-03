import React from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../../reducers/selectors";

const LoggedInNav = props => {
  return (
    <div id="loggedin_nav_bar">
      <a href="/">
        <img className="logo" src={window.fishbook_logo} />
      </a>
      <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
      <button id="logout_button" onClick={props.logout}>
        Log Out
      </button>
    </div>
  );
};

export default LoggedInNav;
