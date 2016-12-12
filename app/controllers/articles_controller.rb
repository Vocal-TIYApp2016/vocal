class ArticlesController < ApplicationController
  require 'rss'
  require 'open-uri'

  def article_pull(sources)
    newshash = {}
    sources.each do |url|
    feed = RSS::Parser.parse(url)
    origin = feed.channel.title
      newshash = feed.items.map do |item|
          {title: item.title,
          link: item.link,
          description: item.description,
          source: origin,
          date: item.pubDate }
        end
    end
    newshash
  end

  def sources
    ['http://indypolitics.org/feed/', 'http://howeypolitics.com/RSS/0']
  end

  def index
    @articles = article_pull(sources)
    render json: @articles
  end

end
