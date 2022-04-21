# frozen_string_literal: true

# controller do Busao
class BusesController < ApplicationController
  before_action :authorize
  before_action :set_bus, only: %i[update show]

  def list
    @buses = if params[:q].blank?
               Bus.all
             else
               Bus.where('prefix LIKE :word OR plate LIKE :word',
               word: '%' + params[:q] + '%')
             end
    render json: @buses
  end

  def create
    @bus = Bus.new(params_bus)

    if @bus.save
      render json: @bus, status: :created
    else
      render json: @bus.errors, status: :unprocessable_entity
    end
  end

  def update
    if @bus.update(params_bus)
      render json: @bus
    else
      render json: @bus.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @bus
  end

  private

  def set_bus
    @bus = Bus.find(params[:id])
  end

  def params_bus
    params.require(:bus).permit(
      :prefix, :plate, :model_description, :year,
      :active, :toilet, :number_of_seats
    )
  end
end
