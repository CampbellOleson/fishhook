import SignupFormContainer from "./signup_container";
import LoggedOutNav from "../nav_bar/logged_out_nav";
import React from "react";
import Footer from "../footer";

const SplashPage = () => {
  return (
    <div>
      <LoggedOutNav />
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
