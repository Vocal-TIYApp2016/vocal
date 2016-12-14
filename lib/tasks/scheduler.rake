desc 'This task is called by the Heroku scheduler add-on'
task :article_pull => :environment do

  puts 'Clearing old articles...'

  Article.delete_all

  puts 'done.'

  sources = ['http://indypolitics.org/feed/',
    'http://www.ibj.com/rss/40',
    'http://www.ibj.com/rss/125',
    'http://www.ibj.com/rss/126',
    'http://howeypolitics.com/RSS/0',
    'https://www.fbi.gov/feeds/indianapolis-news/rss.xml']

  puts 'Updating feed...'

  Article.update(sources)

  puts 'done.'
end
