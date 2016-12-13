class ArticlesController < ApplicationController

  include PgSearch
  pg_search_scope :search_by_full_text, against: [:description, :title]

  def index
    @articles = article_search
    @articles = Article.all if @articles == []
    render json: @articles
  end

  def article_search
    articles =[]
    current_user.legislators.each do |leg|
      articles << Article.all.search_by_full_text(current_user.leg.full_name)
    end
    articles
  end

end
