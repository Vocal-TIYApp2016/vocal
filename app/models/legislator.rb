class Legislator < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_full_name, :against => [:first_name, :last_name]
  acts_as_followable
  attachment :leg_image


  # def get_bills
  #   hydra = Typhoeus::Hydra.new
  #   authored = Typhoeus::Request.new
  #   sponsored = Typhoeus::Request.new
end
