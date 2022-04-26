# frozen_string_literal: true

# controller de Viagens
class TravelsController < ApplicationController
  before_action :authorize
  before_action :set_travel, only: %i[update show]
  def list
    @travels = if params[:q].blank?
                 Travel.all
               else
                 Travel.where('date LIKE :word',
                              word: " '%' #{params[:q]} '%' ")
               end
    render json: @travels
  end

  def create
    @travel = Travel.new(params_travel)

    if @travel.save
      render json: @travel, status: :created
    else
      render json: @travel.errors, status: :unprocessable_entity
    end
  end

  def update
    if @travel.update(params_travel)
      render json: @travel
    else
      render json: travel.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @travel
  end

  private

  def params_travel
    params.require(:travel).permit(
      :driver_id, :bus_id, :origin_id, :destination_id, :date, :status
    )
  end

  def set_travel
    @travel = Travel.find(params[:id])
  end
end
