class Api::SuggestionsController < ApplicationController
  
  def suggestions
    suggestions = User.get_suggestions(search_params)
    render :json => suggestions
  end

  private

  def search_params
    params.require(:searchText)
  end

end