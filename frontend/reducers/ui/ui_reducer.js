import { combineReducers } from "redux";
import suggestionsReducer from "./suggestions_reducer";

const uiReducer = combineReducers({
  suggestions: suggestionsReducer
});

export default uiReducer;
