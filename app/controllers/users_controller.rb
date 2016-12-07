class UsersController < ApplicationController

before_action :require_user, only: :show_self

  def show_self
    render json: current_user, except: :authentication_token
  end

  def show
    @user = User.find(params[:id]).eager_load(:followees[Legislator])
    render json: @user, except: :authentication_token
  end

end
