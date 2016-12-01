class LegislatorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :party, :chamber, :commitees, :bills, :leg_image

  def leg_image
   Refile.attachment_url(object, :leg_image, :fit, 200, 200, format: "jpg")
  end

end
