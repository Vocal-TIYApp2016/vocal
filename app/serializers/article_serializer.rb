class ArticleSerializer < ActiveModel::Serializer

  attributes :title, :link, :description, :source, :date

end
