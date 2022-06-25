require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'poi', type: :request do


  path '/search_lat_long?search_string={search_string}' do
    let(:search_string){'auch'}
    get 'get lat long' do
      tags 'latlong'
      produces 'application/json'
      parameter name: :search_string, in: :path, type: :string

      response '200', 'search results' do
        schema type: :array,
          properties: {
            lat: { type: :string },
            long: { type: :string },
            display_name: { type: :string },
            importance: { type: :string},
          }
          
        let(:lat) { '2.29448' }
        let(:long) { '48.85837' }
        let(:display_name) { 'Auch, Gers, Occitanie' }
        let(:importance) { '0.7' }
        run_test!
      end
    end
  end
end