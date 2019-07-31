import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";

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

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.currentUser = undefined;
});
