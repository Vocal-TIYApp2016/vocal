class ArticleSerializer < ActiveModel::Serializer
  cache key: [:title, :link, :description, :source, :date]  , expires_in: 3.hours, only: [:title]

  attributes :title, :link, :description, :source, :date
end
