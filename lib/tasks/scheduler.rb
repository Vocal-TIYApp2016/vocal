desc "This task is called by the Heroku scheduler add-on"
task :article_pull => :production do
  sources = ['http://indypolitics.org/feed/', 'http://www.ibj.com/rss/40', 'http://www.ibj.com/rss/125', 'http://www.ibj.com/rss/126', 'http://howeypolitics.com/RSS/0', 'https://www.fbi.gov/feeds/indianapolis-news/rss.xml']

  puts "Updating feed..."

  Articles.update(sources)

  puts "done."

end
