class PoiController < ApplicationController
  def search_poi
    @pois = TomtomApi.get_poi_by_category_and_location(poi_params[:category], poi_params[:lat], poi_params[:lng], poi_params[:max_result], poi_params[:radius])
    render json: @pois
  end

  private

  def poi_params
    params.permit(:category, :lat, :lng, :max_result, :radius)
  end
end