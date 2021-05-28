module Api
  module V1
    class SessionsController < ApplicationController
      def create
        user = User.find_by(email: params[:email].downcase)
        if user && user.authenticate(params[:session][:password])
          payload = UserSerializer.new(user).serialized_json
          token = encode_token(payload)
          render json: token
        else 
          render json: { error: user.errors.messages}
        end
      end
    end
  end
end