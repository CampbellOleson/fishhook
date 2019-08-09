import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      location_url: ""
    };
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="post_form_container">
        <div className="post_form_header">
          <p>Create Post</p>
        </div>
        <form onSubmit={this.handleSubmit} className="post_form">
          <textarea
            className="post_body"
            type="text"
            value={this.state.body}
            name="body"
            onChange={this.handleChange}
            placeholder={`What's on your mind, ${currentUser.fname}?`}
            rows="4"
            cols="60"
          />
          <button type="submit" className="post_submit_button">
            Post
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(
      this.setState({
        body: "",
        location_url: ""
      })
    );
  }
}

export default PostForm;
