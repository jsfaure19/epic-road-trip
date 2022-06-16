require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'users/registrations', type: :request do


  path '/users.json' do
    post "Register a new user" do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            email: { type: :string, example: 'test@example.com' },
            password: { type: :string, example: 'passpass' }
          }
          
        },
        required: ["email", "password"],
      }
      response '200', 'User created' do
        let(:user) { { email: 'test@example.com', password:'passpass' } }
        run_test!
      end
      response '400', 'Invalid request' do
        let(:user) { { email: '', password:'passpass' } }
        run_test!
      end
    end
  end
end