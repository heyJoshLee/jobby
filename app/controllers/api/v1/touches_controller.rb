module Api
  module V1
    class TouchesController < ApplicationController

      before_action :set_touch, only: [:show, :update, :destroy]
      before_action :set_lead, only: [:index, :create]
      
      def show
        render json: TouchSerializer.new(@touch).serialized_json
      end

      def index 
        touches = @lead.touches.reverse
        render json: TouchSerializer.new(touches).serialized_json
      end

      def create
        touch = Touch.new(touch_params)
        touch.lead_id = @lead.id
        if touch.save
          render json: TouchSerializer.new(touch).serialized_json
        else
          render json: { error: touch.errors.messages}
        end
      end

      def update
        if @touch.update(touch_params)
          render json: TouchSerializer.new(@touch).serialized_json
        else
          render json: { error: @touch.errors.messages}
        end
      end

      def destroy
        if @touch.destroy
          head :no_content
        else
          render json: { error: @touch.errors.messages}
        end
      end


      private

      def touch_params
        params.require(:touch).permit(:title, :body, :lead_id, :status, :date)
      end

      def set_lead
        @lead = Lead.find_by(slug: params[:lead_slug])
      end

      def set_touch
        @touch = Touch.find(params[:id])
      end
    end
  end
end