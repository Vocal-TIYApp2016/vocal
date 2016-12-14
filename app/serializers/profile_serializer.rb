class ProfileSerializer < ActiveModel::Serializer


  attributes :id, :authentication_token, :email, :username, :profile_image, :first_name, :last_name, :address, :legislators

  has_many :legislators


  def profile_image
    Refile.attachment_url(object, :profile_image, :fill, 200, 200, format: "jpg")
  end


end
