require 'rails_helper'
require 'swagger_helper'

RSpec.describe 'Registration', type: :request do
  describe 'Registration' do
    context 'registration with errors' do
      it 'save the user' do
        post '/users.json', params: {
          user: {email: '', password: 'azerty'}
        }
        expect(User.count).to eq(0)
      end
    end

    context 'registration without errors' do
      it 'save the user' do
        post '/users.json', params: {
          user: {email: 'test@gmail.com', password: 'azerty'}
        }
        expect(User.count).to eq(1)
      end
    end
  end
end
