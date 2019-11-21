import React from "react";
import StyledDropzone from "../util/StyledDropzone";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.currentUser.id,
      coverPhoto: null,
      profilePhoto: null,
      email: this.props.currentUser.email,
      bio: this.props.currentUser.bio || ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  render() {
    return (
      <div className="edit-page-container">
        <div className="edit-header">
          <p>Complete Your Profile</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="edit-content-container">
            <StyledDropzone type={"cover"} />
            <StyledDropzone type={"profile"} />
            <div className="edit-inputs-container">
              <input
                type="email"
                name="email"
                id="edit-email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <textarea
                type="text"
                name="bio"
                id="edit-bio"
                value={this.state.bio}
                onChange={this.handleChange}
                placeholder="A little bit about yourself ..."
              />
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
