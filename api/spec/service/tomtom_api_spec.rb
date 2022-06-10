# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TomtomApi do
  let!(:category) { 'restaurant' }
  let!(:lat) { '48.85837' }
  let!(:lng) { '2.29448' }
  let!(:max_result) { '10' }
  let!(:tomtom_api_response_search) {
    {
      "summary"=>
      {"query"=>"restaurant",
      "queryType"=>"NON_NEAR",
      "queryTime"=>467,
      "numResults"=>10,
      "offset"=>0,
      "totalResults"=>6739439,
      "fuzzyLevel"=>1,
      "geoBias"=>{"lat"=>43.6145951, "lon"=>1.4104445}},
    "results"=>
      [{"type"=>"POI",
        "id"=>"250009041062254",
        "score"=>2.5745275021,
        "dist"=>34.60202468694391,
        "info"=>"search:ta:250009041062254-FR",
        "poi"=>
        {"name"=>"Le Café des Plumes",
          "categorySet"=>[{"id"=>7315}],
          "categories"=>["restaurant"],
          "classifications"=>[{"code"=>"RESTAURANT", "names"=>[{"nameLocale"=>"en-US", "name"=>"restaurant"}]}]},
        "address"=>
        {"streetNumber"=>"78",
          "streetName"=>"Route de Blagnac",
          "municipality"=>"Toulouse",
          "countrySecondarySubdivision"=>"Haute-Garonne",
          "countrySubdivision"=>"Occitanie",
          "postalCode"=>"31200",
          "countryCode"=>"FR",
          "country"=>"France",
          "countryCodeISO3"=>"FRA",
          "freeformAddress"=>"78 Route de Blagnac, 31200 Toulouse",
          "localName"=>"Toulouse"},
        "position"=>{"lat"=>43.61477, "lon"=>1.4108},
        "viewport"=>{"topLeftPoint"=>{"lat"=>43.61567, "lon"=>1.40956}, "btmRightPoint"=>{"lat"=>43.61387, "lon"=>1.41204}},
        "entryPoints"=>[{"type"=>"main", "position"=>{"lat"=>43.61472, "lon"=>1.41071}}]}]
    }
  }
  describe 'search' do  
    subject { -> { described_class.get_poi_by_category_and_location(category,lat,lng,max_result) } }
    before do
      HTTParty.should_receive(:get).with(
        "https://api.tomtom.com/search/2/search/#{category}.json?key=#{ENV['TOMTOM_API_KEY']}&lat=#{lat}&lon=#{lng}&language=fr-FR&limit=#{max_result}"
      ).and_return(tomtom_api_response_search)
    end
    it { is_expected.not_to raise_error }
  end
end