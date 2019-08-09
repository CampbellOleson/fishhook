class Api::PostsController < ApplicationController

  def create
    @post = Post.new(poster_id: current_user.id, body: new_post[:body], location_url: new_post[:location_url])
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    if current_user.id == selected_post.poster_id
      selected_post.update_attributes(post_params)
      render json: selected_post
    else
      render json: selected_post.errors.full_messages, status: 422
    end
  end

  def destroy
    render json: selected_post
    selected_post.destroy
  end

  def index
    @posts = selected_user.posts
  end

  def feed
    @posts = Post.feed(current_user.id)
    render :index
  end

  private 

  def new_post
    params[:post]
  end

  def selected_post 
    @post = Post.find(params[:id])
  end

  def selected_user
    @user = User.find(params[:user_id])
  end

  # def sort_posts
  #   # need to find a way to sort posts by created_at time
  # end

end
