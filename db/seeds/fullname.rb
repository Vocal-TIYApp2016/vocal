# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def add_full_name
  Legislator.all.each do |leg|
    leg.update(full_name:
      "#{leg.first_name} #{leg.last_name}"
      )
  end
end

add_full_name
