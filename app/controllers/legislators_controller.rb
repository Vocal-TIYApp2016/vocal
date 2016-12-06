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
    if params[:filter] == "2016"
      @legislators = Legislator.where(id: 1..150)
    elsif params[:filter] == "2015"
      @legislators = Legislator.where(id: 151..337)
    elsif params[:filter] == "2014"
      @legislators = Legislator.where(id: 338..-1)
    end
    render json: @legislators
  end


end
