class LegislatorsController < ApplicationController

  include LegislatorsHelper

  def index
    @legislators = Legislator.all
    render json: @legislators
  end

  def show
    @legislator = Legislator.find(params[:id])
    render json: @legislator
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

end
