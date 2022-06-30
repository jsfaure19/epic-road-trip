require 'httparty'

class GetLatLong
  def self.search(search)
    response = HTTParty.get("https://nominatim.openstreetmap.org/search.php?q=#{search}&format=jsonv2")
    json_to_return = []
      response.each do |result|
        r = {
          lat: result['lat'],
          lon: result['lon'],
          display_name: result['display_name'],
          importance: result['importance'],
        }
        json_to_return << r
      end
    json_to_return.to_json
  end
end