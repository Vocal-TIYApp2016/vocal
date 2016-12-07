class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email, :username, :profile_image, :first_name, :last_name, :followed

  def profile_image
    Refile.attachment_url(object, :profile_image, :fill, 200, 200, format: "jpg")
  end

  def followed
    if current_user
      @legislators = current_user(followees(Legislator))
    else
      false
    end
  end

end
