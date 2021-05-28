class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :encode_token, :logged_in, :current_user, :token


  def secret_key
    "mySecretKey"
  end

  def encode_token(payload)
    JWT.encode(payload, secret_key)
  end

  def logged_in?(token)
    return false unless token
    JWT.decode(token, secret_key, true)
  end

  def token
    request.headers['Authorization']
  end

  def current_user(token)
    return nil if !logged_in?(token)
    user_id =  JSON.parse(logged_in?(token)[0])["data"]["id"]
    User.find(user_id)
  end
end
