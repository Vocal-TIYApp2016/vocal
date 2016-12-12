class ArticlesController < ApplicationController
  require 'rss'
  require 'open-uri'

  def article_pull(sources)
    newshash = []
    sources.each do |url|
    feed = RSS::Parser.parse(url)
    origin = feed.channel.title
      articles = feed.items.map do |item|
          [item.title, item.link, item.description, item.pubDate]
        end
      newshash = {origin => articles}
    end
    newshash
  end

  def sources
    ['http://howeypolitics.com/RSS/0', 'http://indypolitics.org/feed/']
  end

  def index
    @articles = article_pull(sources)
    render json: @articles
  end
  
end
