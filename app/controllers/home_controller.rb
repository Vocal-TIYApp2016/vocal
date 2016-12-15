class HomeController < ApplicationController
  def static
  end

  def image_loader
    @legislators = Legislator.all
    render @legislators
  end
end
