import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// this is a higher-order function because i'll need to pass in preloaded state when bootstrapping

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
