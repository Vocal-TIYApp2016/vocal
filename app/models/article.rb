class Article < ApplicationRecord
  require 'rss'
  require 'open-uri'

def article_pull(url)
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
