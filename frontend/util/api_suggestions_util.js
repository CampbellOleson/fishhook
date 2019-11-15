export const getSuggestions = searchText => {
  return $.ajax({
    method: "GET",
    url: `api/suggestions/?searchText=${searchText}`
  });
};

// window.getSuggestions = getSuggestions;