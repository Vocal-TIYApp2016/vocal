# class LegislatorCollector
#
#   require 'json'
#
#   def assembler(end_point)
#     response = raw_parts(end_point)
#     assembled = parser(respoinse)
#   end
#
#   def raw_parts(end_point)
#     Typhoeus::Request.new(
#       end_point,
#       method: :get,
#       headers: { Accept: "application/vnd.myiga.v1+json", Authorization: ENV('IGA_TOKEN') },
#     )
#   end
#
#   def parser(json_response)
#     JSON.parse(json_response)
#   end
#
#   def chamber_finder(proto_title)
#     if proto_title == "Senator"
#       return "Senate"
#     elsif proto_title == "Representative"
#       return "House"
#     end
#   end
#
#   def legislator_factory(year)
#     assembled = assembler("https://api.iga.in.gov/#{year.to_s}/legislators")
#
#     assembled.each do |proto|
#       Legislator.create!(
#         first_name: proto[firstName],
#         last_name: proto[lastName],
#         party: proto[party],
#         chamber: chamber_finder(proto[title]),
#         title: proto[title]
#         )
#     end
#   end
#
# end
