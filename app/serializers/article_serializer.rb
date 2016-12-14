class ArticleSerializer < ActiveModel::Serializer
  cache key: 'article', expires_in: 3.hours

  attributes :title, :link, :description, :source, :date
end
