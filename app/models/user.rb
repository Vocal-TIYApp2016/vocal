class User < ApplicationRecord

  after_create :follow_local_legislators

  before_validation(:on => :create) do
    self.password_confirmation = nil
  end

  validates :username,
  :presence => true,
  :uniqueness => {
    :case_sensitive => false
  }
  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
  validate :validate_username

  acts_as_follower
  acts_as_token_authenticatable
  attachment :profile_image
  attr_accessor :login

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def legislators
    self.followees(Legislator)
  end

  def self.find_for_database_authentication(warden_conditions)
     conditions = warden_conditions.dup
     if login = conditions.delete(:login)
       where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
     elsif conditions.has_key?(:username) || conditions.has_key?(:email)
       where(conditions.to_h).first
     end
  end


  def find_legislators(user)
    response = Typhoeus.get(
      'https://www.googleapis.com/civicinfo/v2/representatives',
      method: :get,
      params: {
        address: "#{CGI.escape(user.address)}",
        levels: 'administrativeArea1',
        "roles" => ["legislatorLowerBody", "legislatorUpperBody"],
        key: "#{ENV['GOOGLE_CIVIC_INFO_KEY']}"
      }.to_query,
      headers: {
        accept: "application/json"
      }
    )
    parsed = JSON.parse(response.body).deep_symbolize_keys
    legislators = []
    parsed[:officials].each do |official|
      legislators << official[:name]
    end
    legislators
  end

  def follow_local_legislators
    find_legislators(self).each do |name|
      Legislator.where(full_name: name).all.each do |leg|
        self.follow!(leg)
      end
    end
  end

  def validate_username
    if User.where(email: username).exists?
      errors.add(:username, :invalid)
    end
  end


end
