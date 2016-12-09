# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  User.create!(
    email: "cflack@vocal-in.com",
    username: "admincf",
    password: "vocal16",
    first_name: "Chris",
    last_name: "Flack",
    zip_code: "46205",
    profile_image: "url(/assets//images/aja-hawkeye.png)"
  )

  User.create!(
    email: "swieland@vocal-in.com",
    username: "adminsw",
    password: "vocal16",
    first_name: "Sally",
    last_name: "Wieland",
    zip_code: "46204",
    profile_image: "url(/assets//images/headshot.jpg)"
  )

  User.create!(
    email: "khuff@vocal-in.com",
    username: "adminkh",
    password: "vocal16",
    first_name: "Kyle",
    last_name: "Huff",
    zip_code: "46204",
    profile_image: "url(/assets//images/khuff.png)"
  )
