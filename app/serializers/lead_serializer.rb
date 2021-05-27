class LeadSerializer
  include FastJsonapi::ObjectSerializer
  attributes :job_title, :company_name, :company_url, :job_listing_url, :about_us_page, :company_email, :contact_first, :contact_last, :salary_range, :cover_letter_url, :resume_url, :notes, :slug
end