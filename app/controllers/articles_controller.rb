class ArticlesController < ApplicationController

  def index
    @articles = article_search
    @articles = Article.all if @articles == []
    render json: @articles, each_serializer: ArticleSerializer
  end

  def article_search
    current_user.legislators.each.flat_map do |leg|
      Article.search_by_full_text(leg.full_name).to_a
    end
  end

end
