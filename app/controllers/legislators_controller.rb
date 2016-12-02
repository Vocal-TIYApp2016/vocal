class LegislatorsController < ApplicationController

  def index
    @legislators = Legislator.all
    render json: @legislators
  end

  def show
    @legislator = Legislator.find(param[:id])
    render json: @legislator
  end

  def filter
    
  end

end
