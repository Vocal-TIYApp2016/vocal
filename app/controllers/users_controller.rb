class UsersController < ApplicationController

  def show_self
    require_user
    @user = current_user
    render json: @user, except: :authentication_token
  end

  def show
    @user = User.find(params[:id])
    render json: @user, except: :authentication_token
  end


end
