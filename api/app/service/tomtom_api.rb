require 'httparty'

class TomtomApi
  def self.get_poi_by_category_and_location(category,lat,lng,max_result)
    response = HTTParty.get("https://api.tomtom.com/search/2/search/#{category}.json?key=#{ENV['TOMTOM_API_KEY']}&lat=#{lat}&lon=#{lng}&language=fr-FR&limit=#{max_result}")
    parsed_response = ActiveSupport::JSON.decode(response.body)
    json_to_return = []
      parsed_response['results'].each do |result|
        r = {
          name: result['poi']['name'],
          address: result['address']['freeformAddress'],
          address2:"#{result['address']['streetNumber']} #{result['address']['streetName']} à #{result['address']['municipality']}",
          distance: result['dist']
        }
        json_to_return << r
      end
    json_to_return.to_json
  end
end