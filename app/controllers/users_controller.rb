class UsersController < ApplicationController



  def show_self
    if current_user
      @user = current_user
      render json: @user, except: :authentication_token
    else
      render json: @users.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

end
