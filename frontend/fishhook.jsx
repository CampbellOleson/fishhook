import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(); // tb modified when bootstrapping
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  window.$ = $;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
});
