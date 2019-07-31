// NOTE: this is extra functionality that will allow me to render seperate login and signup errors
// implimenting this requires seperate action creatiors for login and create user, and a session signup
// errors slice of state as well as a session login slice of state

import React from "react";

const SignupErrors = props => {
  if (props.errors.length > 0 && props.type === "signup_errors") {
    return (
      <div id="signup_errors_container">
        <ul>
          {props.errors.map(error => (
            <li>{error}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default SignupErrors;
