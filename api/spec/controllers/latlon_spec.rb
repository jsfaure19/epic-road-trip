# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'latlon', type: :request do
  describe 'search latlon' do
    context 'without errors' do
      it 'returns a success response' do
        get '/search_lat_long?search_string=auch'
        expect(response).to have_http_status(:ok)
      end
    end
  end
end