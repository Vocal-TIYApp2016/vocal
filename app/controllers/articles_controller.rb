class ArticlesController < ApplicationController

  def index
    @articles = article_search
    @articles = Article.all if @articles == []
    render json: @articles, each_serializer: ArticleSerializer
  end

  def article_search
    articles =[]
    current_user.legislators.each do |leg|
      articles << Article.search_by_full_text(leg.full_name)
    end
    articles
  end

end
