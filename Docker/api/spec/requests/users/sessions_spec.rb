require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'users/registrations', type: :request do

  path '/users/sign_in.json' do
    post "Sign in a user" do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            email: { type: :string, example: 'test@example.com'},
            password: { type: :string, example: 'passpass'}
          }
        },
        required: ["email", "password"],
      }
      response '200', 'User signed in' do
        let!(:user){ create(:user) }
        run_test!
      end
    end
  end
end