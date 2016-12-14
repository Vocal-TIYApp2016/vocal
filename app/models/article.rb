class Article < ApplicationRecord
  require 'rss'
  require 'open-uri'
  include PgSearch

  validates_presence_of [:title, :link, :description, :source, :date]

  pg_search_scope :search_by_full_text, against: [:description, :title]

  default_scope { order(date: :desc) }

  def self.update(sources)
    sources.each do |url|
      feed = RSS::Parser.parse(url)
      origin = feed.channel.title
      built = source_build(feed, origin)
      articles = feed.items.each.flat_map do |item|
        begin
          Article.create!(
            title: item.title,
            link: (item.try(:link) || item.guid),
            description: item.description,
            source: built,
            date: (item.try(:pubDate) || item.dc_date)
          )
        rescue SocketError
          puts "#{origin} did not respond"
        end
      end
      articles
    end
    articles
  end

  def source_build(feed, origin)
    if feed.channel.link == 'http://www.ibj.com/rss'
      "IBJ - #{origin}"
    elsif feed.channel.link == 'https://www.fbi.gov/feeds/indianapolis-news'
      "FBI.gov - #{origin}"
    else
      origin
    end
  end

end
