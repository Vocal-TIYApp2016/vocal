class User < ApplicationRecord
  acts_as_token_authenticatable
  before_validation(:on => :create) do
    self.password_confirmation = nil
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  attachment :profile_image
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


end
