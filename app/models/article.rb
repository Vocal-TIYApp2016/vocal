class Article < ApplicationRecord
  require 'rss'
  require 'open-uri'

  def article_pull(sources)
    sources.each do |url|

      open(url) do |rss|
        feed = RSS::Parser.parse(rss)
        puts "Title: #{feed.channel.title}"
        feed.items.each do |item|
          puts "Item: #{item.title}"
          puts "Link: #{item.link}"
        end
      end

    end
  end

  def sources
    ['http://howeypolitics.com/RSS/0', 'http://indypolitics.org/feed/']
  end

end
