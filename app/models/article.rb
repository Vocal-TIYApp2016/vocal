class Article < ApplicationRecord
  require 'rss'
  require 'open-uri'

  default_scope { order(date: :desc) }

  def self.update(sources)
    articles = []
    sources.each do |url|
      feed = RSS::Parser.parse(url)
      origin = feed.channel.title
      articles << feed.items.each.map do |item|
        begin
        Article.create!(
          title: item.title,
          link: (item.try(:link) || item.guid),
          description: item.description,
          source: origin,
          date: (item.try(:pubDate) || item.dc_date)
          )
        rescue SocketError
          puts "#{origin} did not respond"
        end
      end
    end
    articles.flatten
  end

end
