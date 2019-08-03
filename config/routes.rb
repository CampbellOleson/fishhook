Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :destroy, :show, :index] do 
      resources :friendships, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy]
    patch '/users/:requester_id/friendships' => 'friendships#update', as: :update
    delete '/users/:requester_id/friendships' => 'friendships#update', as: :destroy
    get '/friendships/requester_ids' => 'friendships#requester_ids', as: :requester_ids
    get '/friendships/requested_user_ids' => 'friendships#requested_user_ids', as: :requested_user_ids
  end
end
