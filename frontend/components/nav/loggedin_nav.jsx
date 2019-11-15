import React from "react";
import { Link } from "react-router-dom";
import RequestsContainer from "../users/requests_container";
import DynamicDropdownContainer from "./dynamic_dropdown_container";
import { debounce } from "throttle-debounce";

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRender = this.toggleRender.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
    this.dynamicDropdown = this.dynamicDropdown.bind(this);
    this.fetchSuggestionsThrottled = debounce(300, this.props.fetchSuggestions);
    this.state = {
      renderRequests: false,
      search: ""
    };
  }

  render() {
    const { currentUser, logout } = this.props;
    let showRequestContainer = null;
    if (this.state.renderRequests) {
      showRequestContainer = <RequestsContainer />;
    }
    return (
      <div id="loggedin_nav_bar">
        <div className="search_and_logo">
          <a href="/">
            <img id="logged_in_logo" src={window.fishbook_logo} />
          </a>
          <div id="nav_search_bar">
            <input
              type="text"
              placeholder="Search"
              onChange={this.updateDropdown}
            />
            <button className="search_button" />
          </div>
          {this.dynamicDropdown()}
        </div>
        <div className="logged_in_nav_links">
          <Link to={`/users/${currentUser.id}`} id="profile_link">
            {currentUser.fname.concat(" ").concat(currentUser.lname)}
          </Link>
          <Link to={`/`} id="home_link">
            Home
          </Link>
          <a id="requests_link" onClick={this.toggleRender}>
            Friend Requests
          </a>
          <a id="logout_link" onClick={logout}>
            Log Out
          </a>
          {showRequestContainer}
        </div>
      </div>
    );
  }

  dynamicDropdown() {
    return this.state.search ? <DynamicDropdownContainer /> : null;
  }

  updateDropdown(e) {
    this.props.clearSuggestions();
    let search = e.target.value;
    this.setState({ search: search });
    this.fetchSuggestionsThrottled(search);
  }

  toggleRender(e) {
    e.preventDefault();
    if (!this.state.renderRequests) {
      this.setState({ renderRequests: true });
    } else {
      this.setState({ renderRequests: false });
    }
  }
}

export default LoggedInNav;
