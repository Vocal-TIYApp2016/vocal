class LegislatorsController < ApplicationController

  def index
    @legislators = Legislator.all
    render json: @legislators
  end

  def show
    @legislator = Legislator.find(params[:id])
    @authored =
    @sponsored =
    render json: @legislator
  end

  def filter
    
  end

end
