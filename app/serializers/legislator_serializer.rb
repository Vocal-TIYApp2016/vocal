class LegislatorSerializer < ActiveModel::Serializer

  attributes :id, :following, :title, :year, :first_name, :last_name, :full_name, :party, :chamber, :committees, :authored,  :sponsored, :leg_image

  # :authored_expanded, :sponsored_expanded

  def leg_image
   Refile.attachment_url(object, :leg_image, :fill, 200, 200, format: "jpg")
  end

  def full_name
    [:first_name, :last_name].join(" ")
  end

  def following
    if current_user
      object.followed_by?(current_user)
    else
      false
    end
  end

end
