class ArticlesController < ApplicationController
  require 'rss'
  require 'open-uri'

  def article_pull(sources)
    newshash = []
    sources.each do |url|
    feed = RSS::Parser.parse(url)
    origin = feed.channel.title
      articles = feed.items.map do |item|
          {title: item.title,
          link: item.link,
          description: item.description,
          source: origin,
          date: (item.try(:pubDate) || item.dc_date) }
        end
      newshash << articles
    end
    newshash
  end

  def sources
    ['http://indypolitics.org/feed/', 'http://www.ibj.com/rss/40', 'http://www.ibj.com/rss/125', 'http://www.ibj.com/rss/126', 'http://howeypolitics.com/RSS/0', 'https://www.fbi.gov/feeds/indianapolis-news/RSS']
  end

  def index
    @articles = article_pull(sources)
    render json: @articles
  end

end
