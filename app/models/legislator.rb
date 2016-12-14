class Legislator < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_full_name, against: [:first_name, :last_name]
  acts_as_followable
  has_many :users, through: :follows
  attachment :leg_image

  def full_name
    "#{first_name} #{last_name}"
  end

  def authored_expanded
    hydra = Typhoeus::Hydra.new
    requests = authored.map do |bill|
      request = Typhoeus::Request.new(
        "https://api.iga.in.gov#{bill['link']}",
        method: :get,
        headers: {
          Accept: 'application/vnd.myiga.v1+json',
          Authorization: "#{ENV['IGA_TOKEN']}"
        }
      )
      hydra.queue(request)
      request
    end
    hydra.run
    responses = requests.map do |request|
      begin
        JSON.parse(request.response.body).deep_symbolize_keys
      rescue JSON::ParserError, TypeError
        { latest_version: [] }
      end
    end
    Rails.cache.fetch("#{cache_key}/authored", expires_in: 12.hours) do
      responses.map do |response|
        response[:latest_version]
      end
    end
    responses
  end

  def sponsored_expanded
    hydra = Typhoeus::Hydra.new
    requests = sponsored.each.map do |bill|
      request = Typhoeus::Request.new(
        "https://api.iga.in.gov#{bill['link']}",
        method: :get,
        headers: {
          Accept: 'application/vnd.myiga.v1+json',
          Authorization: "#{ENV['IGA_TOKEN']}"
        }
      )
      hydra.queue(request)
      request
    end
    hydra.run
    responses = requests.map do |request|
      begin
        JSON.parse(request.response.body).deep_symbolize_keys
      rescue JSON::ParserError, TypeError
        { latest_version: [] }
      end
    end
    Rails.cache.fetch("#{cache_key}/sponsored", expires_in: 12.hours) do
      responses.map do |response|
        response[:latest_version]
      end
    end
    responses
  end

end
