import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import http from "http";
// import * as testingUtil from "./util/api_posts_util";

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = window.currentUser
    ? {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { currentUserId: window.currentUser.id }
      }
    : {};

  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.currentUser = undefined;
});

// ping app every 5 minutes

setInterval(function() {
  http.get("http://fish-hook.herokuapp.com");
}, 300000);
