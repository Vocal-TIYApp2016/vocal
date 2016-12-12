class ArticlesController < ApplicationController
  require 'rss'
  require 'open-uri'

  def index
    @articles = Article.all
    render json: @articles
  end

  def update(sources)
    articles = []
    sources.each do |url|
      feed = RSS::Parser.parse(url)
      origin = feed.channel.title
      articles << feed.items.each.map do |item|
        begin
        Article.create!(
          title: item.title,
          link: (item.try(:guid) || item.link),
          description: item.description,
          source: origin,
          date: (item.try(:pubDate) || item.dc_date)
          )
        rescue SocketError
          puts "#{origin} did not respond"
        end
      end
      articles.each.map do |article|
        articles << article
      end
    end
    articles.flatten
  end

  def sources
    ['http://indypolitics.org/feed/', 'http://www.ibj.com/rss/40', 'http://www.ibj.com/rss/125', 'http://www.ibj.com/rss/126', 'http://howeypolitics.com/RSS/0', 'https://www.fbi.gov/feeds/indianapolis-news/rss.xml']
  end
  
end
