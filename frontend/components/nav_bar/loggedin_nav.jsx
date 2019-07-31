import React from "react";

const LoggedInNav = props => {
  return (
    <div id="loggedin_nav_bar">
      <a href="/">
        <img className="logo" src={window.fishbook_logo} />
      </a>
      <button id="logout_button" onClick={props.logout}>
        Log Out
      </button>
    </div>
  );
};

export default LoggedInNav;
