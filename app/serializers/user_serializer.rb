class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email, :username, :profile_image, :first_name, :last_name, :address

  def profile_image
    Refile.attachment_url(object, :profile_image, :fill, 200, 200, format: 'jpg')
  end
end
