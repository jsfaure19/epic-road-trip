# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TomtomApi do
  let!(:category) { 'restaurant' }
  let!(:lat) { '48.85837' }
  let!(:lng) { '2.29448' }
  let!(:max_result) { '10' }
  let!(:radius) { '1000' }
  let!(:tomtom_api_response_search) {
    "{\"summary\":{\"query\":\"hotel\",\"queryType\":\"NON_NEAR\",\"queryTime\":166,\"numResults\":1,\"offset\":0,\"totalResults\":1548729,\"fuzzyLevel\":1,\"geoBias\":{\"lat\":43.6145951,\"lon\":1.4104445}},\"results\":[{\"type\":\"POI\",\"id\":\"250009008018050\",\"score\":2.5744051933,\"dist\":616.7478987231195,\"info\":\"search:ta:250009008018050-FR\",\"poi\":{\"name\":\"L'Oustal\",\"phone\":\"+33 5 34 36 42 00\",\"categorySet\":[{\"id\":7314002}],\"url\":\"www.pois-gourmand.fr\",\"categories\":[\"bed breakfast guest houses\",\"hotel/motel\"],\"classifications\":[{\"code\":\"HOTEL_MOTEL\",\"names\":[{\"nameLocale\":\"en-US\",\"name\":\"hotel/motel\"},{\"nameLocale\":\"en-US\",\"name\":\"bed breakfast guest houses\"}]}]},\"address\":{\"streetNumber\":\"3\",\"streetName\":\"Rue Émile Heybrard\",\"municipality\":\"Toulouse\",\"countrySecondarySubdivision\":\"Haute-Garonne\",\"countrySubdivision\":\"Occitanie\",\"postalCode\":\"31300\",\"countryCode\":\"FR\",\"country\":\"France\",\"countryCodeISO3\":\"FRA\",\"freeformAddress\":\"3 Rue Émile Heybrard, 31300 Toulouse\",\"localName\":\"Toulouse\"},\"position\":{\"lat\":43.60908,\"lon\":1.40963},\"viewport\":{\"topLeftPoint\":{\"lat\":43.60998,\"lon\":1.40839},\"btmRightPoint\":{\"lat\":43.60818,\"lon\":1.41087}},\"entryPoints\":[{\"type\":\"main\",\"position\":{\"lat\":43.60855,\"lon\":1.4101}}]}]}"
  }
  describe 'search' do  
    subject { -> { described_class.get_poi_by_category_and_location(category,lat,lng,max_result,radius) } }
    before do
      HTTParty.should_receive(:get).with(
        "https://api.tomtom.com/search/2/search/#{category}.json?key=#{ENV['TOMTOM_API_KEY']}&lat=#{lat}&lon=#{lng}&language=fr-FR&limit=#{max_result}&radius=#{radius}"
      ).and_return(OpenStruct.new(body:tomtom_api_response_search.to_s))
    end
    it { is_expected.not_to raise_error }
  end
end