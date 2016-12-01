class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email, :username, :profile_image, :first_name, :last_name
end
