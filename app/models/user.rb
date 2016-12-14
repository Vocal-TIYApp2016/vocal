class User < ApplicationRecord

  after_create :follow_local_legislators

  before_validation(on: :create) do
    self.password_confirmation = nil
  end

  validates :username,
  presence: true, uniqueness: {
    case_sensitive: false
  }

  validates :email,
  presence: true, uniqueness: {
    case_sensitive: false
  }

  validates :address, presence: true

  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, multiline: true
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
    followees(Legislator)
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where(['lower(username) = :value OR lower(email) = :value', { value: login.downcase }]).first
    elsif conditions.key?(:username) || conditions.key?(:email)
      where(conditions.to_h).first
    end
  end

  protected

  def find_legislators(user)
    response = Typhoeus.get(
      'https://www.googleapis.com/civicinfo/v2/representatives',
      method: :get,
      params: {
        address: CGI.escape(user.address),
        levels: 'administrativeArea1',
        roles: %w(legislatorLowerBody, legislatorUpperBody),
        key: ENV['GOOGLE_CIVIC_INFO_KEY'].to_s
      }.to_query,
      headers: {
        accept: 'application/json'
      }
    )
    parsed = JSON.parse(response.body).deep_symbolize_keys
    legislators = parsed[:officials].each.map do |official|
      official[:name]
    end
    legislators
  end

  def follow_local_legislators
    find_legislators(self).each do |name|
      Legislator.where(full_name: name).all.each do |leg|
        follow!(leg)
      end
    end
  end

  def validate_username
    errors.add(:username, :invalid) if User.where(email: username).exists?
  end

end
