module Api
  module V1
    class UsersController < ApplicationController

      def create
        user = User.new(user_params)
        user.email = user.email.downcase
        if user.save
          payload = UserSerializer.new(user).serialized_json
          token = encode_token(payload)
          render json: token
        else
          puts user.errors.messages
          render json: { error: user.errors.messages}
        end
      end

      private

      def user_params
        params.require(:user).permit(:email, :password)
      end

    
    end
  end
end