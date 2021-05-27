class Lead < ApplicationRecord
  has_many :touches, :dependent => :destroy
  before_create :slugify
  
  def slugify
    self.slug = company_name.parameterize 
  end
end