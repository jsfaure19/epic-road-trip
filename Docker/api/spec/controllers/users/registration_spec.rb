require 'rails_helper'

RSpec.describe 'Registration', type: :request do
  describe 'Registration' do
    context 'registration without errors' do
      it 'save the user' do
        post '/users', params: {
          user: {email: 'test@gmail.com', password: 'azerty'}
        }
        expect(User.count).to eq(1)
      end
    end
  end
end
