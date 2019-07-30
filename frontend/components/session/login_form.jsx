import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <label>Password </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <button type="submit">Log In</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default LoginForm;
