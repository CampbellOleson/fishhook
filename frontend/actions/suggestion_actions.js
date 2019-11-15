import * as ApiSuggestionsUtil from "../util/api_suggestions_util";
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
export const CLEAR_SUGGESTIONS = "CLEAR_SUGGESTIONS";

export const receiveSuggestions = suggestions => ({
  type: RECEIVE_SUGGESTIONS,
  suggestions
});

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});

export const fetchSuggestions = searchText => dispatch =>
  ApiSuggestionsUtil.getSuggestions(searchText).then(suggestions =>
    dispatch(receiveSuggestions(suggestions))
  );
