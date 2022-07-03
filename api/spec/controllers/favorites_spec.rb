# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'FavoriteController', type: :request do
  let!(:user){create :user}
  describe 'index' do
    let!(:favorite1){create :favorite, link:'link1', user: user}
    let!(:favorite2){create :favorite, link:'link2', user: user}
    context 'return all favorite' do
      it 'returns a success response' do
        get "/favorites?email=#{user.email}"
        expect(response).to have_http_status(:ok)
      end
    end
  end
  describe 'create' do
    context 'without erros' do
      it 'create favorite' do
        post '/favorites', params: {
          email: user.email,
          link: 'link'
        }
        expect(response).to have_http_status(:ok)
      end
    end
  end
  describe 'update' do
    let!(:favorite1){create :favorite, link:'link1', user: user}
    context 'without errors' do
      it 'update favorite' do
        put "/favorites/#{favorite1.id}", params: {
          link: 'link'
        }
        expect(response).to have_http_status(:ok)
      end
    end
  end
  describe 'destroy' do
    let!(:favorite1){create :favorite, link:'link1', user: user}
    context 'without errors' do
      it 'delete favorite' do
        delete "/favorites/#{favorite1.id}"
        expect(response).to have_http_status(:ok)
      end
    end
  end
end