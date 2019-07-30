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
      <div className="create_account_outer_div">
        <ul className="create_account_ul">
          <li>Create a New Account</li>
          <form onSubmit={this.handleSubmit}>
            <li className="create_account_names_li">
              <span>
                <input
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  placeholder="First name"
                  onChange={this.handleChange}
                />
              </span>
              <span>
                <input
                  type="text"
                  name="lname"
                  value={this.state.lname}
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
              </span>
            </li>
            <li>
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </li>
            <button type="submit">Sign Up</button>
          </form>
        </ul>
      </div>
    );
  }
}

// not sure if placeholders will be overwritten by values

export default SignupForm;
