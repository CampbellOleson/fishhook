import React from "react";
import LoginFormContainer from "../session/login_container";

const LoggedOutNav = props => {
  return (
    <div id="loggedout_nav_bar">
      <a href="/">
        <img id="logged_out_logo" src={window.fishbook_logo} />
      </a>
      <LoginFormContainer />
    </div>
  );
};

export default LoggedOutNav;
