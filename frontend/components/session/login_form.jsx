import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestUser = this.guestUser.bind(this);
    this.state = {
      email: "",
      password: ""
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
    this.props.login(this.state); // should we clone state before passing it in?
  }

  guestUser(e) {
    e.preventDefault();
    const guest = { email: "guestuser@fishhook.com", password: "guestuser" };
    this.props.login(guest);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table id="login_table">
          <tbody>
            <tr>
              <td className="login_label">
                <label>Email</label>
              </td>
              <td className="login_label">
                <label>Password </label>
              </td>
            </tr>
            <tr>
              <td className="login_field">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </td>
              <td className="login_field">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <button id="login_button" type="submit">
                  Log In
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <a id="guest_link" onClick={this.guestUser}>
          No account? Continue as guest
        </a>
      </form>
    );
  }
}

export default LoginForm;
