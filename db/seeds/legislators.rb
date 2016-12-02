# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

def raw_parts(end_point)
  Typhoeus.get(
    end_point.to_s,
    method: :get,
    headers: {
      Accept: "application/vnd.myiga.v1+json",
      Authorization: "#{ENV['IGA_TOKEN']}"
    },
  )
end

def parser(json_response)
  JSON.parse(json_response.body)
end

def assembler(end_point)
  response = raw_parts(end_point)
  assembled = parser(response).deep_symbolize_keys
  return assembled
end

def chamber_finder(proto_title)
  if proto_title == "Senator"
    return "Senate"
  elsif proto_title == "Representative"
    return "House"
  end
end



def picture_finder(proto_link)
  assembled = assembler("https://api.iga.in.gov/#{proto_link}")
  picture_link = assembled[:pngDownloadLink]
  return picture_link
end

def committees_list(proto_link)
  list = []
  assembled = assembler("https://api.iga.in.gov/#{proto_link}")
  puts assembled.inspect
  assembled[:committees].each do |committee|
    list << committee[:name]
  end
  return list
end

def authored_list(proto_link)
  list = []
  assembled = assembler("https://api.iga.in.gov/#{proto_link}")
  bills_link = assembled[:bills][:link]
  assembled_bills = assembler("https://api.iga.in.gov/#{bills_link}")
  authored_link = assembled_bills[:authored][:link]
  assembled_authored = assembler("https://api.iga.in.gov/#{authored_link}")
  assembled_authored[:items].each do |item|
    list << item[:link]
  end
end

def sponsored_list(proto_link)
  list = []
  assembled = assembler("https://api.iga.in.gov/#{proto_link}")
  bills_link = assembled[:bills][:link]
  assembled_bills = assembler("https://api.iga.in.gov/#{bills_link}")
  sponsored_link = assembled_bills[:sponsored][:link]
  assembled_sponsored = assembler("https://api.iga.in.gov/#{sponsored_link}")
  assembled_sponsored[:items].each do |item|
    list << item[:link]
  end
end

def legislator_factory(year)
  assembled = assembler("https://api.iga.in.gov/#{year.to_s}/legislators")

    assembled[:items].each do |proto|
      Legislator.create!(
        first_name: proto[:firstName],
        last_name: proto[:lastName],
        party: proto[:party],
        chamber: chamber_finder(proto[:title]),
        title: proto[:title],
        remote_leg_image_url: "http://iga.in.gov/legislative/(#{year})/portraits/" + picture_finder(proto[:link]),
        committees: committees_list(proto[:link]),
        authored: authored_list(proto[:link]),
        )
    end

end


legislator_factory(2016)
legislator_factory(2015)
legislator_factory(2014)
