class LegislatorSerializer < ActiveModel::Serializer
  attributes :id, :title, :first_name, :last_name, :party, :chamber, :committees, :authored, :sponsored, :leg_image

  def leg_image
   Refile.attachment_url(object, :leg_image, :limit, 200, 200, format: "jpg")
  end

end
