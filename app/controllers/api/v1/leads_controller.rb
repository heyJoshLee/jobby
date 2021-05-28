module Api
  module V1
    class LeadsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        leads = Lead.all
        render json: LeadSerializer.new(leads).serialized_json
      end

      def show
        lead = Lead.find_by(slug: params[:slug])
        render json: LeadSerializer.new(lead).serialized_json
      end

      def create
        lead = Lead.new(lead_params)
        # TODO change this to logged in user
        lead.user_id = 1
        if lead.save
          render json: LeadSerializer.new(lead).serialized_json
        else
          render json: { error: lead.errors.messages}
        end
      end

      def update
        lead = Lead.find_by(slug: params[:slug])

        if lead.update(lead_params)
          render json: LeadSerializer.new(lead).serialized_json
        else
          render json: { error: lead.errors.messages}
        end
      end


      def destroy
        lead = Lead.find_by(slug: params[:slug])

        if lead.destroy
          head :no_content
        else
          render json: { error: lead.errors.messages}
        end
      end

      private

      def lead_params
        params.require(:lead).permit!
      end

      def options
        @options ||= { include: %i[touches] }
      end
    end
  end
end