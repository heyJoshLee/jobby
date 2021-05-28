class User < ApplicationRecord
  has_secure_password
  has_many :leads
  validates :email, uniqueness: true

end