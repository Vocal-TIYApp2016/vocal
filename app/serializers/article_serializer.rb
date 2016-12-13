class ArticleSerializer < ActiveModel::Serializer

  attributes :id, :title, :link, :description, :source, :date

end
