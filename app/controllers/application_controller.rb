class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token! #why does the ordering of these matter?
    session[:session_token] = nil
  end

  # might need require logged in/out helper -- not sure if i need backend route control

end
