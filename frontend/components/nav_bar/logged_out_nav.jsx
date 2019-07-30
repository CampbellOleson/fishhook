import React from "react";
import LoginFormContainer from "../session/login_container";

const LoggedOutNav = props => {
  return (
    <div className="loggedout_nav_bar">
      <p id="logged_out_nav_bar_logo">FishBook</p>
      <LoginFormContainer />
    </div>
  );
};

export default LoggedOutNav;
