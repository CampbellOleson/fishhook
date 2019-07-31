import SignupFormContainer from "./signup_container";
import LoggedOutNav from "../nav_bar/loggedout_nav";
import React from "react";
import Footer from "../footer";
import FormErrorsContainer from "./errors/form_errors_container";

const SplashPage = () => {
  return (
    <div>
      <LoggedOutNav />
      <FormErrorsContainer />
      <div className="splash_background">
        <div className="splash_body">
          <div id="fishhook_blurb_container">
            <p id="fishhook_blurb">
              Sign up to discover new spots and share your best catches!
            </p>
          </div>
          <SignupFormContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SplashPage;
