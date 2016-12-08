class UsersController < ApplicationController

before_action :require_user, only: [:show_self, :full_profile]

  def show_self
    render json: current_user
  end

  def full_profile
    render json: current_user, serializer: ProfileSerializer
  end

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: ProfileSerializer, except: :authentication_token
  end

end
