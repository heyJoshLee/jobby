class Lead < ApplicationRecord

  before_create :slugify
  
  def slugify
    self.slug = company_name.parameterize 
  end
end