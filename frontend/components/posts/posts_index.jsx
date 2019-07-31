import React from "react";
import LoggedInNavContainer from "../nav_bar/loggedin_nav_container";

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="posts_index_content">
        <LoggedInNavContainer />
        <div id="temp_background">
          <p id="temp_title">Howdy Folks!</p>
          <p id="temp_blurb">
            good to have ya! My here website is still under construction, which
            is why y'alls ain't seein' nu'in too excitin' on this page, BUT SOON
            this page will be full of all surts o' neat stuff, like photos of ur
            friends past-weekend hangers, and fancy maps links to all the best
            fishin' spots in town. Until then, so long!
          </p>
        </div>
      </div>
    );
  }
}
export default PostsIndex;
