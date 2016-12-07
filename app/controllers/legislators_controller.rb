class LegislatorsController < ApplicationController

  include LegislatorsHelper
  before_action :require_user, only: :follow_unfollow

  def index
    @legislators = Legislator.all
    render json: @legislators
  end

  def show
    @legislator = Legislator.find(params[:id])
    render json: @legislator, serializer: SingleLegislatorSerializer
  end

  def filter
    if params[:search]
      @legislators = Legislator.search_by_full_name(params[:search])
      render json: @legislators
    elsif params[:q]
      @legislators = Legislator.ransack(params[:q]).result
      render json: @legislators
    end
  end

  def follow_unfollow
    current_user.toggle_follow!(Legislator.find(params[:id]))
    render json: current_user, except: :authentication_token
  end

end
