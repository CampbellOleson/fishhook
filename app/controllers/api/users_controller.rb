class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = selected_user
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ["User not found"], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = selected_user
    if @user
      @user.destroy
      render :show
    else
      render json: ["Could not find user"]
    end
  end

  def show
    @user = selected_user
  end

  def index
    @users = User.all # to be filtered for friends later on
  end

  private

  def user_params
    params.require(:user).permit(:fname,:lname,:email,:password,:bio) #can we have this optional bio key?
  end #bio might go

  def selected_user
    User.find(params[:id])
  end

end

# AJAX tests
# new_user = {fname: "test", lname: "user", email: "testing@123.com", password: "password", bio: "testy"}
# show: $.ajax({method:"GET", url: "api/users/1"}) -- works 7/29
# index: $.ajax({method:"GET", url: "api/users"}) -- works 7/29
# create: $.ajax({method:"POST", url: "api/users/", data: { user: user }}) -- works 7/29
# update: $.ajax({method:"PATCH", url: "api/users/id", data: { user: user }}) -- works 7/29
# destroy: $.ajax({method:"DELETE", url: "api/users/id"}) -- works 7/29