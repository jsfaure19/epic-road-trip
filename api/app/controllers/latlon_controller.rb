class LatlonController < ApplicationController
  def search
    @response = GetLatLong.search(poi_params[:search_string])
    render json: @response
  end

  private

  def poi_params
    params.permit(:search_string)
  end
end