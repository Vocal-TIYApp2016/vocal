class LegislatorsController < ApplicationController

  before_action :require_user, only: :follow_unfollow

  def index
    @legislators = Legislator.all
    render json: @legislators, each_serializer: IndexSerializer
  end

  def show
    @legislator = Legislator.find(params[:id])
    render json: @legislator
  end

  def filter
    if params[:search]
      @legislators = Legislator.search_by_full_name(params[:search])
      render json: @legislators, each_serializer: IndexSerializer
    elsif params[:q]
      @legislators = Legislator.ransack(params[:q]).result
      render json: @legislators, each_serializer: IndexSerializer
    end
  end

  def follow_unfollow
    Legislator.where(full_name: "#{params[:full_name]}").all.each do |leg|
      current_user.toggle_follow!(leg)
    end
    render json: current_user, each_serializer: ProfileSerializer
  end

end
