import SignupFormContainer from "./signup_container";
import LoggedOutNav from "../nav_bar/logged_out_nav";
import React from "react";

const SplashPage = () => {
  return (
    <div>
      <LoggedOutNav />
      <SignupFormContainer />
    </div>
  );
};

export default SplashPage;
