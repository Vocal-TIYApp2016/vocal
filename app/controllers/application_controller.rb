class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  acts_as_token_authentication_handler_for User, fallback: :none
  respond_to :json

  protected

  def configure_permitted_parameters
    added_attrs = [:first_name, :last_name, :username, :email, :password, :profile_image, :address, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: [:first_name, :last_name, :username, :email, :profile_image, :address]
    devise_parameter_sanitizer.permit :sign_in, keys: [:email, :password]
  end

  private

  def require_user
    render json: ['You must be signed in for this!'], status: :forbidden unless current_user
  end

end
