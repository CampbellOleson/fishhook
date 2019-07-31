import React from "react";

const FormErrors = props => {
  if (props.errors.length > 0) {
    return (
      <div id="form_errors_container">
        <ul>
          {props.errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default FormErrors;
