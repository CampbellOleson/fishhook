import React from "react";
import { Link } from "react-router-dom";

class DynamicDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.suggestions.length > 0 ? (
      <div className="search-dropdown">
        <div id="search-header">
          <p>Find Users</p>
        </div>
        <ul>
          {this.props.suggestions.map((user, idx) => {
            return <SearchIndexItem key={idx} user={user} />;
          })}
        </ul>
      </div>
    ) : (
      <div className="search-dropdown">
        <div id="search-header">
          <p>Find Users</p>
        </div>
        <p id="no-results">No results</p>
      </div>
    );
  }
}

const SearchIndexItem = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="search-index-link">
      <li className="search-index-item">{`${user.fname} ${user.lname}`}</li>
    </Link>
  );
};

export default DynamicDropdown;
