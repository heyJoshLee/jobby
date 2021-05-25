# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Lead.create(   
  job_title: "Developer",
  company_name: "Cool company",
  company_url: "google.com",
  job_listing_url: "google.com",
  about_us_page: "google.com",
  company_email: "hello@google.com",
  contact_first: "Adam",
  contact_last: "Smith",
  salary_rage: "$12000, 20000",
  cover_letter_url: "yrl.com",
  resume_url: "url.com",
  slug: "",
  notes: "some notes here")
