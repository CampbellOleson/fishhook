Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :destroy, :show, :index] do 
      resources :friendships, only: [:create ]
    end
    resources :friendships, only: [:destroy, :update]
    resource :session, only: [:create, :destroy]
  end
end

# this isn't necissary because this info is sent up w user show
# get '/friends/pending_request_users' => 'friends#pending_request_users', as: :pending_request_users