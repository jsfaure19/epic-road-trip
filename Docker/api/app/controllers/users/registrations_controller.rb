class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionFixController
  wrap_parameters format: [:json, :xml, :url_encoded_form, :multipart_form]
  wrap_parameters :user, include: [:email, :password]
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: { message: 'Signed up sucessfully.' }
  end

  def register_failed
    render json: {status: 400, error: "Bad request." }, :status => :bad_request
  end
end