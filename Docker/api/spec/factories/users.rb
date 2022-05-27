FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'easyone' }
  end
end
