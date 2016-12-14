# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def seed_image(file_name)
  File.open(File.join(Rails.root, "/app/assets/images/seed/#{file_name}"))
end

User.delete_all

User.create!(
  email: 'cflack@vocal-in.com',
  username: 'admincf',
  password: 'vocal16',
  first_name: 'Chris',
  last_name: 'Flack',
  address: '4901 Guilford Ave. Indianapolis, IN',
  profile_image: seed_image('aja-hawkeye.png')
)

User.create!(
  email: 'swieland@vocal-in.com',
  username: 'adminsw',
  password: 'vocal16',
  first_name: 'Sally',
  last_name: 'Wieland',
  address: '475 E Market St, Indianapolis, IN',
  profile_image: seed_image('headshot.jpg')
)

User.create!(
  email: 'khuff@vocal-in.com',
  username: 'adminkh',
  password: 'vocal16',
  first_name: 'Kyle',
  last_name: 'Huff',
  address: '475 E Market St, Indianapolis, IN',
  profile_image: seed_image('khuff.png')
)
