require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'users/registrations', type: :request do

  let!(:account){ create(:user, email: 'test@example.com', password: 'passpass') }
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
        let(:user) { { email: 'test@example.com', password: 'passpass' } }
        run_test!
      end
      response '401', 'Invalid request' do
        let(:user) { { email: 'test@exmple.com', password: 'passpass' } }
        run_test!
      end
      response '401', 'Invalid request' do
        let(:user) { { email: 'test@example.com', password: 'pass' } }
        run_test!
      end
    end
  end

  path '/users/sign_out.json' do
    post "Sign out a user" do
      tags 'Users'
      consumes 'application/json'
    end
  end
end