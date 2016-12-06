class Legislator < ApplicationRecord
  include LegislatorsHelper
  include PgSearch
  pg_search_scope :search_by_full_name, against: [:first_name, :last_name]
  acts_as_followable
  attachment :leg_image

  def authored_expanded
    hydra = Typhoeus::Hydra.new
    requests = authored.map do |bill|
      request = Typhoeus::Request.new(
      "https://api.iga.in.gov#{bill["link"]}",
        method: :get,
        headers: {
          Accept: "application/vnd.myiga.v1+json",
          Authorization: "#{ENV['IGA_TOKEN']}"
        },
      )
      hydra.queue(request)
      request
    end
    hydra.run
    responses = requests.map do |request|
      JSON.parse(request.response.body)
    end
    responses.each do |response|
      cache response
    end
    responses
  end

  def sponsored_expanded
    hydra = Typhoeus::Hydra.new
    sponsored.each.map do |bill|
      request = Typhoeus::Request.new(
      "https://api.iga.in.gov#{bill["link"]}",
        method: :get,
        headers: {
          Accept: "application/vnd.myiga.v1+json",
          Authorization: "#{ENV['IGA_TOKEN']}"
        },
      )
      hydra.queue(request)
      request
    end
    hydra.run
    responses = requests.map do |request|
      JSON.parse(request.response.body)
    end
    responses.each do |response|
      cache response
    end
    responses
  end

end
