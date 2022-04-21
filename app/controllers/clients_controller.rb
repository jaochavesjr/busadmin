# frozen_string_literal: true

# controller do cliente
class ClientsController < ApplicationController
  before_action :authorize
  before_action :set_client, only: %i[update show]

  def list
    @clients = if params[:q].blank?
                 Client.all
               else
                 Client.where('document LIKE :word OR full_name LIKE :word',
                              word: '%' + params[:q] + '%')
               end
    render json: @clients
  end

  def create
    @client = Client.new(params_client)

    if @client.save
      render json: @client, include: [:address], status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def update
    if @client.update(params_client)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @client
  end

  def cities
    @cities = City.all
    render json: @cities.name
  end

  private

  def set_client
    @client = Client.find(params[:id])
  end

  def params_client
    params.require(:client).permit(
      :full_name, :type_document, :document, :cellphone, :birthday, :under_age, :status,
      address_attributes: [:id, :street, :complement, :district, :city_id]
    )
  end
end
