import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      bio: ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.setState({
      [field]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state); // should we clone state before passing it in?
  } // do we need to clear inputs, or is the redirect enough?

  render() {
    return (
      <div id="signup_form_outer_div">
        <p id="signup_form_text">Create a New Account</p>
        <p id="signup_form_subheader">It's quick and easy</p>
        <form onSubmit={this.handleSubmit} id="signup_form">
          <div id="full_name_field" className="form_input_div">
            <div className="name_field">
              <input
                type="text"
                name="fname"
                value={this.state.fname}
                placeholder="First name"
                onChange={this.handleChange}
              />
            </div>
            <div className="name_field">
              <input
                type="text"
                name="lname"
                value={this.state.lname}
                placeholder="Last name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="full_field form_input_div">
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="full_field form_input_div">
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" id="sign_up_button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

// not sure if placeholders will be overwritten by values

export default SignupForm;
