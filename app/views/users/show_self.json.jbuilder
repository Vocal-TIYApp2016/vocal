#   NOT IN USE; LEFT FOR EXAMPLE
# json.user do
#   json.first_name @user.first_name
#   json.last_name @user.last_name
#   json.profile_image attachment_url(@user, :profile_image, :fill, 200, 200, format: "jpg")
#   json.username @user.username
#   json.followed @user.followees(Legislator) do |fol|
#     json.id fol.id
#     json.title fol.title
#     json.first_name fol.first_name
#     json.last_name fol.last_name
#     json.leg_image_id attachment_url(fol, :leg_image, :fill, 200, 200, format: "jpg")
#     json.authored_expanded fol.authored do |auth|
#       json.latest_version auth[:latest_version]
#     end
#     json.sponsored_expanded fol.sponsored do |spon|
#       json.latest_version spon[:latest_version]
#     end
#
#   end
# end
