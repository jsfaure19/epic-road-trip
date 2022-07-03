# frozen_string_literal: true


class FavoritesController < ApplicationController

  def index
    user = User.find_by(email: params[:email])
    @favorites = user.favorites
    render @favorites
  end

  def create
    user = User.find_by(email: params[:email])
    @favorite = Favorite.new(link: params[:link], user: user)
    if @favorite.save
      render json: { message: 'Favorite saved sucessfully.' }
    else
      render json: {status: 400, error: "Bad request." }, :status => :bad_request
    end
  end

  def update
    @favorite = Favorite.find(params[:id])
    if @favorite.update(link: params[:link])
      render json: { message: 'Favorite updated sucessfully.' }
    else
      render json: {status: 400, error: "Bad request." }, :status => :bad_request
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.destroy
      render json: { message: 'Favorite deleted sucessfully.' }
    else
      render json: {status: 400, error: "Bad request." }, :status => :bad_request
    end
  end
end
