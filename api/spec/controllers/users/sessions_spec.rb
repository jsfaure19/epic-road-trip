# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Sessions', type: :request do
  let!(:user) { create(:user) }
  describe 'sign in' do
    context 'without errors' do
      it 'returns a success response' do
        post '/users/sign_in.json', params: {
          user: {email: user.email, password: user.password}
        }
        expect(response).to have_http_status(:ok)
      end
    end
    context 'with errors' do
      it 'returns a failure response' do
        post '/users/sign_in.json', params: {
          user: {email: '', password: ''}
        }
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
  describe 'sign out' do
    context 'without errors' do
      before do
        post '/users/sign_in.json', params: {
          user: {email: user.email, password: user.password}
        }
      end
      it 'returns a success response' do
        delete '/users/sign_out.json', headers: jwt_headers(user)
        expect(response).to have_http_status(:ok)
      end
    end
  end
end