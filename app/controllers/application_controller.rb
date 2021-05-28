class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :encode_token, :token

  def encode_token(payload)
    JWT.encode(payload, "mySecretKey")
  end

  def decode_token(token)
  end

  def token
    request.headers['Authorization']
  end
end
