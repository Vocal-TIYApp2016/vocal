class HomeController < ApplicationController
  def static
  end

  def image_loader
    @legislators = Legislator.all
  end
end
