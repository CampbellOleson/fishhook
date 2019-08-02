class Api::FriendshipsController < ApplicationController

  def create
    friendship = Friendship.new(requester_id: current_user.id, requested_id: selected_user.id)
    if friendship.save
      render json: friendship
    else
      render json: friendship.errors.full_messages, status: 422
    end
  end

  def update
    if current_user.id == friend_request.requested_id
      friend_request.update_attributes(pending: false)
      render json: friend_request
    else
      render json: ["Can't accept request for someone else"], status: 400
    end
  end

  def destroy
    render json: friend_request
    friend_request.destroy
  end

  private 

  def friend_request
    @friend_request = Friendship.find(params[:id])
  end

  def selected_user
    @selected_user = User.find(params[:user_id])
  end

end
