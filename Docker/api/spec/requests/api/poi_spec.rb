require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'poi', type: :request do


  path '/poi?category={category}&lat={lat}&lng={lng}&max_result={max_result}&radius={radius}' do

    get 'search poi' do
      tags 'poi'
      produces 'application/json'
      parameter name: :category, in: :path, type: :string
      parameter name: :lat, in: :path, type: :string
      parameter name: :lng, in: :path, type: :string
      parameter name: :radius, in: :path, type: :string
      parameter name: :max_result, in: :path, type: :string

      response '200', 'poi found' do
        schema type: :array,
          properties: {
            name: { type: :string },
            address: { type: :string },
            address2: { type: :string },
            distance: { type: :floatg},
          }
          
        let(:category) { 'hotel' }
        let(:lat) { '48.85837' }
        let(:lng) { '2.29448' }
        let(:radius) { '1000' }
        let(:max_result) { '10' }
        run_test!
      end

      # response '404', 'blog not found' do
      #   let(:id) { 'invalid' }
      #   run_test!
      # end
    end
  end
end