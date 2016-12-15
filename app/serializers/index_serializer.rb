class IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :first_name, :last_name, :chamber, :leg_image

  def leg_image
    Refile.attachment_url(object, :leg_image, :fill, 200, 200, format: 'jpg')
  end

  def following?
    if current_user
      object.followed_by?(current_user)
    else
      false
    end
  end
end
