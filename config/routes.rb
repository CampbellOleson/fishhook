Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :destroy, :show, :index] do 
      resources :friendships, only: [:create, :index]
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :update, :destroy]
    get "/feed" => "posts#feed", as: :feed
    patch '/users/:requester_id/friendships' => 'friendships#update', as: :update
    delete '/users/:requester_id/friendships' => 'friendships#destroy', as: :destroy
    get '/friendships/requests' => 'friendships#requests', as: :requests
    get '/friendships/requesters' => 'friendships#requesters', as: :requesters
  end
end
